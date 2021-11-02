import Sub_location_masterlist from '../../../models/Sub_location.Model.js'

const addNewSubLocation = async (req_body_data) => {
    const { sub_location_name } = req_body_data
    const subLocation = await Sub_location_masterlist.find({
        sub_location_name: sub_location_name
    })

    if (subLocation.length >= 1) {
        return {
            status: false,
            noticeMessage: `Sub location name: ${sub_location_name} already exist!`
        }
    }
    let newSubLocation = new Sub_location_masterlist(req_body_data)
    await newSubLocation.save()
    return {
        status: true,
        successMessage: 'Sub location successfully added.'
    }
}

export default addNewSubLocation