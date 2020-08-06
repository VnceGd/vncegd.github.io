const toggleBtn = document.querySelector("#theme-btn");
var timeSinceToggle = 0;

// Toggle theme (light/dark) of document
function toggleTheme() {
    if (Date.now() - timeSinceToggle < 200) {
        return;
    }
    timeSinceToggle = Date.now();
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
        localStorage.removeItem('theme');
    }
    else {
        document.documentElement.setAttribute('theme', 'toggle');
        localStorage.setItem('theme', 'toggled');
    }
}

// Toggle theme if data found in local storage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') === 'toggled') {
        toggleTheme();
    }
});

// Add listener to theme toggle button
toggleBtn.addEventListener('click', toggleTheme);