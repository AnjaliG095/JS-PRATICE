let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    
      console.log("Code=",event.key);
      if(event.code="ArrowUp") {
        console.log("Character moves up")
      } 
      else if(event.code="ArrowDown"){
        console.log("Character moves backward")
      }  else if(event.code="ArrowLeft") {
        console.log("Character moves Left")
      } else if(event.code="ArrowRight") {
        console.log("Character moves Right")
      }

    
});
// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(){
//     console.log("Key was Released");
// })