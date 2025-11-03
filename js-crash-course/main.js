// ============================================================================
// ⚠️ THIS VERSION IS CLEANED & FIXED FOR RUNNING IN THE BROWSER
//     (from YouTube JS Crash Course — for learning purposes only)
// ============================================================================

// LOGGING OUTPUT
alert('Hello World'); // stops execution, used only for demo
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// VARIABLES - var, let, const
let age = 22; // can be reassigned
age = 23;

// DATA TYPES
const personName = 'ashwin';
const personAge = 26;
const rating = 3.5;
const isCool = true;
const xValue = null;
let yValue; // undefined

console.log(typeof yValue);

// STRINGS
console.log('My name is ' + personName + ' and I am ' + personAge);
console.log(`My name is ${personName} and I am ${personAge}`);

const s = 'Hello World';
let val;
val = s.length;
val = s.toUpperCase();
val = s.toLowerCase();
val = s.substring(0, 5);
val = s.split('');
console.log(val);

// ARRAYS
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruits);

console.log(fruits[1]);
fruits[4] = 'blueberries';
fruits.push('strawberries');
fruits.unshift('mangos');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

// OBJECT LITERALS
const person = {
  firstName: 'ashwin',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: 'prashant nilayam',
    city: 'chickballapur',
    state: 'karnataka'
  }
};

console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.city);
person.email = 'dvmadhu205@gmail.com';
console.log(person);

// ARRAY OF OBJECTS
const todos = [
  { id: 1, text: 'Take out trash', isComplete: false },
  { id: 2, text: 'Dinner with friend', isComplete: false },
  { id: 3, text: 'Meeting with boss', isComplete: true }
];

console.log(todos[1].text);
console.log(JSON.stringify(todos));

// LOOPS
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(`Todo ${i + 1}: ${todos[i].text}`);
}

for (let todo of todos) {
  console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS
todos.forEach((todo, i, myTodos) => {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

const todoTextArray = todos.map(todo => todo.text);
console.log(todoTextArray);

const todo1 = todos.filter(todo => todo.id === 1);
console.log(todo1);

// CONDITIONALS
const xNum = 30;

if (xNum === 10) {
  console.log('x is 10');
} else if (xNum > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}

let color = 'blue';

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
}

const zNum = color === 'red' ? 10 : 20;
console.log(zNum);

// FUNCTIONS
function greet(greeting = 'Hello', name = 'There') {
  return `${greeting} ${name}`;
}

console.log(greet('Hi'));

// OOP - Constructor Function
function PersonFn(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

PersonFn.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

PersonFn.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person1 = new PersonFn('ashwin', 'Doe', '1999-03-20');
const person2 = new PersonFn('madhuri', 'dv', '2003-05-10');
console.log(person1.getFullName());
console.log(person2.getBirthYear());

// BUILT-IN CONSTRUCTORS
const nameObj = new String('max');
console.log(typeof nameObj); // object
const numObj = new Number(5);
console.log(typeof numObj); // object

// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person('ashwin', 'Doe', '1999-03-20');
console.log(p1.getBirthYear());

// DOM MANIPULATION — these will only run if HTML elements exist
// Example HTML required for below:
/*
<form id="my-form">
  <input id="name" placeholder="Name">
  <input id="email" placeholder="Email">
  <button class="btn">Submit</button>
  <p class="msg"></p>
</form>
<ul id="users"></ul>
*/

const items = document.querySelectorAll('.item');
items.forEach(item => console.log(item));

const ul = document.querySelector('.items');
if (ul) {
  ul.firstElementChild.textContent = 'Hello';
  ul.children[1].innerText = 'Brad';
  ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
}

const btn = document.querySelector('.btn');
if (btn) {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    if (ul) ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
}

// FORM HANDLING SCRIPT
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

if (myForm) {
  myForm.addEventListener('submit', onSubmit);
}

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}
