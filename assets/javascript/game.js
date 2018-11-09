    
//Variables
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    //user gets 9 guesses to match letter
    var guesses = 9;
    var lettersGuessed;
    var computerGuess;
    //var userArray = [];

    function updateScore() {
        document.querySelector("#Wins").innerHTML = "Wins: " + wins;
        document.querySelector("#Losses").innerHTML = "Losses: " + losses;
        document.querySelector("#Guesses").innerHTML = "Guesses: " + guesses;
        document.querySelector("#Letters").innerHTML = "Letters Guessed: " + lettersGuessed;
      }

    function computerGuess() {computerGuess = letters[Math.floor(Math.random() * letters.length)];

    }


    updateScore();
    computerGuess();


//comp picks random letter
    //var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);

//user picks random letter
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        console.log(userGuess);
        console.log(wins);
        //console.log(losses);
        console.log(guesses);
//if user matches the comp pick
//up win count by 1
        if (userGuess === computerGuess) {
          wins++;
          updateScore();
        }

//if user does not match comp pick
//decrease guesses by 1
        else {guesses--;

        }

        if (guesses<1)
            losses++;
            updateScore();
        }
    


