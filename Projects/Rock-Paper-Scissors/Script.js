const playerHand = document.getElementById("playerHand");
const cpuHand = document.getElementById("cpuHand");

const playerScoreText = document.getElementById("playerScore");
const cpuScoreText = document.getElementById("cpuScore");

const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const vs = document.getElementById("vs");

const playBtn = document.getElementById("playBtn");

const choiceButtons = document.querySelectorAll(".choice");

let playerChoice = "rock";
let playerScore = 0;
let cpuScore = 0;
let playing = false;

const hands = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

choiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (playing) return;

        choiceButtons.forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        playerChoice = button.dataset.choice;

    });

});

playBtn.addEventListener("click", playGame);

function playGame() {

    if (playing) return;

    playing = true;

    playBtn.disabled = true;

    result.innerHTML = "";

    vs.style.display = "none";

    playerHand.innerHTML = "✊";
    cpuHand.innerHTML = "✊";

    let number = 3;

    countdown.innerHTML = number;

    const timer = setInterval(() => {

        shakeHands();

        gsap.fromTo(
            countdown,
            { scale: 0.5, opacity: 0 },
            { scale: 1.2, opacity: 1, duration: 0.4 }
        );

        number--;

        if (number > 0) {

            countdown.innerHTML = number;

        } else {

            clearInterval(timer);

            revealChoices();

        }

    }, 1000);

}

function shakeHands() {

    gsap.fromTo(playerHand,
        { y: 0 },
        {
            y: -35,
            duration: .2,
            repeat: 1,
            yoyo: true
        });

    gsap.fromTo(cpuHand,
        { y: 0 },
        {
            y: -35,
            duration: .2,
            repeat: 1,
            yoyo: true
        });

}

function revealChoices() {

    countdown.innerHTML = "";

    const choices = ["rock", "paper", "scissors"];

    const cpuChoice = choices[Math.floor(Math.random() * 3)];

    playerHand.innerHTML = hands[playerChoice];
    cpuHand.innerHTML = hands[cpuChoice];

    gsap.from(playerHand, {
        scale: .5,
        duration: .4
    });

    gsap.from(cpuHand, {
        scale: .5,
        duration: .4
    });

    vs.style.display = "block";

    gsap.from(vs, {
        scale: 0,
        duration: .5
    });

    setTimeout(() => {

        checkWinner(playerChoice, cpuChoice);

    }, 1500);

}

function checkWinner(player, cpu) {

    vs.style.display = "none";

    if (player === cpu) {

        result.innerHTML = "🤝 DRAW";

    }

    else if (
        (player === "rock" && cpu === "scissors") ||
        (player === "paper" && cpu === "rock") ||
        (player === "scissors" && cpu === "paper")
    ) {

        playerScore++;

        playerScoreText.innerHTML = playerScore;

        result.innerHTML = "🎉 YOU WIN";

        gsap.from(playerHand, {
            x: -50,
            duration: .3,
            repeat: 1,
            yoyo: true
        });

    }

    else {

        cpuScore++;

        cpuScoreText.innerHTML = cpuScore;

        result.innerHTML = "💀 CPU WINS";

        gsap.from(cpuHand, {
            x: 50,
            duration: .3,
            repeat: 1,
            yoyo: true
        });

    }

    gsap.from(result, {
        scale: .5,
        opacity: 0,
        duration: .5
    });

    setTimeout(() => {

        playing = false;

        playBtn.disabled = false;

    }, 1800);

}