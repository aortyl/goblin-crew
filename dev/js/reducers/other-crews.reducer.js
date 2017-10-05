function defaultState() {
    return {
        crewLibrary: {
            goblinCrew: {
                name: 'Grubs',
                value: 0,
                modifier: 0
            },
            humanVillage: {
                name: 'Rocks',
                value: 0,
                modifier: 0
            }
        }
    }
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "NEW_CREW":
        case "KILL_ALL_GOBLINS":
            return defaultState();

    }
    return state;
}
