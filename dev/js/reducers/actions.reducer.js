function defaultState() {
    return {
        grabGrub: {
            name: 'Grab Grub',
            type: 'GRAB_GRUB',
            show: true,
            payload: {
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
            show: true,
            requires: {
                stats: {
                    grubs: 10
                }
            },
            payload: {
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

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BLARP":
            break;

    }
    return state;
}
