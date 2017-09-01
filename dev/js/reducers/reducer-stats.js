function defaultState() {
    return {
        grubs: 0
    }
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "GRAB":
            if(action.payload.gain) {
                var modifier = {};
                modifier[action.payload.gain.key] = state[action.payload.gain.key] + action.payload.gain.value;
                return Object.assign({}, state, modifier);
            }
        case "BUILD":
            if(action.payload.cost) {
                var modifier = {};
                modifier[action.payload.cost.key] = state[action.payload.cost.key] - action.payload.cost.value;
                return Object.assign({}, state, modifier);
            }
    }
    return state;
}
