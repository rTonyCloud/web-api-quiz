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
button.id = "button"

// 2. body append
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. style 
button.setAttribute('style', 'width:50%; margin-left:25%; margin-right:25%;');

// 4. Add event handler
button.addEventListener ("click", function(countDown) {
  alert("The Quiz has started!");
});

// countdown
var timerEl = document.getElementsByClassName("countDown");
// startbtn 
var button = document.getElementById("button");

function countDown(timerEl, button) {
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
      // Call the `displayMessage()` function
      
    window.onload = function() {
        var oneMinute = 60 * 1,
            display = document.querySelector('#button');
    }

button.onclick = countDown;
console.log();
    };




// // The array of questions for the game.
// function startBtn(){

// var questions = [
//     { q: 'The sky is blue.', a: 't' },
//     { q: 'There are 365 days in a year.', a: 't' },
//     { q: 'There are 42 ounces in a pound.', a: 'f' },
//     { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
//     { q: 'Bananas are vegetables.', a: 'f' }
//   ];
  
//   // We start the game with a score of 0.
//   var score = 0;
  
//   // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);
  
//     // Compare answers
//     if (
//       (answer === true && questions[i].a === 't') ||
//       (answer === false && questions[i].a === 'f')
//     ) {
//       // Increase score
//       score++;
//       // Alert the user
//       alert('Correct!');
//     } else {
//       alert('Wrong!');
//   
    };