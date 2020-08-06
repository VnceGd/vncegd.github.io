function toggleDropdown(e) {
    let hamburger = document.getElementById("hamburger");

    if (hamburger.checked && e.code != "Enter")
        hamburger.checked = false;
    else if (e.code != "Escape")
        hamburger.checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
    // Nav background
    let nav = document.querySelector("nav");

    if (document.scrollingElement.scrollTop > 0)
        nav.style.background = "var(--bg-color)";

    document.onscroll = (e) => {
        if (e.target.scrollingElement.scrollTop > 0) {
            nav.style.background = "var(--bg-color)";
        } else {
            nav.style.background = "none";
        }
    };

    // Hamburger menu
    let hamburgerLabel = document.getElementById("hamburger-label");
    let navButtons = document.getElementById("nav-btns").children;

    document.onkeydown = (e) => {
        if (e.code == "Escape")
            toggleDropdown(e);
    }
    hamburgerLabel.onkeydown = (e) => {
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
            toggleDropdown(e);
        });
    }
});