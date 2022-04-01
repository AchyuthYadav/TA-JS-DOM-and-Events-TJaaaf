let form = document.querySelector("form");
let model = document.querySelector(".modal__overlay");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    userData.name =(Event.target.elements.name.value);
    userData.email=(Event.target.elements.email.value);
    userData.choice=(Event.target.elements.choice.value);
    userData.color=(Event.target.elements.color.value);
    userData.movie=(Event.target.elements.movie.value);
    userData.book=(Event.target.elements.book.value);
    userData.terms=(Event.target.elements.terms.value);

    console.log(userData)

    modal.classlist.add("open");

    let close = document.querySelector(".modal__overlay")
    close.addEventListener("click" , () => {
        modal.classlist.remove("open")
    })
    
});

// to insert  data we have to use variable

let userData = {}
