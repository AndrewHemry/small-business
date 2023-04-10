export const addBusiness = (newBusiness) => {
    return {
        type: "ADD_BUSINESS",
        value: newBusiness
    }
}

export const removeBusiness = (index) => {
    return {
        type: "REMOVE_BUSINESS",
        value: index
    }
}