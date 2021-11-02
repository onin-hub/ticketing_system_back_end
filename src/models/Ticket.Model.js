import mongoose from 'mongoose'

const ticketSchema = mongoose.Schema({
    ticket_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User_account'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location_masterlist'
    },
    sub_location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub_location_masterlist"
    },
    ticket_name: String,
    ticket_description: String,
    date_started: Date,
    target_date: Date,
    date_close: Date,
    ticket_status: String,
    ticket_state: String,
    remark: String,
    image_proof_of_accomplishment: String,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User_account'
    }
}, { timestamps: true })

const Ticket_list = mongoose.model('Ticket_list', ticketSchema)

export default Ticket_list