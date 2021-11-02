import express from 'express'
const router = express.Router()

import {
    locationRegistration,
    getLocationByIsactiveAndisAssign_by_admin,
    editLocation,
    locationActiveInactiveState
} from './location.Controllers.js'

import {
    locationSchemaValidation,
    isActiveAndisAssign_by_admin_Validation,
    locationValidation,
    locationIsactiveValidation
} from './schema/location.Schema.Validation.js'

import expressValidatorErrorHandler from '../../middleware/express-validator.ErrorHandler.js'

router.route('/register-new-location').post(locationSchemaValidation, expressValidatorErrorHandler, locationRegistration)
router.route('/get-location-by-isactive-and-isassign-by-admin').post(isActiveAndisAssign_by_admin_Validation, expressValidatorErrorHandler, getLocationByIsactiveAndisAssign_by_admin)
router.route('/edit-specific-location').post(locationValidation, expressValidatorErrorHandler, editLocation)
router.route('/location-active-and-inactive-state').post(locationIsactiveValidation, expressValidatorErrorHandler, locationActiveInactiveState)

export default router