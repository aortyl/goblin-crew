function defaultState() {
    return {
        activeEvents: [
            {
                name: 'Dummy Event'
            }
        ],
        pastEvents: [],
        eventLibrary: {
            random: {
                other: [],
                bane: [],
                boon: []
            },
            action: {
                goblinRaids: [
                    {
                        name: "Raid Rival Crew",
                        id: 'AGR1',
                        duration: 30,
                        activeEffects: {
                            gain: {

                            },
                            cost: {

                            }
                        },
                        postEffect: {
                            gain: {

                            },
                            cost: {

                            },
                            events: []
                        }
                    }
                ],
                humanRaids: [
                    {
                        name: "Raid Human Village",
                        id: 'AHR1',
                        duration: 30,
                        activeEffects: {
                            gain: {

                            },
                            cost: {

                            }
                        },
                        postEffect: {
                            gain: {

                            },
                            cost: {

                            },
                            events: []
                        }
                    }
                ]
            }
        }
    }
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BLARP":
            break;

    }
    return state;
}
