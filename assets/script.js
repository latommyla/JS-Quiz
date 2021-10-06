// Questions variable with objects
var allQuestions = [
 {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: ["<script>", "<scripting>", "<js>", "<javascript>"],
    correctAnswer: "<script>"
 },
 {
    question: "How do you write 'Hello World' in an alert box?",
    answer: ["alert('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "msg('Hello World')"],
    correctAnswer: "alert('Hello World')"
 },
 {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    correctAnswer: "onclick"
 },
 {
    question: "How to write an IF statement in JavaScript?",
    answer: ["if i = 5 then", "if(i == 5)", "if i == 5 then", "if i = 5"],
    correctAnswer: "if(i == 5)"
 },
 {
    question: "What is the correct way to write a Javascript array?",
    answer: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'"],
    correctAnswer: "var colors = ['red', 'green', 'blue']"
 },
];

var score = 0;
var questionList = 0;

// Variables for ID elements
var wrapper = document.querySelector("#wrapper");
var startTimer = document.querySelector("#timer");
var questionsDiv = document.querySelector("#questions");
var startQuiz = document.querySelector("#startquiz");

var countDown = 60;
var holdTimer = 0;
var penalty = 10;
var createUl = document.createElement("ul");

// Quiz timer begins when Start Quiz! button is clicked
startQuiz.addEventListener("click", function() {
 if (holdTimer === 0) {
      holdTimer = setInterval(function () {
      countDown--;
      startTimer.textContent = "Time: " + countDown;

      if (countDown <=0) {
        clearInterval(holdTimer);
        allDone();
        startTimer.textContent = "Ran out of time!";
      }
    }, 1000);
  }
 render(questionList); 
});

function render(questionList) {
 questionsDiv.innerHTML = " ";
 createUl.innerHTML = " ";
    for (var i = 0; i < allQuestions.length; i++) {
      var userQuestions = allQuestions[questionList].question;
      var userAnswer = allQuestions[questionList].answer;
      questionsDiv.textContent = userQuestions;
 }
 userAnswer.forEach(function (newItem) {
      var listQuestion = document.createElement("li");
      listQuestion.textContent = newItem;
      questionsDiv.appendChild(createUl);
      createUl.appendChild(listQuestion);
      listQuestion.addEventListener("click", (compare));
 })
}

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
  
    if (element.textContent == allQuestions[questionList].correctAnswer) {
      score++;
      createDiv.textContent = "Nice Job! The answer is: " + allQuestions[questionList].correctAnswer;

    } else {
      countDown = countDown - penalty;
      createDiv.textContent = "Wrong! The correct answer is " + allQuestions[questionList].correctAnswer;
    }
 }

 questionList++;

  if (questionList >= allQuestions.length) {
      allDone();
      createDiv.textContent = "Quiz is over!" + " " + "You got " + score + "/" + allQuestions.length + " correct!";
  } else {
      render(questionList);
  }
 questionsDiv.appendChild(createDiv);

}

function allDone() {
  questionsDiv.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Done!";

  questionsDiv.appendChild(createH1);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
 
  questionsDiv.appendChild(createP);

 if (countDown >= 0) {
    var timeLeft = countDown;
    var createP2 = document.createElement("p");
    clearInterval(holdTimer);
    createP.textContent = "Your score is " + timeLeft;

    questionsDiv.appendChild(createP2);
  }


  var createLabel = document.createElement("label");
  createLabel.setAttribute("type", "text");
  createLabel.textContent = "Enter your name ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "Submit";

  questionsDiv.appendChild(createInput);

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  createSubmit.addEventListener("click", function() {
    var initials = createInput.value;

    if (initials === null) {
    console.log("No value");
    } else {
      var finalScore = {
        initials: initials,
        score: timeLeft,
      }
      console.log(finalScore);
      var scoreRecap = localStorage.getItem("scoreRecap");
      if (scoreRecap === null) {
        scoreRecap = [];
      } else {
        scoreRecap = JSON.parse(scoreRecap);
      }
      scoreRecap.push(finalScore);
      var newScore = JSON.stringify(scoreRecap);
      localStorage.setItem("scoreRecap", newScore);
      window.location.replace("./quiz.html");
    }
  });
}

