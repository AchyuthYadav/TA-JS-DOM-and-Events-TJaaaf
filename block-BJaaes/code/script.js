let form = document.querySelector("form")
let errorMessage = {}

let userinfo = {};


function handleSubmit(event) {
    event.preventDefault();
     
    let elements = event.target.elements;

    const usernmae = elements.username.value; 
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordcheck = elements["password check"].value;


// Rules for form validation:

// 1. Username can't be less than 4 characters

if (username.length <= 4) {
    errorMessage.username = "username cant be less than 4 character"
    
}

// 2. Name can't be numbers



// 3. Email must contain the symbol `@`
// 4. Email must be at least 6 characters
// 5. Phone numbers can only be a number
// 6. Length of phone number can't be less than 7
// 8. Password and confirm password must be same.



    console.log(username, name, email, phone, password, passwordcheck)
}

form.addEventListener("submit", handleSubmit)