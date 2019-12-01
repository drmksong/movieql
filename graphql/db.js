export let people = [
    {
        id:1,
        name: "Myung Kyu",
        age:51,
        gender:"male"
    },
    {
        id:2,
        name: "Daeun",
        age:13,
        gender:"female"
    },
    {
        id:3,
        name: "Dahye",
        age:13,
        gender:"female"
    },
];

export const getById = id => {
    const fpp = people.filter(person => person.id === id);
    console.log( "id is "+id);
    console.log( fpp[0]);
    return fpp[0];
}

export const deletePerson = (id) => {
    const cleanedPersons = people.filter(person => id!==person.id)
    if (cleanedPersons.length < people.length) {
        people = cleanedPersons;
        console.log(people, " true");
        return true;
    }
    else {
        console.log("false");
        return false;}
}

export const addPerson = (name,age,gender) => {
    const newPerson = {
        id:people.length +1,
        name,
        age,
        gender
    }
    
    people.push(newPerson);
    console.log(people.length+1);
    return newPerson;
}