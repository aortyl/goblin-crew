function defaultState() {
    return {
        statLibrary: {
            grubs: {
                name: 'Grubs',
                value: 0,
                modifier: 0
            }
        }
    }
}

const statModifier = (state, action) => {
    let modifier = {};

    if(action.payload.gain && action.payload.gain.stats) {
        for(let key in action.payload.gain.stats) {

            modifier[key] = state[key];

            if(!modifier[key])
                modifier[key] = state.statLibrary[key];
            modifier[key].value += action.payload.gain.stats[key];
        }
    }

    if(action.payload.cost && action.payload.cost.stats) {
        //The assumption here is that this action only fired when there was enough of the stats to cover the cost
        for(let key in action.payload.cost.stats) {
            modifier[key] = state[key];
            modifier[key].value -= action.payload.cost.stats[key];
        }
    }

    return Object.assign({}, state, modifier);
};

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "GRAB_GRUB":
        case "BUILD_GRUB_GRABBER":
        case "GRAB_ROCK":
        case "SHARPEN_ROCK":
            return statModifier(state, action);
        case "GENERATOR_DIGEST":
            return statModifier(state, action);

    }
    return state;
}
