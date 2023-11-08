// import { defineComponent } from 'vue';

const age:number = 19;

interface Person{
    name: string | null, // 联合类型
    age: number | null
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