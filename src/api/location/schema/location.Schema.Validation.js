import { check } from 'express-validator'

/**
 * @schema @field all field sa model ng @Location.Model.js
 */
const location_name = [
    check('location_name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Location name is required')
        .isString()
        .withMessage('Location name must be string')
        .toUpperCase()
]

const isActive = [
    check('isActive')
        .isBoolean()
        .withMessage('isActive must be boolean')
]

const isAssign_by_admin = [
    check('isAssign_by_admin')
        .isBoolean()
        .withMessage('isAssign_by_admin must be boolean')
]

const sub_location_coverage = [
    check('sub_location_coverage')
        .isArray()
]

const created_by = [
    check('created_by')
        .trim()
        .isMongoId()
        .withMessage("created_by must be mongoId")
]
/**
 * @description extra
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
const locationSchemaValidation = [
    ...location_name,
    ...isActive,
    ...isAssign_by_admin,
    ...sub_location_coverage,
    ...created_by
]

const isActiveAndisAssign_by_admin_Validation = [
    ...isActive,
    ...isAssign_by_admin
]

const locationValidation = [
    ...ObjectId_to_update,
    ...location_name
]

const locationIsactiveValidation = [
    ...isActive
]






export {
    locationSchemaValidation,
    isActiveAndisAssign_by_admin_Validation,
    locationValidation,
    locationIsactiveValidation
} 