var finalScore = document.querySelector("#finalscore");
var clear = document.querySelector("#reset");
var back = document.querySelector("#back");

clear.addEventListener("click", function () {
 localStorage.clear();
 location.reload();
});

var scoreRecap = localStorage.getItem("scoreRecap");
scoreRecap = JSON.parse(scoreRecap);

if (scoreRecap !== null) {
 for (var i = 0; i < scoreRecap.length; i++) {
  var createLi = document.createElement("li");
  createLi.textContent = scoreRecap[i].initials + " " + scoreRecap[i].score;
  finalScore.appendChild(createLi);
 }
}

back.addEventListener("click", function () {
 window.location.replace("./index.html");
});