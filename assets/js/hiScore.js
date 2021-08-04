var gameScoresArr = [];
var quizGameScoreObj = {};



//retreives local storage
var allScores = localStorage.getItem("allScores")


// Function to display score
var displayScore = function () {
    //variable to hold the ID 'highScoreSubmit'
    var inputSubmit = document.getElementById('highScoreSubmit');
    //grab the finalScoreDisplay ID and set its content
    document.getElementById('finalScoreDisplay').textContent = "Your Final Score is: " + timeleft;
    // event handler to grab click, before displaying final score
    $('#submitScoreBtn').on('click', function (event) {
        // prevents the browser from refreshing after each click
        event.preventDefault();
        var initials = '${initials}'.value;
    
        quizGameScoreObj = {
            name: initials,
            value: timeleft,
        }
        // call the saveScore function
        saveScores();
        // call the DisplayHighScore function
        displayHighScore();
    })
};

// Function to save score
var saveScores = function () {
    //variable to hold score from local storage
    var currentSavedScores = localStorage.getItem("timleft");
    //if statement checks if currentSavedScores has a null value
    if (!currentSavedScores) {
        // Adds "quizGameScoreObj"
        gameScoresArr.push(gameScoreObj);
        //converts a object or value to JSON string
        localStorage.setItem("highScores", JSON.stringify(gameScoresArr));

        //parses JSON string
    } else {
        currentSavedScores = JSON.parse(currentSavedScores);
        // Adds "quizGameScoreObj"
        currentSavedScores.push(quizGameScoreObj);
        //converts a object or value to JSON string
        localStorage.setItem("highScores", JSON.stringify(currentSavedScores));
    };
};

// Function to display high score
var displayHighScore = function () {
    //variable to grab highscore ID
    var scoreList = document.getElementById('highScores');

    //create score list from local storage
    var createScoreEl = function (savedScoresObj) {
        //create li element and set it to ScoreLi variable
        var scoreLi = document.createElement('li');
        console.log(scoreLi)
        //attach ScoreLi variable to list
        scoreList.appendChild(scoreLi);
        //set the Li element attribute
        scoreLi.setAttribute("id", "li");
        scoreLi.setAttribute("value", savedScoresObj.value)
        scoreLi.classList.add("text");
        scoreLi.innerHTML = savedScoresObj.value + " --- " + savedScoresObj.name + ".";
    };
    //get saved scores from local storage
    var savedScores = localStorage.getItem("highScores");
    //if no saved scores in local storage skip
    if (!savedScores) {
 
        return false;
    }
   
    savedScores = JSON.parse(savedScores);
    console.log(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        createScoreEl(savedScores[i]);
        //sort list of high scores from highest to lowest
        var sortList = function () {
            var list, i, switching, b, shouldSwitch;
            list = document.getElementById("highScores");
            switching = true;
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
                // start by saying: no switching is done:
                switching = false;
                b = list.getElementsByTagName("li");
                // Loop through all list-items:
                for (i = 0; i < (b.length - 1); i++) {
                    // start by saying there should be no switching:
                    shouldSwitch = false;
                    /* check if the next item should
                    switch place with the current item: */
                    if (b[i].value < b[i + 1].value) {
                        /* if next item is alphabetically
                        lower than current item, mark as a switch
                        and break the loop: */
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /* If a switch has been marked, make the switch
                    and mark the switch as done: */
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
            sortList();
        }
    }
};