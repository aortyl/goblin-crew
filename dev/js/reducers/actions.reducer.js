function defaultState() {
    return {
        grabGrub: {
            name: 'Grab Grub',
            type: 'GRAB_GRUB',
            show: true,
            payload: {
                actionKey: 'grabGrub',
                gain: {
                    stats: {
                        grubs: 1
                    }
                }
            }
        },
        buildGrubGrabber: {
            name: 'Build Grub Grabber',
            type: 'BUILD_GRUB_GRABBER',
            show: false,
            requires: {
                stats: {
                    grubs: 10
                }
            },
            payload: {
                actionKey: 'buildGrubGrabber',
                cost: {
                    stats: {
                        grubs: 10
                    }
                },
                gain: {
                    buildings: {
                        grubGrabber: 1
                    }
                }
            }
        },
    }
}

let setStateTrue = (state, key) => {
    let modifier = {};
    modifier[key] = Object.assign({}, state[key], {show: true});
    return Object.assign({}, state, modifier);
};

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BUILD_GRUB_GRABBER":
            return setStateTrue(state, action.payload.actionKey)
    }
    return state;
}
