const MAX_SHAPES = 30;
const MAX_WIDTH = 10;
const MIN_DURATION = 10;
const MAX_DURATION = 20;

function generateBackgroundObjects() {
    let background = document.querySelector("#animated-bg");
    for (let i = 0; i < MAX_SHAPES; i++) {
        let object = document.createElement('i');
        let width = Math.random() * MAX_WIDTH;
        let duration = Math.random() * (MAX_DURATION - MIN_DURATION) + MIN_DURATION;
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);

        object.style.left = x + 'vw';
        object.style.top = '-' + y + 'vh';

        object.style.borderWidth = width + 'rem';
        object.style.animationDuration = duration + 's';

        background.appendChild(object);
    }
}

generateBackgroundObjects();