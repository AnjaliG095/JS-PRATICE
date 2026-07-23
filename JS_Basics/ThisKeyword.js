const person = {
  name: "John",
  age: 25,

  greet() {
    console.log(`Hello, my name is ${this.name}`);
    //taking name in person class
  },
};

person.greet();