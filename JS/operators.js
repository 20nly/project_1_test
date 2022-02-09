"use strict";

console.log("arr"+ "- object");
//concatenation or конкатенация или сцепление

console.log(4 + +"5");
// унарный плюс аналог int


let incr = 10,
    decr = 10;

incr++; //инкремент - увелечение на +1
decr--; //декримент-уменьшение на -1

console.log(incr); // 11
console.log(decr); // 9

// or

let incr = 10,
    decr = 10;

++incr;
--decr;

console.log(incr); // 11
console.log(decr); // 9

// BUT

let incr = 10,
    decr = 10;

console.log(incr++); // 10 - постфиксная форма
console.log(decr--); // 10 - постфиксная форма

console.log(++incr); // 11 - префиксная форма
console.log(--decr); // 9  - префиксная форма
// инкремент и декримент


console.log(5 % 2);

console.log(2*4 == "8");

console.log(2*4 === 8);// строгое сравнение


const isCheked = true,
    isClose = true;

console.log(isCheked && isClose); // аналог "or" и "and", || - or, && - and

console.log(isCheked && !isClose) // ! - оператор отрицанияЮ аналог not

