function defaultState() {
    return {
        activeEvents: [
            {
                name: 'Dummy Event'
            }
        ],
        pastEvents: []
    }
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BLARP":
            break;

    }
    return state;
}
