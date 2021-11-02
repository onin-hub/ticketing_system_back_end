import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
/**
 * @description routes
 */
import userRoutes from './api/account/user.Routes.js'
import locationRoutes from './api/location/location.Routes.js'
import subLocationRoutes from './api/sub_location/sub_location.Routes.js'
import ticketRoutes from './api/ticket/ticket.Routes.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/location', locationRoutes)
app.use('/api/sub-location', subLocationRoutes)
app.use('/api/ticket', ticketRoutes)

const PORT = process.env.PORT || 2200
app.listen(
    PORT,
    console.log(`server ${PORT} is running in ${process.env.NODE_ENV}`),
    console.log('Ticketing System')
)