let inputText = document.querySelector("#text")
let root = document.querySelector("ul")

let defaultSelected = "all"; 

let all = document.querySelector("element")
let active = document.querySelector("element")
let completed = document.querySelector("element")
let clear = document.querySelector("element")




let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

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

    createUI(allTodos, root);
}
     localStorage.setItem('todos' , JSON.stringify(allTodos))
}



inputText.addEventListener("keyup", handleInput);  

function handleDelete(event){
    let id = event.target.dataset.id;

    localStorage.setItem('todos' , JSON.stringify(allTodos)) 
    allTodos.splice(id, 1)
    createUI(allTodos, root);
}

function handleToggle(event){
        let id = event.target.dataset.id ;

        localStorage.setItem('todos' , JSON.stringify(allTodos)) 

        allTodos[id].isDone = !allTodos[id].isDone;
}




function createUI(data, rootElm) {

    rootElm.innerHTML = "";


    data.forEach((todo, index) => {

    let li = document.createElement("li");
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;

    input.addEventListener("input", handleToggle)
    input.setAttribute('data-id', index);

    let p = document.createElement("p");
    p.innerText = todo.name;

    let span = document.createElement("span");
    span.innerText = "X";

    span.setAttribute("data-id", index)
    span.addEventListener('click', handleDelete)


    li.append(input, p, span);
    
    rootElm  .append(li)
    })

}

