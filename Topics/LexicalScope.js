//An inner function can access variables from its outer function.
function Outer(){
    let outerVar = "Anjali";

function inner(){
     console.log(outerVar);
}
inner();
}
Outer();