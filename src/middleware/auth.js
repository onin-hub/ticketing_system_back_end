import jwt from 'jsonwebtoken'

const protectRoute = (req, res, next) => {
    try {
        let token = req.headers.access_token
        const decoded = jwt.verify(token, process.env.jwtSecret)
        req.user = decoded.user
        next()
    } catch (error) {
        return res.json({
            errorMessage: 'Token is not valid!'
        })
    }
}

export { protectRoute }