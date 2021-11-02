import Sub_location_masterlist from '../../../models/Sub_location.Model.js'

const getAllSubLocations = async (req_body_data) => {
    const { isAssign_to_location } = req_body_data

    const sub_locations = await Sub_location_masterlist.find({
        isAssign_to_location: isAssign_to_location
    })

    return sub_locations
}

export default getAllSubLocations