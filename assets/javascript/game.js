
//randomly pick a word from the list of words, count the letters in the word, display the words letter count to the user in "_ _ ..." format.  Evaluate users guessed letter for each letter's position.  If correct, reveal letter.  If incorrect, deduct score (number of guesses remaining), and display incorrect letter. After the user wins/loses, the game should automatically display another word.


var userGuess;//holds key user presses
var guessWord = ["Tardis", "Companion", "TimeLord", "Gallifrey", "Daleks", "Cybermen", "Sontaran"];
var lettersGuessed = [];//holds letters not in the word
var reveal = []; //changes the _ to letters
var guesses = 10;
var wins = 0;
var losses = 0;
//function initialize game with wins and score.  When the user starts
function scoreCount(){

      document.getElementById("score").innerHTML = " <li>Guesses: " + guesses + "</li>"+ "<li>Wins: " + wins + "</li><li> Losses: " + losses + "</li>";
      };
function reset(){
    return guesses = 10;
     }

//fuctions that starts the game
//function that will display the amount of letters in the word.  Will need to get the length of the word, and then create the same length of _ characters.
function startGame() {
      var word = (guessWord[Math.floor(Math.random() * guessWord.length)]); 
      
      console.log(word);
      var size = word.length;
      var revealed = " ";
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
      for (var j = 0; j < word.length; j++) {
            //if the letter is correct, add the letter to the reveal array at that position.     
            if (userGuess === word[j].toLowerCase()) {
                  reveal[j] = userGuess;
                  document.getElementById("blanks").innerHTML = reveal;
                  
                  }
            }
            
           if (word.toLowerCase().indexOf(userGuess) === -1) {
                  if (lettersGuessed.indexOf(userGuess) === -1) {

                  lettersGuessed.push(userGuess); 
                  
                  document.getElementById("guesses").innerHTML = lettersGuessed;
                  guesses--;
                  scoreCount();
                  }                
            }
            else if (reveal.indexOf(userGuess === -1 )){
                  totalLetters--;
                  scoreCount();
            }

            console.log(lettersGuessed);
            console.log(totalLetters);

            if (guesses === 0) {
            losses ++;
            scoreCount();
            document.getElementById("start").innerHTML = "Sorry, you ran out of guesses.  Here, try again!";
            guesses = reset();
            startGame();
            }
            else if (totalLetters <= 0) {
            wins ++;
             document.getElementById("start").innerHTML = "Alright! Good Job!  Here's another word for you to try!";
      
            reveal.length = 0;
            lettersGuessed.length = 0;
            guesses = reset();
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

 
 











