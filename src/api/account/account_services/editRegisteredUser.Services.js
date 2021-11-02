import User_account from '../../../models/Accounts.Model.js'

const editRegisteredUserAccount = async (req_body_data) => {
    const { ObjecId_to_update, user_account_info, permissions } = req_body_data
    const newInfoWithExistingPassword = user_account_info

    let user = await User_account.findByIdAndUpdate({ _id: ObjecId_to_update })

    /**
     * @description nung ibabato ng front is wala nung password field kaya lagay muna nung password field sa object
     */
    newInfoWithExistingPassword.password = user.user_account_info.password

    if (!user) {
        return {
            status: false,
            noticeMessage: 'User not exist, consult to developer'
        }
    }

    user.user_account_info = newInfoWithExistingPassword
    user.permissions = permissions

    await user.save()

    return {
        status: true,
        successMessage: `Account successfully updated`
    }
}

export default editRegisteredUserAccount