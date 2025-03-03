
    // Get DOM elements
    const notificationToggle = document.getElementById('notification-toggle');
    const notificationMenu = document.getElementById('notification-menu');
    const profileToggle = document.getElementById('profile-toggle');
    const profileMenu = document.getElementById('profile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const languageOptions = document.querySelectorAll('.language-section .option-item');
    const themeOptions = document.querySelectorAll('.theme-section .option-item');

    // Toggle notification dropdown
    notificationToggle.addEventListener('click', () => {
        notificationMenu.classList.toggle('navbar-active');
        
        if (profileMenu.classList.contains('navbar-active')) {
            profileMenu.classList.remove('navbar-active');
        }
        
        menuOverlay.classList.toggle('navbar-active');
    });

    // Toggle profile dropdown
    profileToggle.addEventListener('click', () => {
        profileMenu.classList.toggle('navbar-active');
        
        if (notificationMenu.classList.contains('navbar-active')) {
            notificationMenu.classList.remove('navbar-active');
        }
        
        menuOverlay.classList.toggle('navbar-active');
    });

    // Close dropdowns when clicking outside
    menuOverlay.addEventListener('click', () => {
        notificationMenu.classList.remove('navbar-active');
        profileMenu.classList.remove('navbar-active');
        menuOverlay.classList.remove('navbar-active');
    });

    // Sidebar toggle functionality (placeholder)
    sidebarToggle.addEventListener('click', () => {
        // Add sidebar toggle functionality here
        alert('Sidebar toggle clicked! Implement your sidebar functionality.');
    });

    // Language options functionality
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            languageOptions.forEach(opt => opt.classList.remove('navbar-active'));
            option.classList.add('navbar-active');
        });
    });

    // Theme options functionality
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            themeOptions.forEach(opt => opt.classList.remove('navbar-active'));
            option.classList.add('navbar-active');
        });
    });
