// Reference: https://stackoverflow.com/a/36607837
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");

    document.onscroll = function (e) {
        if (e.target.scrollingElement.scrollTop > 0) {
            nav.style.background = "#000";
        } else {
            nav.style.background = "none";
        }
    };
});

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown
const input = document.getElementById("hamburger-label");

input.onkeydown = toggleDropdown;

function toggleDropdown(e) {
    if (e.code != "Enter")
        return;
    
    var hamburger = document.getElementById("hamburger");

    if (hamburger.checked)
        hamburger.checked = false;
    else
        hamburger.checked = true;
}