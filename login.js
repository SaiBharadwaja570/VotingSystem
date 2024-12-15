let signupPage = document.getElementById("signupDiv");
let loginPage = document.getElementById("loginDiv");

let signup_btn = document.getElementById("signup_btn");
let login_btn = document.getElementById("login_btn");

let firstSignUp = document.getElementById("firstsignup");
let loginBtn = document.getElementById("login");

signup_btn.addEventListener("click", (e) => {
    signupPage.style.display = "block";
    loginPage.style.display = "none";
});

login_btn.addEventListener("click", (e) => {
    signupPage.style.display = "none";
    loginPage.style.display = "block";
});

firstSignUp.addEventListener("click", (e) => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(localStorage.getItem(email) === password){
        alert("User is already Registered");
        return;
    }
    localStorage.setItem(email, password);
    alert("New User registered");
});

loginBtn.addEventListener("click", (e) => {
    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;
    
    let storedPassword = localStorage.getItem(email);
    if(storedPassword && storedPassword === password) {
        alert("Login Successful");
        // You can redirect or display a different message here
    } else {
        alert("Invalid email or password");
    }
});
