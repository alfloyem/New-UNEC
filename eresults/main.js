function toggleSidebar() {
    document.body.classList.toggle("close-sidebar");
    closeAllSubMenus();
  }
  
  function toggleSubMenu(button) {
    const subMenu = button.nextElementSibling;
    if (!subMenu) return;
  
    if (subMenu.classList.contains('show')) {
      subMenu.classList.remove('show');
      if (button.children[2]) {
        button.children[2].classList.remove('rotate');
      }
    } else {
      closeAllSubMenus();
      subMenu.classList.add('show');
      if (button.children[2]) {
        button.children[2].classList.add('rotate');
      }
    }
  }
  
  
  function closeAllSubMenus() {
    document.querySelectorAll('#sidebar .sub-menu.show').forEach(menu => {
      menu.classList.remove('show');
      let button = menu.previousElementSibling;
      if (button && button.classList.contains('rotate')) {
        button.classList.remove('rotate');
      }
    });
  }
  
  async function applyTranslations() {
    const userLang = (navigator.language || "az").split('-')[0];
    const lang = ["en", "tr", "az", "ru"].includes(userLang) ? userLang : "az";
  
    try {
      const response = await fetch("localization.json");
      const translations = await response.json();
  
      if (translations[lang]) {
        Object.entries(translations[lang]).forEach(([id, text]) => {
          const element = document.getElementById(id);
          if (element) element.textContent = text;
        });
      }
    } catch (error) {
      console.error("error:", error);
    }
  }
  
  function initializeSidebar() {
    document.querySelectorAll('[onclick="toggleSidebar()"]').forEach(button => {
      button.addEventListener("click", toggleSidebar);
      button.removeAttribute("onclick");
    });
    document.querySelectorAll('[onclick^="toggleSubMenu"]').forEach(button => {
      button.addEventListener("click", function () {
        toggleSubMenu(this);
      });
      button.removeAttribute("onclick");
    });
  }
  
    applyTranslations();