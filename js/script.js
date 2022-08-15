const mario = document.querySelector(".hero");
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".count");
const user_record = document.querySelector(".record");
const user = document.querySelector(".user");
const playAgain = document.querySelector(".try-again");

const mario_dies = new Audio("../sounds/death.wav");
const mario_jump = new Audio("../sounds/jump.wav");
const mario_background = new Audio("../sounds/back.mp3");

let death = false;
let count = 0;

const localUser = localStorage.getItem("player");
user.innerHTML = `${localUser} -`;
let localRecord = localStorage.getItem("record");
if (localRecord == 0) {
  user_record.innerHTML = `0m`;
} else {
  user_record.innerHTML = `${localRecord}m`;
}

const jump = () => {
  mario_background.play();
  mario.classList.add("jump");
  mario_jump.play();

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const intervalo = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const MarioJump = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && MarioJump < 85) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${MarioJump}px`;

    mario_background.pause();
    mario_dies.play();
    mario.src = "../img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    death = true;
    if (points > parseInt(localRecord)) {
      localStorage.setItem("record", points);
      localRecord = localStorage.getItem("record");
      user_record.innerHTML = `${localRecord}m`;
    }
    playAgain.classList.remove("hide");

    clearInterval(intervalo);
  }
  if (death == false) {
    count = count + 0.5;
    points = (count / 10).toFixed(0);
    score.innerHTML = `${points}m`;
  }
}, 10);

function reload() {
  document.location.reload();
}

document.addEventListener("keydown", jump);
