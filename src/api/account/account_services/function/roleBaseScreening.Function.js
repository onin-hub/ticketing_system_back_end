import User_account from '../../../../models/Accounts.Model.js'

const role_base_screening = async (role, location_ObjectId, sub_location_ObjectId, isActive) => {
    /**
    * @description
    * only one Super Admin
    * Role: Super Admin = Role code: 1
    * 
    * only one Admin in every Location
    * Role: Admin = Role code: 2
    * note: Admin user_account_info.location value is to user_account_info.sub_location meaning to say
    * admin sya sa lahat ng under ng location
    * 
    * only one Ticketer in every sub location over Location
    * Role: Ticketer = Role code: 3
    * 
    * multiple completor in every Sub location over Location
    * Role: Completor = Role code: 4
    */

    if (role == 1) {
        const user = await User_account.findOne({
            'user_account_info.role': role,
        })

        if (user) {
            return {
                status: false,
                noticeMessage: `You can create one Super Admin only, Current Super Admin now is : ${user.user_account_info.first_name} ${user.user_account_info.last_name}`,
            }
        }

        return {
            status: true,
        }
    }

    if (role == 2) {
        const user = await User_account.findOne({
            'user_account_info.role': role,
            'user_account_info.isActive': isActive,
            'user_account_info.location': location_ObjectId,
            'user_account_info.sub_location': location_ObjectId,
        }).populate('user_account_info.location')

        if (user) {
            return {
                status: false,
                noticeMessage: `You can't add more than 1 admin to ${user.user_account_info.location.location_name} location`,
            }
        }
        return {
            status: true,
        }
    }

    if (role == 3) {
        const user = await User_account.findOne({
            'user_account_info.role': role,
            'user_account_info.isActive': isActive,
            'user_account_info.location': location_ObjectId,
            'user_account_info.sub_location': sub_location_ObjectId,
        }).populate('user_account_info.location').populate('user_account_info.sub_location')

        if (user) {
            return {
                status: false,
                noticeMessage: `You can't add more than 1 ticketer to ${user.user_account_info.location.location_name} location and ${user.user_account_info.sub_location.sub_location_name} sub location`,
            }
        }
        return {
            status: true,
        }
    }

    if (role == 4) {
        return {
            status: true,
            noticeMessage: 'no action proceed to add completor',
        }
    }

    //role 4 can add multiple times
}

export default role_base_screening