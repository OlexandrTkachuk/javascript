// task 1
const user = {};

user.name = 'Ivan';
user.surname = 'Smith';
user.name = 'Petro';
delete user.name;

// task 2
// Напиши функцію, яка перевіряє чи ключ знаходиться в обєкті
let schedule = {
  name: 'alex',
  age: 15,
};

function isEmpty(obj, key) {
  if (key in obj) {
    return true;
  }
  return false;
}

console.log(isEmpty(schedule, 'name'));

//task 3
// Напиши функція яка приймає обєкт та підсумовує уі його значення
const salaries = {
  jhon: 100,
  ann: 160,
  pete: 130,
};

let totalSalary = 0;

function sum(object) {
  for (key in object) {
    const value = object[key];

    totalSalary += value;
  }

  return totalSalary;
}

console.log('сума усіх зарплат', sum(salaries));

//task 4
// Створіть функцію multiplyNumberic(obj), яка перемножує усі числові значення на 2

const menu = {
  width: 200,
  height: 300,
  title: 'my menu',
};

function multiplyNumberic(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log('меню до виклику функції', menu);
multiplyNumberic(menu);
console.log('меню після виклику функції', menu);

// object methods

// task 5
// Створи обєкт, який має три методи: read() приймає два параметри - числа і записує їх у обєкт. sum() додає задані значення mul() перемножує задані значення
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(5, 10);
console.log('caclulator.sum() =', calculator.sum());
console.log('calculator.mul() =', calculator.mul());

// task 6
// Існує обєкт ladder який має значення Step та методи які піднімають шаг або опускають його на 1. Потрібно зробити ланцюжок викликів послідовно
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log('chaining step =>', this.step);
    return this;
  },
};
// Рішення полянає у повернені самого обєкта з кожного виклику функціяотже кожний наступний викликаний метод буде мати перед собою обєкт а отже необхіжний для this контекст "return this" вирішує проблему виклику методів ланцюгом

ladder.up().up().down().up().down().up().showStep();

//task 7
// Створити калькулятор за допомогою конструктора
// - створити функцію, яка буде створювати обєкт-конструктор
// - створити зміну-екземпляр який буде брати дані з нашого конструктора new Cacl()
// - викликати методи на екземплярі
function Calc() {
  this.read = function (a, b) {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calc = new Calc();

calc.read(5, 10);
console.log('calculator constructor sum --> ', calc.sum());
console.log('calculator constructor mul --> ', calc.mul());

// task 8
// Створити Accumulator(startingValue) - функцію-конструктор
// Створенний обєкт повинен - зберігати значення у властивості value. Початкова значення має значення аргументу startingValue. - метод read() - повинен використовувати prompt для зчитування нового числа та додавати його до value
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function (number) {
    this.value += number;
  };
}

const acc = new Accumulator(18);
acc.read(3);
console.log('Accumulator constructor result-->', acc.value);
acc.read(4);
console.log('Accumulator constructor result-->', acc.value);

// task 9
// Урізання тексту. Створіть функцію truncate(str, maxlength), яка перевіряє довжину srt і , якщо вона перевищує maxlength - замінює кінець str символом трьох крапок, щоб його довжина була рівною ...

function truncate(str, maxlength) {
  strLength = str.length;

  if (strLength > maxlength) {
    let sliceStr = str.slice(0, maxlength - 3);
    let newStr = `${sliceStr}...`;

    return newStr;
  }

  return str;
}

console.log(
  truncate(
    'всім привіт я ваш новий колега - розробник по джава програмуванню',
    20
  )
);

console.log(truncate('hello one', 20));

//task 10
// Операції з масивами
const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');
styles[1] = 'Classics';
styles.shift();
styles.unshift('Rap', 'Reggae');
console.log(styles);

//task 11
// Сума введених чисел
function sumInput(...args) {
  let sum = 0;
  let numbers = [];
  numbers.push(...args);

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumInput(5, 11, 13, -1, 56, 43, 12));

// task 11
// Напишіть функцію camelize(str), яка перетворює такі рядки "кккк-кккк-ккк" в camelCase

function camelize(str) {
  return str
    .split('-')
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join('');
}

console.log(camelize('back-ground-color'));
console.log(camelize('font-size-color-paper-bow'));

// task 12
// Фільтрація за діапазоном
// Напишіть функцію filterRange(arr, a, b) , яка приймає масив arr, шукає в ньому елементи більші - рівні А та менші-рівні В і віддає масив цих елементів. Ф-ція повинна повертати новий масив і не змінювати старий
function filterRange(arr, a, b) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    if (number >= a && number <= b) {
      newArray.push(number);
    }
  }

  return newArray;
}

console.log(filterRange([5, 3, 8, 1, 7, 2, 4], 1, 5));

//tassk 13
// Сортування за спаданням
function copySorted(arr) {
  const newArray = [...arr].sort((a, b) => b - a);

  return newArray;
}

console.log('Сортування за спаданням -->', copySorted([1, 5, 7, 8, 2, 7, 13]));
console.log('Сортування за спаданням -->', copySorted([4, 6, 7, 8, 2, 7]));
console.log(
  'Сортування за спаданням -->',
  copySorted([7, 2, 7, 8, 2, 3, 7, 81])
);
console.log(
  'Сортування за спаданням -->',
  copySorted([13, 7, 9, -34, 8, 9, 4, 5])
);

// task 14
// Створити розширений калькулятор
function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = +split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// task 15
// Відсортувати користувачів за віком
const users = [
  { name: 'Ivan', age: 25 },
  { name: 'Petr', age: 30 },
  { name: 'Masha', age: 28 },
];

function sortByAge(array) {
  return [...array].map(item => item.age).sort((a, b) => a - b);
}

console.log('Сортування за віком', sortByAge(users));

// task 16
// Порахуйте середній вік
function getAverageAge(array) {
  const avgAge = array.reduce((acc, user) => acc + user.age, 0) / array.length;

  return Math.round(avgAge);
}

console.log('Порахуйте середній вік', getAverageAge(users));

// task 17
// Перемішати масив з однаковою ймовірністю комбінацій
// дивись мето "тестування Фішера-Ейтса"
let someArray = [1, 2, 3, 5, 6];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log('Перемішування елементів масиву', shuffle(someArray));

// task 18
//Підсумуйте властивості
const salariesObj = {
  ivan: 100,
  alex: 300,
  rozalli: 250,
};
// 1) створюємо функцію, яка приймає обєкт
// 2) використаємо Object.values, яке поверне нам масив значень
// 3) до масиву приміняємо reduce() і отримаємо суму всіх значень масиву
function totalSalaryObj(obj) {
  return Object.values(obj).reduce((acc, a) => acc + a, 0);
}

console.log(totalSalaryObj(salariesObj));

// task 19
// Порахуйте властивості

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(salariesObj));

// task 20
// Деструктуроване присвоєння
let userData = {
  name: 'alex',
  years: 26,
};

let { name, years, isAdmin = false } = userData;

// task 21
// Максимальна зарплата
// Створіть функції topSalary(userSalaries), яка повертає імя найбілш оплачуваної особи
let userSalaries = {
  alex: 100,
  denis: 300,
  ann: 250,
};

function topSalary({ alex, denis, ann } = {}) {
  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(userSalaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(userSalaries));
