function greet(name) {
    return `Hello ${name}`;
}

function processUser(fn, name) {
    console.log(fn(name));
}

processUser(greet, "David");