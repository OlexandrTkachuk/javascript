// let name = 'Ivan';
// let admin = name;

// console.log('get admin value --> ', admin);
// console.log(`Hello ${name}`);

// const enterName = prompt('what is ur name');
// console.log(`my name is ${enterName}`);

// Number(undefined) повертає NaN
// Number(null) повертає 0
// Number(true/false) повернуть 1/0 відпвідно
// Number(string) пустий рядок поверне 0, а рядок який не має числового значення поверне Nan

//  Такі значення як "", null, undefined, NaN, 0 та false при булевому перетворені завжди повертають false

// const add = '1' + 2;
// console.log('Результати зміної add =', add);
// console.log('Тип зміної add =', typeof add);

// console.log("1 + 1 + 1 + '1' = ", 1 + 1 + 1 + '1');
// console.log('' - 1 + 0); // -1
// console.log('' + 1 + 0); // "10"
// console.log(6 / '3'); // 2
// console.log('2' * '3'); // 6
// console.log(4 + 5 + 'px'); //"9px"
// console.log('$' + 4 + 5); // "$45"
// console.log('4' - 2); // 2
// console.log('4px' - 2); // NaN
// console.log('  -9  ' + 5); // "  -9  5"
// console.log('  -9  ' - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(' \t \n' - 2); // -2
//
//
//
//
//
//
//
//
//
//
// Виключення з правил:
// console.log(null === undefined); // false
// console.log(null == undefined); // true - null конвертується в 0, а undefined конвертується в NaN

// Дивн випадки порівняння null з 0:
// console.log(null > 0); // (1) false
// console.log(null == 0); // (2) false
// console.log(null >= 0); // (3) true

// console.log('true', 5 > 4);
// console.log('false', 'ананас' > 'яблуко');
// console.log('true', '2' > '12');
// console.log('true', undefined == null);
// console.log('false', undefined === null);
// console.log('false', null == '\n0\n');
// console.log('false', null === +'\n0\n');
//
//
//
//
//
//
//
//
//
//
//
// Умовні розгалуження if

// let res = prompt('enter ur number!');
// if (res > 0) {
//   console.log(1);
// } else if (res < 0) {
//   console.log(-1);
// } else if (res == 0) {
//   console.log(0);
// }

// let result = a + b < 4 ? 'lower' : 'higher';

// let login = prompt('enter ur login', '');
// console.log(login);

// if (login === 'Admin') {
//     let password = prompt('enter ur password', '');

//     if (password === 'TheMaster') {
//         console.log('Welcome!');
//     } else if (null || '') {
//         console.log('Canceled');
//     } else {
//         console.log('Wrong password');
//     }
// } else if ('' || null) {
//     console.log('Canceled');
// } else {
//     console.log('i don`t know you');
// }

