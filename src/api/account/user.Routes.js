import express from 'express'
import { protectRoute } from '../../middleware/auth.js'
const router = express.Router()

import {
    registerUser,
    getAllUserAccountDetails,
    editRegisteredUser,
    assignUserToActiveOrInactive,
    registeredUserLogIn,
    getAuthenticateUser,
    forceUserToChangePassword,

    userView
} from './user.Controllers.js'

import {
    registerNewUserSchemaValidation,
    editRegisteredUserSchemaValidation,
    logInValidation,
    ChangePasswordSchemaValidation,
    validateisActiveValue,
    isUserObjID
} from './schema/account.Schema.Validation.js'

import expressValidatorErrorHandler from '../../middleware/express-validator.ErrorHandler.js'

router.route('/register-new-user').post(registerNewUserSchemaValidation, expressValidatorErrorHandler, registerUser)
router.route('/get-all-user-details-active').post(validateisActiveValue, expressValidatorErrorHandler, getAllUserAccountDetails)
router.route('/edit-registered-user').post(editRegisteredUserSchemaValidation, expressValidatorErrorHandler, editRegisteredUser)
router.route('/assign-user-to-active-or-inactive').post(validateisActiveValue, expressValidatorErrorHandler, assignUserToActiveOrInactive)
router.route('/user-login').post(logInValidation, expressValidatorErrorHandler, registeredUserLogIn)
router.route('/get-auth-user').get(protectRoute, getAuthenticateUser)
router.route('/force-change-password').post(ChangePasswordSchemaValidation, expressValidatorErrorHandler, forceUserToChangePassword)

router.route('/coverage-user-details').post(isUserObjID, expressValidatorErrorHandler, userView)


export default router