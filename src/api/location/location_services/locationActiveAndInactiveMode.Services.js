import Location_masterlist from '../../../models/Location.Model.js'

const locationActiveAndInactiveState = async (req_body_data) => {
    const { ObjectId_to_update, isActive } = req_body_data
    const location = await Location_masterlist.findById({
        _id: ObjectId_to_update
    })

    if (!location) {
        return {
            status: false,
            noticeMessage: 'no location found!'
        }
    }

    location.isActive = isActive

    await location.save()

    if (isActive == false) {
        return {
            status: true,
            successMessage: `Location ${location.location_name} deactivated.`
        }
    }

    if (isActive == true) {
        return {
            status: true,
            successMessage: `Location ${location.location_name} activated.`
        }
    }
}

export default locationActiveAndInactiveState