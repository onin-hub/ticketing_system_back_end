import asyncErrorHandler from 'express-async-handler'

import registerNewLocation from './location_services/registerNewLocation.Services.js'
import getLocation from './location_services/getLocation.Services.js'
import editSpecificLocation from './location_services/editLocation.Services.js'
import locationActiveAndInactiveState from './location_services/locationActiveAndInactiveMode.Services.js'

const locationRegistration = asyncErrorHandler(async (req, res) => {
    let returnedData = await registerNewLocation(req.body)
    return res.json(returnedData)
})

const getLocationByIsactiveAndisAssign_by_admin = asyncErrorHandler(async (req, res) => {
    let returnedData = await getLocation(req.body)
    return res.json(returnedData)
})

const editLocation = asyncErrorHandler(async (req, res) => {
    let returnedData = await editSpecificLocation(req.body)
    return res.json(returnedData)
})

const locationActiveInactiveState = asyncErrorHandler(async (req, res) => {
    let returnedData = await locationActiveAndInactiveState(req.body)
    return res.json(returnedData)
})

export {
    locationRegistration,
    getLocationByIsactiveAndisAssign_by_admin,
    editLocation,
    locationActiveInactiveState
}