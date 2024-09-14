const findTheOldest = function(people) {
    let oldest = 0;
    people.forEach((person) => {
        if ("yearOfDeath" in person == false) {
            person["yearOfDeath"] = 2024;
        }
        person["age"] = person.yearOfDeath-person.yearOfBirth;
        if (person.age > oldest) {
            oldest = person.age;
        }
    });
    let oldestPerson = (people.find(({ age }) => age === oldest));
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;