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
console.log(calculator.sum());
console.log(calculator.mul());


// task 6
// Існує обєкт ladder