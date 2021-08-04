var bobdy = document.body;
// dom variables
var getCount = document.getElementById('countdown');
var getTimer = document.getElementById('timer')
var starter = document.getElementById('start')
var questionTitle = document.getElementById('title')
var questionChoice = document.getElementById('choices')
var timerEl = document.getElementById('countdown')



// Global Variable
var timeleft = 60;
var timeRunning = false
var highScore = 0;
var questionsListIndex = 0;
var interval = 0;





// Timer that counts down from 60
var timerCountdown = function () {
  if (timeRunning == true) {
    return false
  }
  timeRunning = true
  //use the 'setInterval()' to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {

    console.log(timeleft);
    //As long as the 'timeleft' is greater than 1
    if (timeleft > 1) {
      //Set the 'textContent' of the 'timerEl' to show the remaining seconds
      timerEl.textContent = timeleft + ' seconds remaining';
      //Decrement 'timeleft' by 1
      timeleft--;

    } else if (timeleft === 1) {
      //When ttimeleftime left is equal to 1, rename to 'second' instead of seconds
      timerEl.textContent = timeleft + ' second remaining';
      timeleft--;
    } else {
      endgame()
      //Once 'timeLeft' gets to 0, set 'timerEl' to an empty string
      timerEl.textContent = '';
      //Use 'clearInterval()' to stop the timer
      clearInterval(timeInterval);
      //Call the 'displayMessage() function
    }

  }, 1000);
};
// starts the quiz game function
var startQuiz = function () {
  // if the quiz doesn't find anymore question then it will end the game
  var currentQuestion = questionsList[questionsListIndex]
  if (!currentQuestion) {
    return endgame();
  }
  // this will reset the choices string after every chosen answer 
  questionTitle.innerText = questionsList[questionsListIndex].question
  choices.innerHTML = ''

  // Loop over every question object within the question.js file
  for (var i = 0; i < questionsList[questionsListIndex].choices.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = (questionsList[questionsListIndex].answer);
    var button = document.createElement("button")
    button.textContent = questionsList[questionsListIndex].choices[i]
    button.classname = "choiceBtn"
    button.setAttribute("style", "background:red;font-size:23px");
    button.addEventListener('click', function (event) {
      event.target
      if (answer !== event.target.textContent) {
        timeleft = timeleft - 15
      }
      questionsListIndex++
      startQuiz()
    })
    choices.appendChild(button)

{

    }

  }
};
// Start button //
document.getElementById('start').addEventListener('click', function (event) {
  event.preventDefault()
  timerCountdown()
  startQuiz()
  // $(".landing").addClass("hide")
  // $("Questions").removeClass("hide")
})

// endgame function
function endgame() {
  console.log("endgame");
  
  localStorage.setItem('${initials}', timeleft);

  window.location.href = "./hiScore.html";
};