import Vue from 'vue';
import Vuex from 'vuex';
import { Promise, resolve, reject } from 'q';

Vue.use(Vuex);

const state = {
    note : "从websocket服务的nginx配置说起",
    name : "旺财",
    age : 3,
    hadEatBone : false,
    hadEatCookie : false,
    sleepTime : 0
};

const getters = {
    getNote(state){
        return state.note;
    },
    getName(state){
        return state.name;
    },    
    getAge(state){
        return state.age;
    }    
};

const mutations = {
    setName(state , value){
        state.name = value;
    },
    setAge(state , age){
        state.age = age;
    },
    eatBone(state){
        state.hadEatBone=true;
        console.log("dog eat bone");
    },
    eatCookie(state){
        console.log("eatCookie start to execute");
        state.hadEatCookie=true;
        console.log("dog start to eat cookie");
    },
    toSleep(state,obj){
        console.log("toSleep start execute");
        state.sleepTime = obj.time;
        console.log("dog start to sleep ,always sleep " + state.sleepTime + " 毫秒");
        return state.sleepTime;
    },
    bark(){
        console.log("bark start execute");
        console.log("dog bark");
    },
    drinkWater(){
        console.log("drinkWater start execute");
        console.log("dog drinkWater");
    }
};

const actions = {
    // context 对象不是 store 实例本身 ，Vuex 官方文档的 Modules 中有解释
    eatDinner(context) {        
        context.commit('eatBone');
    },
    eatLunch({ state,dispatch,commit} , processObj){     //  参数结构 context = { commit , dispatch , getters }   store.commit = commit  ES6 中的解构赋值
        // 简单版 action
        // commit("eatCookie");
        
        // 复杂版的 action
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("eatLunch start to execute");
                console.log("dog start to eatLunch");
                commit("eatCookie");
                resolve("dog had already eatLunch over , cost time :" + processObj.time + " 毫秒");
            },1000);
            // , reject("error")  // todo 取消注释后会不执行then语句。原因:这是.then(function(value){ //success} , function(error){ //failure })方法中的格式,不是new Promise()记混了
        })
        .then( val => {
            console.log("eatLunch ok");
            return val
        });
    },
    sleep(context){
        console.log("sleep start execute ");
        context.commit("toSleep",{
            time:3000
        });
    },
    run({commit,dispatch}){
        console.log("run start to execute");
        dispatch("eatLunch",{
            time:1000
        })
        .then( val => console.log(val) )
        .then( () => dispatch("sleep") )

        return "run start execute!"     // 先返回了结果，再执行前面的dispatch , todo 待修复
    },
    async bark({commit}){
        console.log("bark start to execute");
        return new Promise((resolve,reject)=>{
            var random=Math.random();
            if(random<0.5){
                setTimeout(()=>{
                    console.log("随机数为 "+random);
                    console.log("dog 汪汪汪")
                    resolve("dog had bark 汪汪汪 over")
                },3000)
            }
            else{
                reject("随机数 "+ random + "大于0.5");
            }
        })
        .catch(err => {
            console.log(err)
            return err;
        })      // 不捕获报错，将提示错误信息 Error in v-on handler (Promise/async): 
    },
    async drinkWater({dispatch,commit}){
        console.log("drinkWater start to execute");
        
        // await dispatch("bark");
        const myBarkPromise = dispatch("bark");         // 必须等到 dispathc("bark") 结束才会继续往下执行
        
        console.log("dog start drink water");
        
        // await dispatch("run");
        const myRunPromise = dispatch("run");

        await Promise.all([myBarkPromise,myRunPromise])
                .then( val => console.log(val) )      // Promise.all 返回的val为所有Promise实例的 resolve 或者 reject 的值
                .catch( err => console.log(err) )     // 应该为所有 Promise 实例编写 catch 语句来捕获错误

        return await Promise.resolve("dog 先吠叫，再喝水 , 这一句应该在最后执行输出才对") // todo 怎样才能让 dispatch("run") 都执行完成，再返回结果？？？？？？？？？                    
    }
}

const moduleA = {
    state,
    getters,
    mutations,
    actions
}

const moduleB={
    state:{
        name : "yeLu",
        note : "部署单元测试环境需要做的思考"
    },
    mutations:{
        setName(state,person){      // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
            console.log("setName start execute");
            console.log(state.name);
            state.name = person.name;
            console.log(state.name);
        }
    },
    actions:{
        changeGirlFriend({state,dispatch,commit,rootState}){  // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState 【 注意：有大括号{} 】
            console.log("changeGirlFriend start execute");
            commit("setName",{
                name:"wangmiao"
            });
        }
    },
    getters:{
        getNotes(state){
            return state.note
        },
        getNames(state){             // 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
            return state.name;
        }
    }
}

const store = new Vuex.Store({      // 注意 小括号“()” 中需要添加 大括号“{}”  --掉坑点，因为Store中的参数是一个对象
    // 划分模块 module
    modules:{
        a : moduleA,
        b : moduleB
    },
    // state,
    // getters,
    // mutations,
    // actions    
});

// const store = new Vuex.Store({
//     state:{
//         note: "我的天啊 ",
//         name: "旺财",
//         age : 3,
//         hadEatBone:false,
//         sleepTime:0
//     },
//     getters:{
//         getNote(state){
//             return state.note;
//         },
//     }
// });
 
export default store;