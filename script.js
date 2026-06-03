const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

// MOSTRAR / OCULTAR SENHA
toggle.addEventListener("click", () => {

    const type = password.getAttribute("type") === "password"
        ? "text"
        : "password";

    password.setAttribute("type", type);

    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");

});

// SUBMIT LOGIN
document.getElementById("loginForm").addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login realizado com sucesso!");

});