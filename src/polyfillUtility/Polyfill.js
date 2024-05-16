
const ar = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (callBack) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        ans.push(callBack(this[i]));
    }
    return ans;
}

Array.prototype.filter = function (callBack) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i])) {
            ans.push(this[i]);
        }
    }
    return ans;
}

Array.prototype.myReduce = function (callBack, init) {
    let ans = init;
    for (let i = 0; i < this.length; i++) {
        ans = ans ? callBack(ans, this[i]) : this[i];
    }
    return ans;
}

const total = ar.myReduce((acc, cur) => {
    return acc + cur
}, 0);

const person1 = {
    firstName: 'Avinash',
    lastName: 'Anand',
}

const person2 = {
    firstName: 'Avinash',
    lastName: 'Anand',
}

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let newObj = Array.isArray(obj) ? [] : {}
    for (let i in obj) {
        newObj[i] = obj[i]
    }
    return newObj;
}

// const newPerson = deepCopy(person1);

// console.log(person2 === person1)

function infiniteSum(a) {
    return function (b) {
        if (b) {
            return infiniteSum(a + b)
        }
        return a;
    }
}

function once(callBack) {
    let executed = false;
    let result
    return function (...args) {
        if (!executed) {
            result = callBack.call(this, ...args)
            executed = false;
        }
        return result
    }
}

function myMemorize(callBack) {
    let res = {}
    return function (...args) {
        let newArgs = JSON.stringify(args);
        if (!res[newArgs]) {
            res[newArgs] = callBack.call(this, ...args)
        }
        return res[newArgs]
    }
}

function curry(fn) {
    return function curriedFunction(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return function (...next) {
                return curriedFunction(...args, ...next)
            }
        }
    }
}

// function sum(a,b,c,d){
//     console.log(a+b+c+d)
// }

// const newFn = curry(sum);
// newFn(1,2,3,4);
// newFn(1,2)(3)(4);

Array.prototype.myFlat = function (depth) {
    let ans = [];
    if (typeof this !== 'object' || !Array.isArray(this)) {
        return this;
    }
    this.forEach((ele) => {
        if (Array.isArray(ele) && depth > 0) {
            ans.push(...ele.myFlat(depth - 1));
        } else {
            ans.push(ele)
        }
    })
    return ans;
}


function debounce(callBack, delay) {
    let timeout;
    return function (...args) {
        let context = this
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            callBack.call(context, ...args)
        }, delay)

    }
}

function throttle(callBack,delay){
    let lastCall = 0;
    return function(...args){
        let context = this;
        const now = Date.now();
        if(lastCall-now<delay)return;
        lastCall=now;
        callBack.call(context,...args)
    }
}

// const ar1 = [[1,2,3],[1,[2,3]],1,3]
// const ans = ar1.myFlat(1)
// console.log(ans)


// const sum = (a,b) => console.log(a+b)

// const newOnce = once(sum);
// newOnce(2,3)
// newOnce(2,3)
// newOnce(2,3)
// newOnce(2,3)