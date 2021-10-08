// Variables for id's of finalscore, reset button, and back button.
var finalScore = document.querySelector("#finalscore");
var clear = document.querySelector("#reset");
var back = document.querySelector("#back");

// Function to clear scores from local storage.
clear.addEventListener("click", function () {
 localStorage.clear();
 location.reload();
});

// scoreRecap variable to show all scores in a list order
var scoreRecap = localStorage.getItem("scoreRecap");
scoreRecap = JSON.parse(scoreRecap);

if (scoreRecap !== null) {
 for (var i = 0; i < scoreRecap.length; i++) {
  var createLi = document.createElement("li");
  createLi.textContent = scoreRecap[i].initials + " " + scoreRecap[i].score;
  finalScore.appendChild(createLi);
 }
}

// Back button to main index.html/main page.
back.addEventListener("click", function () {
 window.location.replace("./index.html");
});