const mario = document.querySelector(".hero");
const pipe = document.querySelector(".pipe");
const mario_dies = new Audio("./sounds/death.wav");
const mario_jump = new Audio("./sounds/jump.wav");
const mario_background = new Audio("./sounds/back.mp3");
// const mario_background = document.querySelector("#background");

const jump = () => {
  mario.classList.add("jump");
  mario_jump.play();

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const intervalo = setInterval(() => {
  mario_background.play();
  const pipePosition = pipe.offsetLeft;
  const MarioJump = +window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && MarioJump < 85) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${MarioJump}px`;

    mario_background.pause();
    mario_dies.play();
    mario.src = "./img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(intervalo);
  }
}, 10);

document.addEventListener("keydown", jump);
