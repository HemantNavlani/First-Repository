
//Function Hoisting 
let sum = addNum(10,20);
console.log(sum);
function addNum(a,b){
    return a+b;
}