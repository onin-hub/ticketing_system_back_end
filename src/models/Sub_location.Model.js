import mongoose from 'mongoose'

const subLocationSchema = mongoose.Schema({
    sub_location_name: String,
    // default false , hnd pa sya naaassign sa location.
    isAssign_to_location: Boolean,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_account"
    }
}, { timestamps: true })

const Sub_location_masterlist = mongoose.model('Sub_location_masterlist', subLocationSchema)

export default Sub_location_masterlist