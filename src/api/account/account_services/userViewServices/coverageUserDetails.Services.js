import User_account from '../../../../models/Accounts.Model.js'

const coverageUserDetails = async (req_body_data) => {
    const { user_ObjectId, getTicketer, getCompletor } = req_body_data

    const user = await User_account.findById({ _id: user_ObjectId })

    if (!user) {
        return {
            status: false,
            noticeMessage: 'User not exist something went wrong.'
        }
    }

    let query = {}

    if (user.user_account_info.role == 1) {
        query['user_account_info.first_name'] = { $ne: user.user_account_info.first_name },
            query['user_account_info.last_name'] = { $ne: user.user_account_info.last_name }
    }

    if (user.user_account_info.role == 2) {
        query['user_account_info.location'] = user.user_account_info.location,
            query['user_account_info.first_name'] = { $ne: user.user_account_info.first_name },
            query['user_account_info.last_name'] = { $ne: user.user_account_info.last_name }
        if (getTicketer || getCompletor) {
            query['$or'] = [{ 'user_account_info.role': getTicketer ? getTicketer : null }, { 'user_account_info.role': getCompletor ? getCompletor : null }]
        }
    }

    if (user.user_account_info.role == 3) { console.log("??????") }
    if (user.user_account_info.role == 4) { console.log("??????") }

    const adminCoverUser = await User_account.find(
        query
    )

    return adminCoverUser
}

export default coverageUserDetails