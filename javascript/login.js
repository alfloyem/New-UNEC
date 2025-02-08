document.querySelector('.show-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('LoginForm_password');
    const icon = this;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.textContent = "visibility_off";
    } else {
        passwordInput.type = "password";
        icon.textContent = "visibility";
    }
});