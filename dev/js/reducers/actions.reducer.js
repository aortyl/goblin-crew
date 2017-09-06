function defaultState() {
    return {
        GRAB_GRUB: {
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
        GRAB_ROCK: {
            name: 'Grab Rock',
            type: 'GRAB_ROCK',
            show: false,
            requires: {
                stats: {
                    grubs: 15
                }
            },
            payload: {
                gain: {
                    stats: {
                        rocks: 1
                    }
                },
                cost: {
                    stats: {
                        grubs: 10
                    }
                }
            }
        },
        SHARPEN_ROCK: {
            name: 'Sharpen Rock',
            type: 'SHARPEN_ROCK',
            show: false,
            requires: {
                stats: {
                    rocks: 10
                }
            },
            payload: {
                gain: {
                    stats: {
                        sharpenedRocks: 1
                    }
                },
                cost: {
                    stats: {
                        grubs: 10,
                        rocks: 2
                    }
                }
            }
        },
        BUILD_GRUB_GRABBER: {
            name: 'Build Grub Grabber',
            type: 'BUILD_GRUB_GRABBER',
            show: false,
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

//TODO - Currently actions will appear/disappear if their required is met, but they haven't been set to show. Would be
//TODO - useful to devise a way to set show: true when a threshold is met, but without always checking it.
//TODO - One idea is to have some sort of 'threshold' event that disappears after met.
//TODO - BONUS: When these thresholds are met, we can pop up a message to user: 'You're goblins figured it out!'

const setStateTrue = (state, key) => {
    let modifier = {};
    modifier[key] = Object.assign({}, state[key], {show: true});
    return Object.assign({}, state, modifier);
};

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BUILD_GRUB_GRABBER":
        case "GRAB_ROCK":
        case "SHARPEN_ROCK":
            return setStateTrue(state, action.type)
    }
    return state;
}
