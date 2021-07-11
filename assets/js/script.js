// heading code
var body = document.body;
var h2El = document.createElement('h2');
h2El.textContent = 'Coding Quiz Challenge';

h2El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
body.appendChild(h2El);


// code for paragrpah 
var body = document.body;
var pEl = document.createElement("p");
pEl.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.';

pEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
body.appendChild(pEl);


// button for documentation
var button = document.createElement("button");
button.innerHTML = "Start Quiz";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. style 
button.setAttribute('style', 'width:50%; margin-left:25%; margin-right:25%;');

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("The Quiz has started!");
});


// The array of questions for the game.
var questions = [
    { q: 'The sky is blue.', a: 't' },
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];
  
  // We start the game with a score of 0.
  var score = 0;
  
  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);
  
    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      // Increase score
      score++;
      // Alert the user
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
  
  // Show total at end
  alert('You got ' + score + '/' + questions.length);







// var startBtn = document.getElementById('start');
// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');


// // html styling inserts
// var div = document.createElement("#quiz")
//     div.id = 'header'
//     div.innerHTML = '<h2>Coding Quiz Challenge</h2>';
//     document.body.appendChild("quiz");

//      h2 = document.getElementById("h2")

// // timer countdown
// timerEl = timerCountdown.createElement("timer")

// // 
// var startBTN = document.querySelector("#startBTN")

// var timerCountdown = function(event) {
//     event.preventDefault();


// };

// document.querySelector


// // Saves data to localStorage
// // localStorage.setItem()