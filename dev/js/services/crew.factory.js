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

function GoblinCrewName(){
    const adjectives = ['green', 'crooked', 'foul', 'icky', 'contemptuous', 'craggy', 'splintered', 'plump', 'slinky'];
    const nouns = ['stabbers', 'gobbos', 'stumps', 'rabbits', 'skulkers', 'elbows', 'tooths'];

    let name = getRandom(adjectives) + ' ' + getRandom(nouns);
    return toTitleCase(name.toLowerCase());
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
