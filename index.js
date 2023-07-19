var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "./images/" + randomDiceImage1;
var randomImg1 = document.querySelectorAll("img")[0];
randomImg1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
var randomImg2 = document.querySelectorAll("img")[1];
randomImg2.setAttribute("src", randomImageSource2);

var newTitle = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  newTitle.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  newTitle.innerHTML = "Player 2 Wins! 🚩";
} else {
  newTitle.innerHTML = "Draw!❤️‍🔥";
}
