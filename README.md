# typescript-udemy

## Compiler

tsc app.ts -> Compile file

tsc app.ts --watch -> Compile file every time it changes

tsc --init -> Indicate that everything in the folder should be compiled

tsc -> Compile all files (After run init)

tsc --watch -> Compile all files every time it changes (After run init)

## Core Types

number -> 1, 5.3, -10 (All numbers)

string -> 'Hi', "Hi", \`Hi` (All text values)

boolean -> true, false

object -> {age: 23} (Any JavaScript object, more specific types are possible)

Array -> [1, 2, 3] (Any Javascript array, type can be flexible or strict)

Tuple -> [1, 2] (Added by Typescript: Fixed-length array)

Enum -> enum { NEW, OLD } (Added by typescript: Automatically enumerated global constant identifiers)

Any -> * (Any kind of value, no specific type assignment. Avoid)

unknown -> Allow assign any value to a variable of this type, but is not allow to assign unknown to a variable with defined type without make sure it's the right type

## Function return types

All regular types

void -> Return nothing (undefined)

never -> Never return anything (Not even undefined)

## Union Types

Combine types using | (pipe). Example -> value: number | string

## Literal Types

This type is a exact value. Example -> const value = 2.8; // Type is 2.8

## Type aliases / Custom types

Type aliases can be used to "create" your own types. 

You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

Example 1 -> type Combinable = number | string;
Example 2 -> type User = { name: string; age: number };

## Classes

Blueprints used to create objects easier

### Constructor

Method used to instantiate a class

Example: 
```typescript
class Department {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

#### Shorthand

it's not necessary to pre create properties which will be received as a parameter in constructor

Example: 
```typescript
class Department {
    constructor(public name: string) {
    }
}
```

#### Private Constructor

Constructor can be set to private, so it can't be called outside class

### Properties

Class variables

#### Public

Can be access without limitation

#### Private

Can be access only inside class (Classes who inherit this class, cannot access)

#### Protected

Can be access only inside class and by classes who inherit it

#### Readonly

Can be set only in initialization

### Getters

Method used to access private properties

### Setters

Method used to set private properties

### Inheritance

When a class inherits properties and methods from another class, being able to add new ones or overwrite existing ones

Uses "extends" key word, it is only possible to inherit from one class but a interface can inherit from multiple interfaces

### Abstract Classes

Class which can not be initiated, used as a base which will be inherit by other class

### Override

When the class overrides methods or properties of the parent class, defining new ones with the same name

### Singleton

Class which can only be instanciated once, needs a private constructor

Example:
```typescript
class Department {
    private static instance: Department;

    private constructor(name: string) {
    }

    static getInstance() {
        if(this.instance) {
        return this.instance;
        }

        this.instance = new Department('Name here');

        return this.instance;
    }
}

const department = Department.getInstance();
```

### Interface

Describe the structure of an object. A class can implement multiple interfaces.

Example:
```typescript
    interface Greetable {
        name: string;

        greet(phrase: string): void;
    }

    class Person implements Greetable {
        constructor(public name: string, public age: number) {
        }

        greet(phrase: string) {
            console.log(`${phrase} ${this.name}`);
        }
    }
```