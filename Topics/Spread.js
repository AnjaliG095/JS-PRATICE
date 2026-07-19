function spread(...arr){
return Math.min(...arr);
}
console.log(spread(5, 12, 3, 8));
//Array Literals
function spread2(...arr) {
    let newArr = [...arr];   // Copy of arr
    console.log(newArr);     // [5, 12, 3, 8]
    return Math.min(...newArr);
}

console.log(spread2(5, 12, 3, 8));