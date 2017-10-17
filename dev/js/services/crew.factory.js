//TODO - Build a factory that will build out different types of crews.

//TODO - Possible functions:
/*
  BuildCrew(type, level),
  Random GoblinCrew Name
  Random HumanAdventuring Group name
  Random Human Village name
  Random Goblin Village name
  Random Goblin name
  Random Human Name s
  */

function goblinCrewName() {
    const adjectives = ['green', 'crooked', 'foul', 'icky', 'contemptuous', 'craggy', 'splintered', 'plump', 'slinky'];
    const nouns = ['stabbers', 'gobbos', 'stumps', 'rabbits', 'skulkers', 'elbows', 'tooths'];

    return toTitleCase(getRandom(adjectives) + ' ' + getRandom(nouns));
}

function humanVillageName() {
    const partOne = ['sunny', 'wooded', 'boar', 'deer', 'gold', 'high', 'helpless', 'hidden', 'bright'];
    const partTwo = [' valley', 'dale', ' dale', 'ton', ' village', ' acres', 'ford' ];

    return toTitleCase(getRandom(partOne) + getRandom(partTwo));
}

function toTitleCase(str) {
    return str.toLowerCase().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).trim();
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
