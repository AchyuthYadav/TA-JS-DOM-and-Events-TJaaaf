
let first = document.querySelector(".first")

let second = document.querySelector("second")

let ban = document.querySelector("banner")

let ban1 = document.querySelector("banner1")


first.addEventListener("click" , function ( element ) {
   let currentColor = element.style.background;
    if (currentColor == "red"){
        element.style.background= "green"
    } else {
        element.style.background= "red"
    }ppp
})

  