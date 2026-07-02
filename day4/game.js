// Elements
const apple = document.getElementById("apple");
const banana = document.getElementById("banana");

const appleScoreText = document.getElementById("appleScore");
const bananaScoreText = document.getElementById("bananaScore");

const timerText = document.getElementById("timer");
const timeSelect = document.getElementById("timeSelect");

// Variables
let appleScore = 0;
let bananaScore = 0;

let totalTime = 300;
let timer;

// Random Position Function
function moveRandom(element) {

    const gameArea = document.getElementById("gameArea");

    const maxX = gameArea.clientWidth - element.offsetWidth;
    const maxY = gameArea.clientHeight - element.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    element.style.left = x + "px";
    element.style.top = y + "px";
}

// Initial Position
moveRandom(apple);
moveRandom(banana);

// Apple Click
apple.addEventListener("click", function () {

    appleScore++;
    appleScoreText.innerText = appleScore;

    moveRandom(apple);

});

// Banana Click
banana.addEventListener("click", function () {

    bananaScore++;
    bananaScoreText.innerText = bananaScore;

    moveRandom(banana);

});

// Start Game
function startGame() {

    clearInterval(timer);

    appleScore = 0;
    bananaScore = 0;

    appleScoreText.innerText = 0;
    bananaScoreText.innerText = 0;

    totalTime = parseInt(timeSelect.value);

    updateTimer();

    moveRandom(apple);
    moveRandom(banana);

    timer = setInterval(function () {

        totalTime--;

        updateTimer();

        if (totalTime <= 0) {

            clearInterval(timer);

            apple.style.pointerEvents = "none";
            banana.style.pointerEvents = "none";

            if (appleScore > bananaScore) {

                alert("🍎 Apple Wins!");

            } else if (bananaScore > appleScore) {

                alert("🍌 Banana Wins!");

            } else {

                alert("🤝 Match Draw!");

            }

        }

    }, 1000);

    apple.style.pointerEvents = "auto";
    banana.style.pointerEvents = "auto";
}

// Timer Function
function updateTimer() {

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timerText.innerText = minutes + ":" + seconds;

}