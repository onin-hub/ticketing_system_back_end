import Location_masterlist from '../../../models/Location.Model.js'

const registerNewLocation = async (req_body_data) => {
    const { location_name } = req_body_data

    const location = await Location_masterlist.find({
        location_name: location_name
    })

    if (location.length >= 1) {
        return {
            status: false,
            noticeMessage: `Location name: ${location_name} already exist!`
        }
    }

    let newLocation = new Location_masterlist(req_body_data)

    await newLocation.save()

    return {
        status: true,
        successMessage: `${location_name} successfully added.`
    }
}

export default registerNewLocation