function defaultState() {
    return {
      grab: {
        GRAB_GRUB: {
            name: 'Grab Grub',
            type: 'GRAB_GRUB',
            category: 'grab',
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
            category: 'grab',
            show: false,
            requires: {
                stats: {
                    grubs: 15
                },
                buildings: {
                    grubGrabber: 1
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
        GRAB_STICK: {
            name: 'Grab Stick',
            type: 'GRAB_STICK',
            category: 'grab',
            show: false,
            requires: {
                stats: {
                    grubs: 10
                },
                buildings: {
                    grubGrabber: 4
                }
            },
            payload: {
                gain: {
                    stats: {
                        sticks: 1
                    }
                },
                cost: {
                    stats: {
                        grubs: 10
                    }
                }
            }
        },
      },
      make: {
        SHARPEN_ROCK: {
            name: 'Sharpen Rock',
            type: 'SHARPEN_ROCK',
            category: 'make',
            show: false,
            requires: {
                stats: {
                    rocks: 10
                }
            },
            payload: {
                gain: {
                    stats: {
                        sharpRocks: 1
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
        STABBY_STICK: {
            name: 'Make Stabby Stick',
            type: 'STABBY_STICK',
            category: 'make',
            show: false,
            requires: {
                stats: {
                    sticks: 10,
                    sharpRocks: 2
                }
            },
            payload: {
                gain: {
                    stats: {
                        stabbySticks: 1
                    }
                },
                cost: {
                    stats: {
                        grubs: 10,
                        sticks: 5,
                        sharpRocks: 2
                    }
                }
            }
        },
      },
      build: {
        BUILD_GRUB_GRABBER: {
            name: 'Build Grub Grabber',
            type: 'BUILD_GRUB_GRABBER',
            category: 'build',
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
      },
      trigger: {

      }
    }
}

const setStateTrue = (state, type) => {
    let newState = Object.assign({}, state)

    //TODO - consider using a for() loop to allow for breaking out.
    //TODO - Optionally - we can consider including the category in the action payload, which would render this loop pointless.
    Object.keys(newState).forEach((category) => {
      if(newState[category][type]) {
        newState[category][type].show = true;
      }
    })

    return newState;
};

export default function (state = defaultState(), action) {
    switch (action.type) {
        case "BUILD_GRUB_GRABBER":
        case "GRAB_ROCK":
        case "SHARPEN_ROCK":
            return setStateTrue(state, action.type)
        case "KILL_ALL_GOBLINS":
            return defaultState();
    }
    return state;
}
