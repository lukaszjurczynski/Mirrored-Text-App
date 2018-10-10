// get the width dimensions of window
let divDimensions = document.querySelector(".divDimensions");
let totalWidth = document.documentElement.clientWidth;
let width = divDimensions.clientWidth + 10;

//text selectors
let h1text = document.querySelector("h1");
let inputField = document.querySelector(".inputField");
  
inputField.addEventListener("keydown", function(keypress){
    
    if (keypress.which === 13) {
        h1text.textContent = inputField.value;
        h1text.setAttribute("data-text", inputField.value);
        inputField.value = "";
    }

})
 
if (totalWidth < width) {
    alert("Whoa! That's a lot of text here! Increase the window size!");
}