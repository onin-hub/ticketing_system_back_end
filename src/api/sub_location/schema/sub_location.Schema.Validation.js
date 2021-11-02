import { check } from 'express-validator'
/**
 * @schema @field all field sa model ng @Sub_location.Model.js
 */
const sub_location_name = [
    check('sub_location_name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Sub location name is required')
        .isString()
        .withMessage('Sub location name must be string')
        .toUpperCase()
]

const isAssign_to_location = [
    check('isAssign_to_location')
        .isBoolean()
        .withMessage('isAssign_to_location must be boolean')
]

const created_by = [

    check('created_by')
        .isMongoId()
        .withMessage('created_by must be mongoId')
]

/**
 * @Description extra
 */
const ObjectId_to_update = [
    check('ObjectId_to_update')
        .trim()
        .not()
        .isEmpty()
        .withMessage('ObjectId_to_update is required')
        .isMongoId()
        .withMessage('ObjectId_to_update must be type of ObjecId')
]

/**
 * @description combination of field screening or validation
 */
const subLocationSchemavalidation = [
    ...sub_location_name,
    ...isAssign_to_location,
    ...created_by
]

const subLocation_validate_isAssign_to_location = [
    isAssign_to_location
]

const subLocation_edit_validation = [
    ...ObjectId_to_update,
    ...sub_location_name
]

export {
    subLocationSchemavalidation,
    subLocation_validate_isAssign_to_location,
    subLocation_edit_validation
} 