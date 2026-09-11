const loginForm = document.getElementById("loginForm");
const googleLogin = document.getElementById("googleLogin");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "home.html";
});
googleLogin.addEventListener("click", (e) => {
    window.location.href = "home.html";
});