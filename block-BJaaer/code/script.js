let form = document.querySelector("form");
let model = document.querySelector(".modelinfo");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    userData.name =(Event.target.elements.name.value);
    userData.email=(Event.target.elements.email.value);
    userData.choice=(Event.target.elements.choice.value);
    userData.color=(Event.target.elements.color.value);
    userData.range=(Event.target.elements.range.value);
    userData.drone=(Event.target.elements.drone.value);
    userData.terms=(Event.target.elements.terms.checked);

    console.log(userData)

   
    
});

// to insert  data we have to use variable

let userData = {}

function display(data, {}) {
    h1 = document.createElement("h1");
    h1.innerText = "hello ${data.name}";

    modelinfo.append(h1)

}

