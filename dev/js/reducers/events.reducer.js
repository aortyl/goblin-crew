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
                goblinRaids: {
                    AGR1: {
                        name: "Raid Rival Crew",
                        description: 'Those gobbos are weak! Take their junk!',
                        type: 'action',
                        duration: 30,
                        activeEffects: {
                            gain: {

                            },
                            cost: {

                            }
                        },
                        popups: {
                            '30': {
                                message: "You've decided to raid a rival crew. Ready the stabby sticks!",
                                options: [
                                    {
                                        text: "Sharpening 'em!",
                                        response: "ok"
                                    }
                                ],
                                effects: {
                                    ok: {
                                        gain: {

                                        },
                                        cost: {
                                            stats: {
                                                grubs: 10
                                            }
                                        }
                                    }
                                }
                            },
                            '15': {
                                message: "Prep is halfway done. Raiding in 15!",
                                options: [
                                    {
                                        text: "Steel your resolve.",
                                        response: "ok"
                                    }
                                ]
                            },
                            '0': {
                                message: "Welp! It's time. You sure you're ready for this, chief?",
                                options: [
                                    {
                                        text: "Start the stabbing!",
                                        response: "attack"
                                    },
                                    {
                                        text: "Nope! Turns out we yellow, not green.",
                                        response: "chicken"
                                    }
                                ]
                            }
                        }
                    }
                },
                humanRaids: {
                    AHR1: {
                        name: "Raid Human Village",
                        type: 'action',
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
                }
            }
        }
    }
}

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "KILL_ALL_GOBLINS":
            return defaultState();

    }
    return state;
}
