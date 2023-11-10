const add = (...arg) => {
    return arg.reduce((accumulator, currentValue, index, arr) => accumulator + currentValue, 10000);
};

const res = {
    person: {
        // name: '小明',
        eat(){
            console.log('eat')
        }
    }
}

const getName = function(){
    return new Promise((resolve, reject) => {
        if(res?.person?.name){
            res?.person?.eat?.();
            setTimeout(() => {
                console.log('定时器执行完了~');
                resolve(res?.person?.name);
            }, 1000);
        }else{
            console.log('对象不包含 name 属性');
            reject(new Error('出错了'));    // 方法一 https://blog.csdn.net/fesfsefgs/article/details/107438395
            // return new Promise(() => {}) // 方法二：中断promise链
        }
    }).catch(err => { // await只接收resolve的值不接收reject,需要捕获reject，给出新结果
        console.log('promise.prototype.catch', err);
        return '无名';
    });
}

export {
    add,
    getName
}