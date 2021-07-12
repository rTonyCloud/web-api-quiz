// heading code
var bodyEl = document.body;
var h2El = document.createElement('h2');
h2El.textContent = 'Coding Quiz Challenge';

h2El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
bodyEl.appendChild(h2El);


// code for paragrpah 
var bodyEl = document.body;
var pEl = document.createElement("p");
pEl.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.';

pEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
bodyEl.appendChild(pEl);


// button for documentation
var buttonEl = document.createElement("button");
buttonEl.innerHTML = "Start Quiz";
buttonEl.id = "buttonq"

// 2. body append
var bodyEl = document.getElementsByTagName("body")[0];
bodyEl.appendChild(buttonEl);

// 3. style 
buttonEl.setAttribute('style', 'width:50%; margin-left:25%; margin-right:25%;');

// 4. Add event handler
buttonEl.addEventListener ("click", function() {
  ;
});
// end of page layout

var timerEl = document.getElementById('button');
var mainEl = document.getElementById('body');
var buttonEl = document.getElementById('buttonq');
var quizEl = document.getElementById('buttonq');

// Timer that counts down from 60
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  };

     var questions = [
    { q: 'Javascript sucks?.', c:['you suck', 'you suck 2', 'you suck 3'] a: '1' }
  ];
    
    // We start the game with a score of 0.
    var score = 0;
    
    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);
    
        // Compare answers
        if (
        (answer === true && questions[i].a === '0') ||
        (answer === false && questions[i].a === '0')
        ) {
        // Increase score
        score++;
        } else {
        score--;
        // Alert the user
        // alert('Correct!');
        // } else {
        // alert('Wrong!');

        buttonEl.onclick = quizEl;
        }};