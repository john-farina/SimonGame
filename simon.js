const gameArray = [0, 0, 0, 0];
let secondCount = 0;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button3');
const button3 = document.querySelector('#button2');
const button4 = document.querySelector('#button4');

function randomNumGen(num) {
    let number = Math.floor(Math.random() * num);
    return number;
}
function countSeconds() {
    secondCount++;
}

function randomColor() {
    let newNum = randomNumGen(4);
    if (secondCount % 2 === 0) {
        if (newNum === 0) {
            button1.style.backgroundColor = 'var(--yellow)';
        } else if (newNum === 1) {
            button2.style.backgroundColor = 'var(--blue)';
        } else if (newNum === 2) {
            button3.style.backgroundColor = 'var(--red)';
        } else if (newNum === 3) {
            button4.style.backgroundColor = 'var(--green)';
        }
    }
}

function updateFunctions() {}
function gameLoop() {
    updateFunctions();
    randomColor();
    countSeconds();
}
function start() {
    setInterval(gameLoop, 1000);
}
start();

button1.addEventListener('click', function () {
    button1.style.backgroundColor = 'var(--lightYellow)';
});
button2.addEventListener('click', function () {
    button2.style.backgroundColor = 'var(--lightBlue)';
});
button3.addEventListener('click', function () {
    button3.style.backgroundColor = 'var(--lightRed)';
});
button4.addEventListener('click', function () {
    button4.style.backgroundColor = 'var(--lightGreen)';
});
