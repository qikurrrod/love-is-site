const cards = [
  {
    text: "быть рядом даже в холодные дни 💗",
    bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    img: "img/1.jpg"
  },
  {
    text: "вместе смотреть прикольные сериальчики 🍿",
    bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    img: "img/2.jpg"
  },
  {
    text: "ехать вместе в уник 🥺",
    bg: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    img: "img/3.jpg"
  },
  {
    text: "делать друг другу массаж ✨",
    bg: "linear-gradient(135deg, #fccb90, #d57eeb)",
    img: "img/4.jpg"
  },
  {
    text: "хихикать и прикольничать 🤭",
    bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    img: "img/5.jpg"
  },
  {
    text: "ждать пока он выспится 😴",
    bg: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    img: "img/6.jpg"
  },
  {
    text: "снимать вместе прикольные тиктокии 🤩",
    bg: "linear-gradient(135deg, #fdfbfb, #ebedee)",
    img: "img/7.jpg"
  },
  {
    text: "вместе вкусно кушать 🥙",
    bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    img: "img/8.jpg"
  }
];

const loveText = document.getElementById("loveText");
const btn = document.getElementById("btn");
const loveImage = document.getElementById("loveImage");
const card = document.querySelector(".card");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cards.length);

  // обновляем контент
  loveText.textContent = cards[randomIndex].text;
  document.body.style.background = cards[randomIndex].bg;
  loveImage.src = cards[randomIndex].img;

  // анимация
  card.classList.remove("fade");
  void card.offsetWidth; // магическая строчка для перезапуска анимации
  card.classList.add("fade");
});