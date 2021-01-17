interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person('Pissuti', 23);

user1.greet('Hi, I am');