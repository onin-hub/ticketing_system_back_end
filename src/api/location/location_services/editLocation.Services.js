import Location_masterlist from '../../../models/Location.Model.js'

const editSpecificLocation = async (req_body_data) => {
    const { ObjectId_to_update, location_name } = req_body_data

    let location = await Location_masterlist.findById({
        _id: ObjectId_to_update
    })

    const orginalNameOfLocation = location.location_name

    if (!location) {
        return {
            status: false,
            noticeMessage: "no location found!"
        }
    }

    location.location_name = location_name

    await location.save()

    return {
        status: true,
        successMessage: `location name: ${orginalNameOfLocation} updated to ${location_name}`
    }
}

export default editSpecificLocation