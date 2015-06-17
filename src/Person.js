import Mammal from './Mammal';

class Person extends Mammal {
  constructor(name, age) {
    super(2);
    this.name = name;
    this.age = age;
  }
  speak() {
    return `Hi my name is ${this.name} and I'm ${this.age} years old`;
  }
};

export default Person;
