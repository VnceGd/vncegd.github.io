// Nav background
document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector("nav");

    if (document.scrollingElement.scrollTop > 0)
        nav.style.background = "var(--bg-color)";

    document.onscroll = function (e) {
        if (e.target.scrollingElement.scrollTop > 0) {
            nav.style.background = "var(--bg-color)";
        } else {
            nav.style.background = "none";
        }
    };
});

// Hamburger menu
const hamburgerLabel = document.getElementById("hamburger-label");
const navButtons = document.getElementsByClassName("nav-btn");

document.onkeydown = function(e) {
    if (e.code == "Escape")
        toggleDropdown(e);
}
hamburgerLabel.onkeydown = function(e) {
    if (e.code == "Enter")
        toggleDropdown(e);
}
for(let n = 0; n < navButtons.length; n++) {
    let btn = navButtons[n];

    btn.addEventListener('keydown', (e) => {
        if (e.code == "Escape" || e.code == "Enter")
            toggleDropdown(e);
    });
    btn.addEventListener('click', (e) => {
        toggleDropdown(e)
    });
}

function toggleDropdown(e) {
    let hamburger = document.getElementById("hamburger");

    if (hamburger.checked && e.code != "Enter")
        hamburger.checked = false;
    else if (e.code != "Escape")
        hamburger.checked = true;
}