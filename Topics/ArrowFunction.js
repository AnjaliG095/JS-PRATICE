const person={
    name: "Anjali",
    greet :()=>{
        console.log(this.name);
    },
};
person.greet();


//Output will be Undefined
// An arrow function does not create its own this.
//For an arrow function, it doesn't look at the object (person).
//  It simply uses the this from the outer (global) scope.
