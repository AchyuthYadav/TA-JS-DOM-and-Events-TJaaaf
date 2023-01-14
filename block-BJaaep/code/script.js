

let firstBoxes = document.querySelectorAll(".first li")

// without  Event Deligation

firstBoxes.forEach((ele, index) => {
   ele.addEventListener("click" , (event) => {
       event.target.innerText = index + 1;

       setTimeout(() => {
           event.target.innerText = "";
       }, 5000);
   })
});


// with Event Deligation

 let secondBoxes = document.querySelector(".second");

    secondBoxes.addEventListener("click" , (event) => {
        let text = event.target.dataset.text
        event.target.innerText= text;

        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
    })
   
    