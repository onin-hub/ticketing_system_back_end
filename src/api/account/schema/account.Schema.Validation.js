import { check } from 'express-validator'

/**
 * @schema @field all field sa model ng @Account.Model.js
 */

const employee_id = [
    check('user_account_info.employee_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Employee id is required')
        .isNumeric()
        .withMessage('Employee id must be a number')
]

const first_name = [
    check('user_account_info.first_name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .isString()
        .withMessage('First name must be a string')
        .toUpperCase()
]

const last_name = [
    check('user_account_info.last_name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .isString()
        .withMessage('Last name must be a string')
        .toUpperCase()
]

const user_name = [
    check('user_account_info.user_name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('User name is required')
        .isString()
        .withMessage('User name must be a string')
]

const password = [

    check('user_account_info.password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required.')
        .isString()
        .withMessage('Password value must be a string.')
]

const confirm_password = [
    check('user_account_info.confirm_password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Confirm password is required')
        .isString()
        .withMessage('Confirm password value must a string')
        .custom((value, { req }) => {
            if (value !== req.body.user_account_info.password) {
                throw new Error('Password and Confirm password must be the same')
            }
            return true
        })
]

const role = [
    check('user_account_info.role')
        .not()
        .isEmpty()
        .withMessage('Role is required')
        .isNumeric()
        .withMessage('Role value must be a numeric')
]

const isActive = [
    check('user_account_info.isActive')
        .isBoolean()
        .withMessage('isActive value must be a boolean')
]

const isNew_user_change_password = [
    check('user_account_info.isNew_user_change_password')
        .isBoolean()
        .withMessage('isNew_user_change_password value must be a boolean')
]

const location = [
    check('user_account_info.location')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Locatin is required')
        .isMongoId()
        .withMessage('location type must be ObjectId')
]

const sub_location = [
    check('user_account_info.sub_location')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Sub_locatin is required')
        .isMongoId()
        .withMessage('Sub_location type must be ObjectId')
]

const created_by = [
    check('user_account_info.created_by')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Created by is required')
        .isMongoId()
        .withMessage('Created by type must be ObjectId'),

]

const permissions = [
    check('permissions.create_admin')
        .isBoolean()
        .withMessage('create_admin value must be a boolean'),

    check('permissions.create_ticketer')
        .isBoolean()
        .withMessage('create_ticketer value must be a boolean'),

    check('permissions.create_completor')
        .isBoolean()
        .withMessage('create_completor value must be a boolean'),

    check('permissions.create_ticket')
        .isBoolean()
        .withMessage('create_ticket value must be a boolean'),

    check('permissions.close_ticket')
        .isBoolean()
        .withMessage('close_ticket value must be a boolean'),

    check('permissions.location_masterlist')
        .isBoolean()
        .withMessage('location_masterlist value must be a boolean'),
]

/**
 * @description using this Schem for validation in "USER CHANGE PASSWORD"
 */
const passwordWithRegEx = [
    /**
     * @regEx Demo https://stackoverflow.com/questions/33670870/regex-for-1-uppercase-1-special-character-and-1-lowercase
     * @start copy
     * ^
     * (?=.{8,})                //should be 8 characters or more
     * (?=.*[a-z])             //should contain at least one lower case
     * (?=.*[A-Z])             //should contain at least one upper case
     * (?=.*[@#$%^&+*!=])      //should contain at least 1 special characters
     * .*$
     * @end copy
     */

    check('user_account_info.password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required.')
        .isString()
        .withMessage('Password value must be a string.')
        .isLength({ min: 8, max: 20 })
        .withMessage('Password must be minimum of 8 character.')
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$")
        .withMessage('should contain at least one lower case, one upper case, 1 special characters')
]
/**
 * EXTRA
 */
const isObjectId = [
    check('user_ObjectId')
        .trim()
        .not()
        .isEmpty()
        .withMessage('ObjectId is required')
        .isMongoId()
        .withMessage('user_ObjectId type must be ObjectId')
]

/**
 * @description combination of field for validation
 */
const registerNewUserSchemaValidation = [
    ...employee_id,
    ...first_name,
    ...last_name,
    ...user_name,
    ...password,
    ...confirm_password,
    ...role,
    ...isActive,
    ...isNew_user_change_password,
    ...created_by,
    ...permissions
]

const validateisActiveValue = [
    ...isActive
]

const editRegisteredUserSchemaValidation = [
    ...employee_id,
    ...first_name,
    ...last_name,
    ...user_name,
    ...role,
    ...isActive,
    ...isNew_user_change_password,
    ...location,
    ...sub_location,
    ...created_by,
    ...permissions
]

const logInValidation = [
    ...user_name,
    ...password
]

const ChangePasswordSchemaValidation = [
    ...passwordWithRegEx,
    ...confirm_password
]

const validateIfLocationIdIsObjectId = [
    ...isObjectId,
    ...location
]

const isUserObjID = [
    ...isObjectId
]


export {
    registerNewUserSchemaValidation,
    validateisActiveValue,
    editRegisteredUserSchemaValidation,
    logInValidation,
    ChangePasswordSchemaValidation,
    validateIfLocationIdIsObjectId,

    isUserObjID
} 