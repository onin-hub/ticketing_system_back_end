import User_account from '../../../../models/Accounts.Model.js'

const is_fisrtname_lastname_exist = async (first_name, last_name) => {
    const user = await User_account.find({ $and: [{ 'user_account_info.first_name': first_name }, { 'user_account_info.last_name': last_name }] }).populate('user_account_info.location').populate('user_account_info.sub_location')
    return user
}

export default is_fisrtname_lastname_exist