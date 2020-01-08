document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector("nav");

    document.onscroll = function (e) {
        if (e.target.scrollingElement.scrollTop > 0) {
            nav.style.background = "#000";
        } else {
            nav.style.background = "none";
        }
    };
});

const input = document.getElementById("hamburger-label");

input.onkeydown = toggleDropdown;

function toggleDropdown(e) {
    if (e.code != "Enter")
        return;
    
    let hamburger = document.getElementById("hamburger");

    if (hamburger.checked)
        hamburger.checked = false;
    else
        hamburger.checked = true;
}