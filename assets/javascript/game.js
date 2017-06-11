
//randomly pick a word from the list of words, count the letters in the word, display the words letter count to the user in "_ _ ..." format.  Evaluate users guessed letter for each letter's position.  If correct, reveal letter.  If incorrect, deduct score (number of guesses remaining), and display incorrect letter. After the user wins/loses, the game should automatically display another word.


var userGuess;
var guessWord = ["Tardis", "Companion", "TimeLord", "Gallifrey", "Daleks", "Cybermen", "Sontaran"];
var lettersGuessed = [];
var reveal = [];
var guesses = 10;
var wins = 0;
var losses = 0;
    



//function initialize game with wins and score.  When the user starts
function scoreCount(guess){

      document.getElementById("score").innerHTML = " <li>Guesses: " + guesses + "</li>"+ "<li>Wins: " + wins + "</li><li> Losses: " + losses + "</li>";
      };

//fuctions that starts the game
//function that will display the amount of letters in the word.  Will need to get the length of the word, and then create the same length of _ characters.
function startGame() {
      var word = (guessWord[Math.floor(Math.random() * guessWord.length)]); 
      
      console.log(word);
      var size = word.length;
      for (var i = 0; i < size; i++) {
            reveal[i] = "_";
            }
      document.getElementById("blanks").innerHTML = 
      reveal;
      
      var totalLetters = size;


      document.onkeyup = function(e) {
            var userGuess = e.key;
            console.log(userGuess);


       //for loop to check the word for the players guessed letter     
      for (var j = 0; j < size; j++) {
    
            //if the letter is correct, add the letter to the reveal array at that position.     
            if (userGuess === word[j].toLowerCase()) {
                  reveal[j] = userGuess;
                  document.getElementById("blanks").innerHTML = reveal;
                  totalLetters--;
                  }
            }
          
            console.log(lettersGuessed);
            console.log(reveal);

            if (guesses === 0) {
            losses ++;
            scoreCount();
            console.log("sorry");
            }
            else if (totalLetters <= 0) {
            wins ++;
             document.getElementById("start").innerHTML = "Alright! Good Job!  Here's another word for you to try!";
            if (word == guessWord[0]) {
                  document.createElement("Tardis").setAttribute("src", "assets/images/tardisOne.jpg");
            }
            console.log(reveal.length = 0);
            scoreCount();
            startGame();
            }
      }

};


document.onkeyup = function(event) {
      
        document.getElementById("start").innerHTML = "Guess the word! You get 10 guesses."; 
         scoreCount();   
         startGame(); 
};
//start of game 

 
 











