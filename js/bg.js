const MAX_SHAPES = 30;
const MIN_WIDTH = 3;
const MAX_WIDTH = 12;
const MIN_DURATION = 6;
const MAX_DURATION = 18;
const MIN_X_START = 0;
const MAX_X_START = 100;
const MIN_Y_START = -100;
const MAX_Y_START = 0;

function generateBackgroundObjects() {
    let background = document.querySelector("#animated-bg");
    for (let i = 0; i < MAX_SHAPES; i++) {
        let object = document.createElement('i');
        let width = Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH) + MIN_WIDTH);
        let duration = Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION);
        let opacity = Math.random();
        let x = Math.floor(Math.random() * (MAX_X_START - MIN_X_START) + MIN_X_START);
        let y = Math.floor(Math.random() * (MAX_Y_START - MIN_Y_START) + MIN_Y_START);

        object.style.left = x + 'vw';
        object.style.top = -y + 'vh';

        object.style.borderWidth = width + 'rem';
        object.style.animationDuration = duration + 's';
        object.style.opacity = opacity;

        background.appendChild(object);
    }
}

document.addEventListener("DOMContentLoaded", generateBackgroundObjects);