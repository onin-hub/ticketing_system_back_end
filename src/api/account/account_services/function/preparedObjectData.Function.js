import User_account from '../../../../models/Accounts.Model.js'
import hashing from '../../../../helpers/hashing.Helper.js'

const prepared_object = async (req_body_data, password) => {
    let newUser = new User_account(req_body_data)
    newUser.user_account_info.password = await hashing(password)

    return newUser
}

export default prepared_object