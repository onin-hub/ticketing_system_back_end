import User_account from '../../../../models/Accounts.Model.js'

const is_username_exist = async (user_name) => {
    const userName = await User_account.find({ 'user_account_info.user_name': user_name })
    return userName
}

export default is_username_exist