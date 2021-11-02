import mongoose from 'mongoose'

const userPermissionsSchema = mongoose.Schema({
    create_admin: Boolean,
    create_ticketer: Boolean,
    create_completor: Boolean,
    create_ticket: Boolean,
    close_ticket: Boolean,
    location_masterlist: Boolean,
})

const userAccountSchema = mongoose.Schema({
    user_account_info: {
        employee_id: Number,
        first_name: String,
        last_name: String,
        user_name: String,
        password: String,
        role: Number,
        isActive: Boolean,
        isNew_user_change_password: Boolean,
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location_masterlist"
        },
        sub_location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sub_location_masterlist"
        },
        created_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User_account"
        },
    },
    permissions: userPermissionsSchema
}, { timestamps: true })

const User_account = mongoose.model('User_account', userAccountSchema)

export default User_account