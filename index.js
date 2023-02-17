let cardsArray = [
  {
    name: "CSS",
    img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true",
  },
  {
    name: "HTML",
    img: "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true",
  },
  {
    name: "jQuery",
    img: "https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true",
  },
  {
    name: "JS",
    img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true",
  },
  {
    name: "Node",
    img: "https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true",
  },
  {
    name: "Photo Shop",
    img: "https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true",
  },
  {
    name: "PHP",
    img: "https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true",
  },
  {
    name: "Python",
    img: "https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true",
  },
  {
    name: "Ruby",
    img: "https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true",
  },
  {
    name: "Sass",
    img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true",
  },
  {
    name: "Sublime",
    img: "https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true",
  },
  {
    name: "Wordpress",
    img: "https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true",
  },
];

let gameGrid = cardsArray.concat(cardsArray);
let game = document.getElementById("game-board");
let grid = document.createElement("section");
let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget;

gameGrid.sort(() => 0.5 - Math.random());
grid.setAttribute("class", "grid");
game.appendChild(grid);

for (let i = 0; i < gameGrid.length; i++) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  card.dataset.name = gameGrid[i].name;
  var front = document.createElement("div");
  front.classList.add("front");
  var back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${gameGrid[i].img})`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
}

let match = () => {
  let selected = document.querySelectorAll(".selected");

  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.add("match");
  }
};

let reset = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll(".selected");
  for (i = 0; i < selected.length; i++) {
    selected[i].classList.remove("selected");
  }
};
grid.addEventListener("click", (e) => {
  if (
    e.target.nodeName == "SECTION" ||
    e.target === previousTarget ||
    e.target.parentNode.classList.contains("match") ||
    e.target.parentNode.classList.contains("selected")
  ) {
    return;
  }
  if (count < 2) {
    count++;

    if (count === 1) {
      firstGuess = e.target.parentNode.dataset.name;
      e.target.parentNode.classList.add("selected");
    } else {
      secondGuess = e.target.parentNode.dataset.name;
      e.target.parentNode.classList.add("selected");
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, 800);
        setTimeout(reset, 800);
      } else {
        setTimeout(reset, 800);
      }
    }
    previousTarget = e.target;
  }
});
