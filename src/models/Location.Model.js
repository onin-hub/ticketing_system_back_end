import mongoose from 'mongoose'

const locationSchema = mongoose.Schema({
    location_name: String,
    //default true dahil kaka create palang
    isActive: Boolean,
    //default false dahil hnd pa naaassign nung location sa admin
    isAssign_by_admin: Boolean,
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_account"
    },
    sub_location_coverage: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub_location_masterlist"
    }],
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_account"
    },
}, { timestamps: true })

const Location_masterlist = mongoose.model("Location_masterlist", locationSchema)

export default Location_masterlist