// === const and let

const userName = 'Apollo';
let userAge = 9;
userAge = 10;

if(userAge > 20) {
    let isOld = true;
    console.log(isOld); // Exist here
}

// console.log(isOld); // Doesn't exist here


// === Arrow function

const add = (a: number, b: number) => { 
    let result;
    result = a + b;
    return result;
};

const subs = (a: number, b: number) => a - b;

const printOutput: (output: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event => console.log(event));
}


// === Default function parameters

const addDefault = (a: number, b: number = 1) => a + b;

printOutput(addDefault(10));


// === Spread Operator

const hobbies = ['Sports', 'Cooking'];
const newHobbies = ['Fishing'];
const activeHobbies = ['Hiking', ...newHobbies];

activeHobbies.push(...hobbies);
console.log(...activeHobbies);

const person = {
    firstName: 'Apollo',
    age: 9
};

const copiedPerson = {...person};


// === Rest Parameters

const addRest = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
};

console.log(addRest(5, 10, 2, 3.7));
const numbersToSum = [1, 2, 3, 4];
console.log(addRest(...numbersToSum));

const addWithTuple = (...numbers: [number, number, number]) => numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);

console.log(addWithTuple(1, 2, 3));


// === Array & Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2, remainingHobbies);

const { firstName, age: newAgeName } = person;
console.log(firstName, newAgeName);