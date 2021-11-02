import bycrpt from 'bcryptjs'

const hashing = async (password) => {
    const salt = await bycrpt.genSalt(10)
    let hashData = bycrpt.hash(password, salt)

    return hashData
}

export default hashing