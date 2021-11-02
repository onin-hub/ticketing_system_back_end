import User_account from '../../../models/Accounts.Model.js'
const getAllRegisteredUser = async (req_body_data) => {
    const { isActive } = req_body_data.user_account_info
    const allUsers = await User_account.find({
        'user_account_info.isActive': isActive
    }, { 'user_account_info.password': 0 })
    return allUsers
}
export default getAllRegisteredUser