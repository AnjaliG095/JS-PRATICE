//Variables declared outside any function or block are globally accessible
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal();
console.log(globalVar);