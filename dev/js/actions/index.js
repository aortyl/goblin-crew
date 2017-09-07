export const genericAction = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
};

export const generatorDigest = (payload) => {
    return {
        type: 'GENERATOR_DIGEST',
        payload: payload
    }
};

