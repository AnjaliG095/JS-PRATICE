const student = {
    first: "Anjali",
    second: "B",
    third: "C"
};
// Changing name of object varible: third
// Adding new object and assigning a value : fourth  
const { first ,second, third: teen,fourth ="D" } = student;


console.log(teen); // C