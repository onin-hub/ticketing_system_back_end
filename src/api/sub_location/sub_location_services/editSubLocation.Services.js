import Sub_location_masterlist from '../../../models/Sub_location.Model.js'

const editSpecificSubLocation = async (req_body_data) => {
    const { ObjectId_to_update, sub_location_name } = req_body_data

    const subLocation = await Sub_location_masterlist.findById({
        _id: ObjectId_to_update
    })

    const originalNameOfSubLocation = subLocation.sub_location_name

    if (!subLocation) {
        return {
            status: false,
            noticeMessage: "no sub location found!"
        }
    }

    subLocation.sub_location_name = sub_location_name

    await subLocation.save()

    return {
        status: true,
        successMessage: `location name: ${originalNameOfSubLocation} updated to ${sub_location_name}`
    }
}

export default editSpecificSubLocation

