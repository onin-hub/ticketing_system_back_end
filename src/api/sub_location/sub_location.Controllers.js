import asyncErrorHandler from 'express-async-handler'

import addNewSubLocation from './sub_location_services/addNewSubLocation.Services.js'
import getAllSubLocations from './sub_location_services/getSublocation.Services.js'
import editSpecificSubLocation from './sub_location_services/editSubLocation.Services.js'

const registerNewSubLocation = asyncErrorHandler(async (req, res) => {
    let returnedData = await addNewSubLocation(req.body)
    return res.json(returnedData)
})

const getSublocations = asyncErrorHandler(async (req, res) => {
    let returnedData = await getAllSubLocations(req.body)
    return res.json(returnedData)
})

const editSublocations = asyncErrorHandler(async (req, res) => {
    let returnedData = await editSpecificSubLocation(req.body)
    return res.json(returnedData)
})

export {
    registerNewSubLocation,
    getSublocations,
    editSublocations
}