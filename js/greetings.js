const loginForm = document.querySelector(".login-form");
const loginSubmit = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting"); 

const USERNAME_KEY = "username"
const HIDDEN_VAL = "hidden"

function linkLink(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_VAL);
    const username = loginSubmit.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
};

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_VAL);
}

loginForm.addEventListener("submit", linkLink);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_VAL);
    loginForm.addEventListener("submit", linkLink);
} else {
    paintGreetings(savedUsername);
}
