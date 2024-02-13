const numberTouch = document.getElementById("n1");
const numberNoTouch = document.getElementById("n2");
let touch = 0;
let noTouch = 0;

const repeatBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 150 + 100 + "px";

  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  const ring = () => {
    const audio = new Audio();
    audio.src = "./assets/bubble.mp3";
    audio.play();
  };

  bubble.addEventListener("click", () => {
    touch++;
    numberTouch.textContent = touch;
    ring();
    bubble.remove();
  });
  bubble.addEventListener("animationend", () => {
    noTouch++;
    numberNoTouch.textContent = noTouch;
    bubble.remove();
  });
};

setInterval(repeatBubble, 800);

console.log();
