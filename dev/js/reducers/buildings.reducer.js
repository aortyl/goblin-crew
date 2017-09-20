function defaultState() {
    return {
        generator: {

        },
        other: {

        },
        buildingLibrary: {
            grubGrabber: {
                name: "Grub Grabber",
                type: "generator",
                gain: {
                    stats: {
                        grubs: 1
                    }
                }
            },
            rockGrabber: {
                name: "Rock Grabber",
                type: "generator",
                gain: {
                    stats: {
                        rocks: 1
                    }
                }
            },
            rockSharpener: {
                name: "Rock Sharpener",
                type: "generator",
                gain: {
                    stats: {
                        sharpRocks: 1
                    }
                },
                cost: {
                    rocks: 3
                }
            },
            stickGrabber: {
                name: "Stick Grabber",
                type: "generator",
                gain: {
                    stats: {
                        sticks: 1
                    }
                }
            },
            stickSharpener: {
                name: "Stick Sharpener",
                type: "generator",
                gain: {
                    stats: {
                        sharpSticks: 1
                    }
                },
                cost: {
                    sticks: 2,
                    sharpRocks: 2
                }
            }
        }
    }
}

function buildingModifier(state, action) {
    let modifier = {};

    if(action.payload.gain && action.payload.gain.buildings) {
        for(let key in action.payload.gain.buildings) {
            let buildingType = state.buildingLibrary[key].type;

            modifier[buildingType] = Object.assign({}, state[buildingType]);

            if(!modifier[buildingType][key])
                modifier[buildingType][key] = 0;

            modifier[buildingType][key] += action.payload.gain.buildings[key];
        }
    }

    if(action.payload.cost && action.payload.cost.buildings) {
        //The assumption here is that this action only fired when there was enough of the buildings to cover the cost
        for(let key in action.payload.cost.buildings) {
            let buildingType = state.buildingLibrary[key].type;

            modifier[buildingType] = Object.assign({}, state[buildingType]);

            modifier[buildingType][key] -= action.payload.gain.buildings[key];
        }
    }

    return Object.assign({}, state, modifier);
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BUILD_GRUB_GRABBER":
            return buildingModifier(state, action);
        case "KILL_ALL_GOBLINS":
            return defaultState();
    }
    return state;
}
