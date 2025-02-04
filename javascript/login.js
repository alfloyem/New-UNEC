document.addEventListener("DOMContentLoaded", async function () {
    const supportedLanguages = ["az", "en", "ru", "tr"];

    function getCurrentLang() {
        const browserLang = navigator.language.split("-")[0];
        console.log("Tarayıcı dili:", browserLang);
        return supportedLanguages.includes(browserLang) ? browserLang : "az";
    }

    async function applyTranslations(lang) {
        console.log("Uygulanan dil:", lang);
        document.documentElement.lang = lang;

        try {
            const response = await fetch("/localization/login.json");
            console.log("Çeviri dosyasına erişildi:", response.status);
            const translations = await response.json();
            console.log("Çeviri dosyası verisi:", translations);
            const langData = translations[lang];

            if (langData) {
                console.log("Dil verisi bulundu:", langData);
                document.querySelector("h4").textContent = langData.header;
                document.querySelector("h2").textContent = langData["sub-header"];
                document.querySelector(".password-recovery").textContent = langData.forgot_password;
                document.querySelector(".sign-in").textContent = langData.sign_in;
                document.querySelector(".sign-up a").textContent = langData.sign_up;

                const formHeaders = document.querySelectorAll(".form-group-header");
                if (formHeaders.length >= 2) {
                    formHeaders[0].textContent = langData.email;
                    formHeaders[1].textContent = langData.password;
                }

                document.querySelector("#LoginForm_username").setAttribute("placeholder", langData.email_placeholder);
                document.querySelector("#LoginForm_password").setAttribute("placeholder", langData.password_placeholder);
            } else {
                console.log("Çeviri verisi bulunamadı:", lang);
            }
        } catch (error) {
            console.error("Çeviri dosyası yüklenemedi:", error);
        }
    }

    const currentLang = getCurrentLang();
    console.log("Başlangıç dili:", currentLang);
    await applyTranslations(currentLang);

   
    const langSwitcher = document.querySelector("#langSwitcher");
    if (langSwitcher) {
        langSwitcher.addEventListener("change", async function (event) {
            const selectedLang = event.target.value;
            console.log("Seçilen dil:", selectedLang);
            if (supportedLanguages.includes(selectedLang)) {
                await applyTranslations(selectedLang);
            }
        });
    }
});
