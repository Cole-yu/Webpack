const age:number = 19;

interface Person{
    name: string | null, // 联合类型
    age: number | null
}

function getPerson(person: Person):Person{
    let std:Person = {
        name: null,
        age: null
    };
    std.name = person.name;
    std.age = person.age;
    return std
}

function Bar() {
    return 'Bar 函数组件';
}

export {
    age,
    getPerson,
    Bar
}