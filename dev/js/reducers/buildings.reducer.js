function defaultState() {
    return {
        
    }
}

function buildingModifier(state, action) {
    let modifier = {};

    if(action.payload.gain && action.payload.gain.buildings) {
        for(let key in action.payload.gain.buildings) {

            if(!state[key])
                state[key] = 0;

            modifier[key] = state[key] + action.payload.gain.buildings[key];
        }
    }

    if(action.payload.cost && action.payload.cost.buildings) {
        //The assumption here is that this action only fired when there was enough of the buildings to cover the cost
        for(let key in action.payload.cost.buildings) {
            modifier[key] = state[key] - action.payload.cost.buildings[key];
        }
    }

    return Object.assign({}, state, modifier);
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BUILD_GRUB_GRABBER":
            return buildingModifier(state, action);
    }
    return state;
}
