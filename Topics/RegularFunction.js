const person = {
  name: "Alice",

  greet: function () {
    console.log(this.name);
  },
};

person.greet();