function attachPasswordToggle() {
    const passwordToggleButton = document.querySelector('.show-password');
    const passwordInput = document.getElementById('LoginForm_password');

    if (passwordToggleButton && passwordInput) {
        passwordToggleButton.addEventListener('click', function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                this.textContent = "visibility_off";
            } else {
                passwordInput.type = "password";
                this.textContent = "visibility";
            }
        });
    } else {
    }
}