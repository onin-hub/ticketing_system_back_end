import { check } from 'express-validator'
/**
 * @schema @field all field sa model ng @Ticket.Model.js
 */
const ticket_owner = [
    check('ticket_owner')
        .isMongoId()
        .withMessage('ticket_owner must be mongoId')
        .not()
        .isEmpty()
        .withMessage('Ticket owner is required')
]
const ticket_name = [
    check('ticket_name')
        .trim()
        .not()
        .isEmail()
        .withMessage("Ticket name is required")
        .isString()
        .withMessage('Ticket name must be string')
]
const ticket_description = [
    check('ticket_description')
        .trim()
        .not()
        .isEmail()
        .withMessage("Ticket Description is required")
        .isString()
        .withMessage('Description must be string')
]
const date_started = [
    check('date_started')
        .trim()
        .not()
        .isEmpty()
        .withMessage('date_started is required')
        .isDate()
        .withMessage('Value must be date and ISO format')
]
const target_date = [
    check('target_date')
        .trim()
        .not()
        .isEmpty()
        .withMessage('target_date is required')
        .isDate()
        .withMessage('Value must be date and ISO format')
]
const date_close = [
    check('date_close')
        .trim()
        .not()
        .isDate()
        .withMessage('Value must be date and ISO format')
]
const ticket_status = [
    check('ticket_status')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Ticket Status is required value must be Open')
        .isString()
        .withMessage('Ticket status must be string')
]
const ticket_state = [
    check('ticket_state')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Ticket state is required value must be Process')
        .isString()
        .withMessage('Ticket state must be string')
]
const remark = [
    check('remark')
        .trim()
        .isString()
        .withMessage('Remark must be string')
]
const created_by = [
    check('created_by')
        .not()
        .isEmpty()
        .withMessage('Created by is required')
        .isMongoId()
        .withMessage('Type must be mongoId')
]
/**
 * not yet use
 */
const image_proof_of_accomplishment = [
    check('image_proof_of_accomplishment')
]

const ticketSchemaValidation = [
    ...ticket_owner,
    ...ticket_name,
    ...ticket_description,
    ...date_started,
    ...target_date,
    ...date_close,
    ...ticket_status,
    ...ticket_state,
    ...remark,
    ...created_by
]

export {
    ticketSchemaValidation
}