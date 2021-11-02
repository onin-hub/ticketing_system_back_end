import User_account from '../../../models/Accounts.Model.js'

const assigToActiveOrInactive = async (req_body_data) => {
    const { isActive } = req_body_data.user_account_info
    const { ObjectId_to_update } = req_body_data
    let user = await User_account.findById({
        _id: ObjectId_to_update
    })

    if (!user) {
        return {
            status: false,
            noticeMessage: 'No user found!'
        }
    }

    user.user_account_info.isActive = isActive

    const isSave = await user.save()

    if (isSave) {
        if (isActive == true) {
            return {
                status: true,
                successMessage: `${user.user_account_info.first_name} ${user.user_account_info.last_name} account successfully activated!`
            }
        }

        if (isActive == false) {
            return {
                status: true,
                successMessage: `${user.user_account_info.first_name} ${user.user_account_info.last_name} account successfully deactivated!`
            }
        }
    }

    if (!isSave) {
        return {
            status: false,
            noticeMessage: 'something went wrong , action not proceed.'
        }
    }

}

export default assigToActiveOrInactive