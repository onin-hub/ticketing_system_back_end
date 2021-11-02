import Sub_location_masterlist from '../../../../models/Sub_location.Model.js'

const is_sub_location_exist = async (sub_location_ObjectId) => {
    const sub_location = await Sub_location_masterlist.findById({
        _id: sub_location_ObjectId
    })

    return sub_location
}

export default is_sub_location_exist