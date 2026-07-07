//Variables declared with var, let, or const inside a function can only be used within that function.
function myFunction(){
    let name = "Anjali"
    console.log(name);
}
myFunction();
//Error
console.log(name);
