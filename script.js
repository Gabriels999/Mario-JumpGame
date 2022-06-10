const mario = document.querySelector(".hero");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const intervalo = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  if (pipePosition <= 120) {
    pipe.style.animation = none;
  }
}, 10);

document.addEventListener("keydown", jump);
