import User_account from '../../../models/Accounts.Model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userLogin = async (req_body_data) => {
    const { user_name, password } = req_body_data.user_account_info

    let user = await User_account.findOne({
        'user_account_info.user_name': user_name
    })

    if (!user) {
        return {
            status: false,
            noticeMessage: 'Username or password is incorrect!'
        }
    }

    const isPasswordMatch = await bcrypt.compare(password, user.user_account_info.password)

    if (!isPasswordMatch) {
        return {
            status: false,
            noticeMessage: 'Username or password is incorrect!'
        }
    }

    const payload = {
        user: {
            id: user._id
        }
    }

    let token = jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
    )

    return { status: true, access_token: token }
}

export default userLogin