import role_identifier from '../../../helpers/roleCodeIdentifier.Helper.js'

import is_fisrtname_lastname_exist from './function/isFisrtNameLasNameExist.Function.js'
import is_username_exist from './function/isUserNameExist.Function.js'
import prepared_object from './function/preparedObjectData.Function.js'
import is_location_exist from './function/isLocationExist.Function.js'
import is_sub_location_exist from './function/isSubLocationExist.Function.js'
import role_base_screening from './function/roleBaseScreening.Function.js'

const registerNewUserAccount = async (req_body_data) => {

    /**
    * @description ROLE & ROLE CODE example in Role_&_RoleCode.txt @folder Read_Me_File
   */

    const {
        location_ObjectId,
        sub_location_ObjectId
    } = req_body_data

    const {
        first_name,
        last_name,
        user_name,
        password,
        role,
        isActive
    } = req_body_data.user_account_info

    //validation

    //validate Employee ID if Exist

    let user = await is_fisrtname_lastname_exist(first_name, last_name)

    if (user.length >= 1) {
        const role = await role_identifier(user[0].user_account_info.role)
        return {
            status: false,
            noticeMessage: `${first_name} ${last_name} already have account as ${role} at Location: ${user[0].user_account_info.location.location_name} at Sub-location: ${user[0].user_account_info.sub_location.sub_location_name} `
        }
    }

    let userName = await is_username_exist(user_name)

    if (userName.length >= 1) {
        return {
            status: false,
            noticeMessage: 'Username already exist try another one.'
        }
    }

    const resultScreening = await role_base_screening(role, location_ObjectId, sub_location_ObjectId, isActive)

    if (resultScreening.status == false) {
        return {
            noticeMessage: resultScreening.noticeMessage
        }
    }

    // prepare data to save in database and update location and sublocation if needed.
    let newUser = await prepared_object(req_body_data, password)

    if (location_ObjectId) {
        let location = await is_location_exist(location_ObjectId)

        if (!location) {
            return {
                status: false,
                noticeMessage: 'Location ObjectId not exist, No location found.'
            }
        }

        newUser.user_account_info.location = location_ObjectId

        if (role == 2) {
            newUser.user_account_info.sub_location = location_ObjectId
            location.isAssign_by_admin = true
            location.admin_id = newUser._id
        }

        await location.save()
    }

    if (sub_location_ObjectId) {

        let sub_location = await is_sub_location_exist(sub_location_ObjectId)

        if (!sub_location) {
            return {
                status: false,
                noticeMessage: 'Sub location ObjectId not exist, No Sub location found.'
            }
        }

        sub_location.isAssign_to_location = true
        newUser.user_account_info.sub_location = sub_location_ObjectId
        await sub_location.save()

        let updateThisLocation = await is_location_exist(location_ObjectId, sub_location_ObjectId)

        if (!updateThisLocation) {
            return {
                status: false,
                noticeMessage: 'Location ObjectId not exist, No Location found.'
            }
        }
        /**
         * 
         * solve this push the sub location id if not EXIST!
         */
        // updateThisLocation.sub_location_coverage.push(sub_location_ObjectId)
        // await updateThisLocation.save()
    }

    await newUser.save()

    return {
        status: true,
        successMessage: "New user successfully created!"
    }
}

export default registerNewUserAccount