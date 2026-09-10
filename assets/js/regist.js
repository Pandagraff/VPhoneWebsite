const registerForm = document.getElementById("registForm");
const errormessages = document.getElementById("errors")

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const pass1 = document.getElementById("passwordRegist").value;
    const pass2 = document.getElementById("passwordConfirm").value;
    let valids = true;
    let validationPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let genders = ['male', 'female']

    if(username === ""){
        valids = false;
    }

    if(email === "" || !validationPattern.test(email))
    {
        valids = false;
    }

    if(!genders.includes(gender)){
        valids = false;
    }

    if(pass1 !== pass2){
        valids = false;
    }

    if(valids === false){
        errormessages.innerHTML = "<br><br>One or more values is incorrect.";
        errormessages.style.display = "inline";
    }
    else{
        alert("Your registration has been finished!");
        window.location.href = "login.html"

    }
})