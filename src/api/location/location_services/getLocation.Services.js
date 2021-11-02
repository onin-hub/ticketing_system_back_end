import Location_masterlist from '../../../models/Location.Model.js'

const getLocation = async (req_body_data) => {
    const { isActive, isAssign_by_admin } = req_body_data
    const location = await Location_masterlist.find({
        $and: [{ isActive: isActive }, { isAssign_by_admin: isAssign_by_admin }]
    })

    return location
}

export default getLocation