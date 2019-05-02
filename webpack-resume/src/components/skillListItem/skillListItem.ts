interface Person {
    firstName: string;
    lastName: string;
}

class GirlFriend implements Person{
    firstName:string;
    lastName:string;
    fullName: string;
    constructor(firstName:string,lastName:string){
        this.fullName = firstName+" "+lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }   

    getFullName():string{
        return this.fullName;
    }

    hello(word: string): string {
        return "hello," + word;
    }
    
    greeter(person: Person): string {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
}

function haveGrilFriend():any{
    let newFriend=new GirlFriend("ye","lu");
    console.log(newFriend);    
    return newFriend.getFullName();
}

export default{
    // props:{
    //     skillName:{
    //         type:String,
    //         required:true
    //     }
    // },
    props:["skillName"],
    data(){
        return {
            skill:"Webpack"
        }
    }
}