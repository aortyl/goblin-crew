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
                        description: 'Those gobbos are weak! Take their junk!',
                        id: 'AGR1',
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
                                message: "You're preparation is halfway done. Raiding in 15!",
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
                ],
                humanRaids: [
                    {
                        name: "Raid Human Village",
                        id: 'AHR1',
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
