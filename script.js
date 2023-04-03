"use strict";

alert ('Hello!');

const input = confirm('Are you crazy?');
console.log(input);

const answer = +prompt('Vam est 18?', '18');
console.log(answer + 5);

const answers = [];

answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

console.log(typeof(answers));



const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Artemiy';

alert(`Привет, ${user}!`)

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(++incr, decr--)
console.log(incr, decr)

console.log(2 === 2);

    const isChecked = false,
        isClose = false;

    console.log(isChecked || !isClose);

console.log('yes')