function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('RENDER TEMPLATE');
                const hookEl = document.getElementById(hookId);
                if(hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person...');
    }
}

const pers = new Person();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Access decorator');
    console.log(target, name, descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target, name, position);
}

class Product {
    @Log
    title: string;
    _price: number;

    @Log2
    set price(price: number) {
        if(price <= 0) {
            throw new Error('Price should be greater than 0');
        }

        this._price = price;
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };

    return adjDescriptor;
}

class Printer {
    message = 'It Works';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button');
button?.addEventListener('click', p.showMessage);

// --

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    if(registeredValidators[target.constructor.name] && registeredValidators[target.constructor.name][propName]) {
        registeredValidators[target.constructor.name] = {
            ...registeredValidators[target.constructor.name],
            [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
        };
    } else {
        registeredValidators[target.constructor.name] = {
            ...registeredValidators[target.constructor.name],
            [propName]: ['required']
        };
    }
}

function PositiveNumber(target: any, propName: string) {
    if(registeredValidators[target.constructor.name] && registeredValidators[target.constructor.name][propName]) {
        registeredValidators[target.constructor.name] = {
            ...registeredValidators[target.constructor.name],
            [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
        };
    } else {
        registeredValidators[target.constructor.name] = {
            ...registeredValidators[target.constructor.name],
            [propName]: ['positive']
        };
    }
}

function validate(obj: any): boolean {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    
    if(!objValidatorConfig) {
        return true;
    }

    let isValid = true;

    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]; // !! Convert to boolean
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.querySelector('#title') as HTMLInputElement;
    const priceEl = document.querySelector('#price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        console.log('Invalid course');
        return;
    }

    console.log(createdCourse);
});