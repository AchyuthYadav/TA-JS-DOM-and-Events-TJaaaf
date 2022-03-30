   let result = document.querySelector(".result");
   let allButton = document.querySelectorAll("button")

   let initialValue = 0;
   result.innerText = initialValue;

   allButton.forEach(ele => {
       ele.addEventListener("click" , buttonClick)
   });

   function buttonClick(event) {
       if (event.target.classList.contains("equal")){
        result.innerText = eval(result.innerText)
        return;
       }

       if (event.target.classList.contains("clear")){
        result.innerText = initialValue ;
        return;
       }
       
       if (result.innerText == initialValue) {
           result.innerText = event.target.innerText;
       } else {
        result.innerText += (event.target.innerText) 
       } 
   }