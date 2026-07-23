let form  = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let inp = document.querySelector("input");
    console.log(inp.innerText);
    console.log(inp.value);
})
//submit, change, input, focus, blur, reset