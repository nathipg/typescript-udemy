function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('RENDER TEMPLATE');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
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