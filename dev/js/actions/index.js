export const genericAction = (type, payload) => {
    console.log(type, payload);
    return {
        type: type,
        payload: payload
    }
};



