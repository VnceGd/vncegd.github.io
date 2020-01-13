const toggleBtn = document.querySelector("#theme-btn");
var timeSinceToggle = 0;

toggleBtn.addEventListener('click', e => {
    if (Date.now() - timeSinceToggle < 200) {
        return;
    }
    timeSinceToggle = Date.now();
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
    }
    else {
        document.documentElement.setAttribute('theme', 'toggle');
    }
});
