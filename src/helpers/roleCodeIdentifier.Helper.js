const roleCodeIdentifier = (role) => {
    if (role == 1) {
        return "Super Admin"
    }
    if (role == 2) {
        return "Admin"
    }
    if (role == 3) {
        return "Ticketer"
    }
    if (role == 4) {
        return "Completor"
    }
}

export default roleCodeIdentifier