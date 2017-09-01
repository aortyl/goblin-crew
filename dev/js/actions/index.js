export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
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
