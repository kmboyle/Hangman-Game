
    //If correct, reveal letter.  If incorrect, deduct score (number of guesses remaining), and display incorrect letter. After the user wins/loses, the game should automatically display another word.

var userGuess;//holds key user presses
var guessWord = ["Tardis", "Companion", "TimeLord", "Gallifrey", "Daleks", "Cybermen", "Sontaran"];
var lettersGuessed = [];//holds letters not in the word
var reveal = []; //changes the _ to letters
var guesses = 10;
var wins = 0;
var losses = 0;
var counter = 0;
var inputElement = document.getElementById("hiddenInput");


//function initialize game with wins and score.  When the user starts
function scoreCount(){

      document.getElementById("score").innerHTML = " <li>Guesses: " + guesses + "</li>"+ "<li>Wins: " + wins + "</li><li> Losses: " + losses + "</li>";
      };
function reset(){
    return guesses = 10;
     };
function audio(word){
      document.getElementById("theme").src = "assets/images/theme.mp3";
      document.getElementById("winName").innerHTML = word;
};

function display(word){
      //to display a picture for each word correctly guessed
             if (word === guessWord[0]){
                  document.getElementById("who").src = "assets/images/TardisOne.jpg"; 
                  audio(word);
                  }
            else if (word === guessWord[1]) {
                  document.getElementById("who").src = "assets/images/companions.jpg"; 
                  audio(word);
                  }
            else if (word === guessWord[2]) {
                  document.getElementById("who").src = "assets/images/timelord.jpg";
                  audio(word);
                  }
            else if (word === guessWord[3]) {
                  document.getElementById("who").src = "assets/images/gallifrey.jpg";
                  audio(word); 
                  }
            else if (word === guessWord[4]) {
                  document.getElementById("who").src = "assets/images/Dalek.jpg"; 
                  audio(word);
                  }
             else if (word === guessWord[5]) {
                  document.getElementById("who").src = "assets/images/cybermen.jpg";
                  audio(word); 
                  }
            else if (word === guessWord[6]) {
                  document.getElementById("who").src = "assets/images/sontaran.jpg"; 
                  audio(word);
                  }

};
function startGame() {
      //randomly pick a word from the list of words
      var word = (guessWord[Math.floor(Math.random() * guessWord.length)]); 
      
      console.log(word);
      //count the letters in the word
      var size = word.length;

      //display the words letter count to the user in "_ _ ..." format. 
      for (var i = 0; i < size; i++) {
            reveal[i] = "_";
            }
      document.getElementById("blanks").innerHTML = 
      reveal.join(" ");
      document.getElementById("list").innerHTML = "letters already guessed";
    

      var totalLetters = size;

      document.onkeyup = function(e) {
            var userGuess = e.key;
            console.log(userGuess);
	    compare(userGuess, totalLetters, word, reveal);	
	}
   document.getElementById("help").onclick = function() { 
       hint(word);
   };
};
            
      //for loop to check the word for the players guessed letter  

function compare(userGuess, totalLetters, word, reveal){
	var correct = false;
	var remaining = false;
      //Evaluate users guessed letter for each letter's position.
      for (var j = 0; j < word.length; j++) {
            //if the letter is correct, add the letter to the reveal array at that position. Also      
            if (userGuess === word[j].toLowerCase()) {
                  reveal[j] = userGuess;
		  correct = true;
                  document.getElementById("blanks").innerHTML = reveal.join(" ");
                  }
	    if (reveal[j] === "_") {
		  remaining = true;
		  }
	}  
      //keep count of correct guesses and wins
	if (correct){
            totalLetters--;
            scoreCount();
	    if (!remaining){
            wins ++;
            display(word);
             document.getElementById("start").innerHTML = "Alright! Good Job!  Here's another word for you to try!  <br> Guess the word! You get 10 guesses.";      
            reveal.length = 0;
            lettersGuessed.length = 0;
	    document.getElementById("guesses").innerHTML = lettersGuessed;
       document.getElementById("hint").innerHTML = "";
            guesses = reset();
            scoreCount();
            startGame();
            }
	}
	//this checks to see if the letter is not in the word and if the letter is not already in their guessed list.  If both are true, deduct 1 guess, and add letter to the already guessed list.
  
     if (word.toLowerCase().indexOf(userGuess) === -1) {
         if (lettersGuessed.indexOf(userGuess) === -1) {

                  lettersGuessed.push(userGuess); 
                  
                  document.getElementById("guesses").innerHTML = lettersGuessed;
                  guesses--;
                  scoreCount();
                  }                
            }

            console.log(lettersGuessed);
            console.log(totalLetters);

            if (guesses === 0) {
            losses ++;
            document.getElementById("start").innerHTML = "Sorry, you ran out of guesses.  Here, try again!";
            reveal.length = 0;
            lettersGuessed.length = 0;
              document.getElementById("guesses").innerHTML = lettersGuessed;
            guesses = reset();
            document.getElementById("hint").innerHTML = "";
            scoreCount();
            startGame();
            }
         }

function hint(word) {
   if (word == guessWord[0]) {
         document.getElementById("hint").innerHTML = "Hello...? Hello...?";
         }
      else if (word == guessWord[1]) {
         document.getElementById("hint").innerHTML = "Somethings are just more fun together.";
      }
      else if (word == guessWord[2]) {
         document.getElementById("hint").innerHTML = "Two hearts are better than one.";
      }
      else if (word == guessWord[3]) {
         document.getElementById("hint").innerHTML = "Rocks and dust, dead before it's time.";
      }
      else if (word == guessWord[4]) {
         document.getElementById("hint").innerHTML = "Bent on conquest and destruction of inferior races.";
      }
     else if (word == guessWord[5]) {
         document.getElementById("hint").innerHTML = "Coldly logical and calculating, their emotions deleted.";
      }
     else if (word == guessWord[6]) {
         document.getElementById("hint").innerHTML = "Warrier race, ruthless and fearless of death.";
      }
};


document.onkeyup = function(event) {
      
        document.getElementById("start").innerHTML = "Guess the word! You get 10 guesses.";
        inputElement.focus(); 
         scoreCount();   
         startGame(); 
};

//Mobile Keyboard
document.getElementById("start help").addEventListener('click', function(){
    var inputElement = document.getElementById('hiddenInput');
    inputElement.style.visibility = 'visible'; // unhide the input
    inputElement.focus(); // focus on it so keyboard pops
    inputElement.style.visibility = 'hidden'; // hide it again
});



