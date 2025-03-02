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
    }
}

async function applyTranslations() {
    const userLang = (navigator.language || "az").split('-')[0];
    const lang = ["en", "tr", "az", "ru"].includes(userLang) ? userLang : "az";

    try {
        const response = await fetch("localization.json");
        const translations = await response.json();

        if (translations[lang]) {
            for (const [id, text] of Object.entries(translations[lang])) {
                const element = document.getElementById(id);
                if (element) element.textContent = text;
            }
        }
    } catch (error) {
        console.error("Localization error:", error);
    }
}

attachPasswordToggle();
applyTranslations();
