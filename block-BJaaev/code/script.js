let inputText = document.querySelector("#text")
let root = document.querySelector("ul")


let allTodos = [];

function handleInput (event) {
    console.log(event.keyCode)

    let value = event.target.value;

    if (event.keyCode === 13 && value !== ""){
    let todo = {
        name: value,
        isDone: false,
    };
    allTodos.push(todo); 

    event.target.value = "";

    createUI();
}
}

inputText.addEventListener("keyup", handleInput);  




function createUI() {

    root.innerHTML = "";


    allTodos.forEach((todo) => {

    let li = document.createElement("li");
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;

    let p = document.createElement("p");
    p.innerText = todo.name;

    let span = document.createElement("span");
    span.innerText = "X";

    li.append(input, p, span);
   
    root.append(li)
    })

}

