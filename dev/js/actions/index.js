export const genericAction = (type, payload) => {
    console.log(type, payload);
    return {
        type: type,
        payload: payload
    }
};

export const grabGrub = () => {
    return {
        type: 'GRAB',
        payload: {
            gain: {
                key: 'grubs',
                value: 1
            }
        }
    }
};

export const buildGrubGrabber = () => {
    return {
        type: "BUILD",
        payload: {
            cost: {
                key: 'grubs',
                value: 100
            }
        }
    }
};


