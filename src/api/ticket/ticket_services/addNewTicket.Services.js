import Ticket_list from '../../../models/Ticket.Model.js'

const addNewTicket = async (req_body_data) => {

    let newTicket = new Ticket_list(req_body_data)

    await newTicket.save()

    return {
        status: true,
        successMessage: 'Ticket successfully created!'
    }
}

export default addNewTicket