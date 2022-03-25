
let first = document.querySelector(".first")

let second = document.querySelector(".second")





function random(ele) {
    var a = (Math.random() * 256);
    var b = (Math.random() * 256);
    var c = (Math.random() * 256); 
    
    var randomColor = "rgb("+a+" , "+b+"  , "+c+")";
    ele.style.backgroundColor = randomColor;
}


first.addEventListener("click", function(){
    return random(first);
});
  

second.addEventListener("mousemove", function(){
    return random(second);
});

    
   
