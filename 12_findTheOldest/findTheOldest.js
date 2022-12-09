const findTheOldest = function(people) {

    return people.reduce((oldest, currentPerson) => {
        const oldestYears = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentYears = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestYears < currentYears ? currentPerson : oldest;
    })
};

const getAge = function(birthYear, deathYear) {
    if (!deathYear) {
        thisDay = new Date();
        thisYear = thisDay.getFullYear();
        deathYear = thisYear;
    }
    return deathYear - birthYear;
}

// const findTheOldest = function(people) {
//     let age = 0;
//     let barry = 1;
//     return age < barry ? people[0] : people[1];
// };

// Do not edit below this line
module.exports = findTheOldest;


