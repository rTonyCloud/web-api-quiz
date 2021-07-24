var timer = document.getElementById('button');
var main document.getElementById('body');
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
    { q: 'Javascript sucks?.', c:['you suck', 'you suck 2', 'you suck 3'], a: '1' }
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
            
        buttonEl.addEventListener("click", function(){
            countdown()
            quizEl()
        });
        }};