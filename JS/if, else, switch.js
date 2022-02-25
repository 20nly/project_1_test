"use scrict";

if (4 == 9 ) {
    console.log('Ok!');
} else {
    console.log('Error');
}

/* const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('OK!');
}

(num === 50) ? console.log('OK!') : console.log('Error!'); */

const num = '50';

switch (num) {
    case '49':
        console.log('Incorrect!');
        break;
    case '10':
        console.log('Incorrect!');
        break;
    case '50':
        console.log('Correct!');
        break;
    default:
        console.log('sry, unfind!');
        break;
}