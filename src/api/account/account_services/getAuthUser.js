import User_account from '../../../models/Accounts.Model.js'

const getRegisteredAuthUser = async (req_user_data) => {
    const authUser = await User_account.findById({
        _id: req_user_data.id
    }, { 'user_account_info.password': 0 })
    if (!authUser) {
        return {
            status: false,
            noticeMessage: 'No user found!'
        }
    }
    return {
        status: true,
        authUser
    }
}

export default getRegisteredAuthUser