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
 