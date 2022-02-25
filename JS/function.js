"use scrict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('hello world!!!');
console.log(num);


function calc(a, b) {
    return (a +b);
}

console.log(calc(4, 6));
console.log(calc(3, 3));
console.log(calc(4, 10));


function ret() {
    let num = 11;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};
logger();


const calc1 = (a, b) => a + b;
console.log(calc1(1,7));



const calc2 = (a, b) => {
    console.log('Hi Im стрелочная функция');
    return (a + b);
};
console.log(calc2(9, 3));

