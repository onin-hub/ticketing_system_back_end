import Location_masterlist from '../../../../models/Location.Model.js'

const is_location_exist = async (location_ObjectId, sub_location_ObjectId) => {
    const location = await Location_masterlist.findByIdAndUpdate(
        { _id: location_ObjectId },
        {
            $addToSet: {
                sub_location_coverage: sub_location_ObjectId
            }
        }
    )

    return location
}

export default is_location_exist