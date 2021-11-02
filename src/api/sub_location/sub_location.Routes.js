import express from 'express'
const router = express.Router()

import {
    registerNewSubLocation,
    getSublocations,
    editSublocations
} from './sub_location.Controllers.js'
import {
    subLocationSchemavalidation,
    subLocation_validate_isAssign_to_location,
    subLocation_edit_validation
} from './schema/sub_location.Schema.Validation.js'

import expressValidatorErrorHandler from '../../middleware/express-validator.ErrorHandler.js'

router.route('/sub-location-registration').post(subLocationSchemavalidation, expressValidatorErrorHandler, registerNewSubLocation)
router.route('/get-sub-location').post(subLocation_validate_isAssign_to_location, expressValidatorErrorHandler, getSublocations)
router.route('/edit-sub-location').post(subLocation_edit_validation, expressValidatorErrorHandler, editSublocations)

export default router