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

export const killAllGoblins = () => {
    return {
        type: 'KILL_ALL_GOBLINS',
        payload: {}
    }
}
