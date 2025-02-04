// ==UserScript==
// @name         Unec Login
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  This code Rebuild login page for modern and responsible design and clean HTML structure
// @author       Anonymus
// @match        https://kabinet.unec.edu.az/*
// @match        http://kabinet.unec.edu.az/*
// @match        https://kabinet.unec.edu.az/az/login/*
// @match        http://kabinet.unec.edu.az/az/login/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const url = 'https://raw.githubusercontent.com/alfloyem/NewUnec/main/login_page.html';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.documentElement.innerHTML = data;

            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            function updateTheme() {
                if (darkModeMediaQuery.matches) {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            }
            updateTheme();
            darkModeMediaQuery.addEventListener('change', updateTheme);
        })
        .catch(error => console.error('Error fetching HTML:', error));
})();

