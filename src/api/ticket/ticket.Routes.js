import express from 'express'
const router = express.Router()

import { registerNewTicket } from './ticket.Controllers.js'
import { ticketSchemaValidation } from './schema/ticket.Schema.Validation.js'

import expressValidatorErrorHandler from '../../middleware/express-validator.ErrorHandler.js'

router.route('/new-ticket-registration').post(ticketSchemaValidation, expressValidatorErrorHandler, registerNewTicket)

export default router