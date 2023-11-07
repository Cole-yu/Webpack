const age:number = 19;

interface Person{
    name: string,
    age: number,
}

function getPerson(person: Person){
    let std:Person = {
        name: null,
        age: null
    };
    std.name = person.name;
    std.age = person.age;
    return std
}

export {
    age,
    getPerson,
}