// function doubleIt(num){
//     return num*2;
// }


// const doubleIt = function myFun (num){
//     return num*2;
// }

const doubleIt = num => num*2;

const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const result1 = doMath(7,5)
console.log(result1)
