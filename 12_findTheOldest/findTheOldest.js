const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        return (findAge(oldest) > findAge(currentPerson))? oldest:currentPerson;
    }) 
};

const findAge = function(person){
    if(!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
