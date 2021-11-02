import asyncErrorHandler from 'express-async-handler'

import addNewTicket from './ticket_services/addNewTicket.Services.js'

const registerNewTicket = asyncErrorHandler(async (req, res) => {
    let returnedData = await addNewTicket(req.body)
    return res.json(returnedData)
})

export { registerNewTicket }