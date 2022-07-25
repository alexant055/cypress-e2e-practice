class Animal {
  constructor(age, legs) {
    this.age = age;
    this.legs = legs;
  }
}

class Dog extends Animal {
  constructor(name, age, legs) {
    super(age, legs);
    this.name = name;
  }

  getInfo() {
    return `${this.name} age is ${this.age}`;
  }
}

const chezhian = new Dog('Chezhian', 3, 4);

console.log(chezhian.getInfo());
