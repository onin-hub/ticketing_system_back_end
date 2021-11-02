import User_account from '../../../models/Accounts.Model.js'
import hashing from '../../../helpers/hashing.Helper.js'
import bycrpt from 'bcryptjs'

const forceChangePassword = async (req_body_data) => {
    /**
     * @description force new account to change password
     */
    const { old_password, password, confirm_password } = req_body_data.user_account_info
    const { ObjectId_to_change_password } = req_body_data
    let user = await User_account.findById({
        _id: ObjectId_to_change_password
    })

    if (!user) {
        return {
            status: false,
            noticeMessage: 'no user found.'
        }
    }

    const isPasswordMatch = await bycrpt.compare(old_password, user.user_account_info.password)

    if (!isPasswordMatch) {
        return {
            status: false,
            noticeMessage: 'Old password incorrect.'
        }
    }

    if (password !== confirm_password) {
        return {
            status: false,
            noticeMessage: 'New password and confirm password must the same.'
        }
    }

    user.user_account_info.password = await hashing(password)
    user.user_account_info.isNew_user_change_password = true

    let isSave = await user.save()

    if (!isSave) {
        return {
            status: false,
            noticeMessage: 'Something went wrong.'
        }
    }

    return {
        status: true,
        successMessage: 'Password Successfully changed!'
    }

}

export default forceChangePassword