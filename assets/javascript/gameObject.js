
var hangMan = {

userGuess: " ",//holds key user presses
guessWord: ["Tardis", "Companion", "TimeLord", "Gallifrey", "Daleks", "Cybermen", "Sontaran"],
lettersGuessed: [],//holds letters not in the word
reveal: [], //changes the _ to letters
guesses: 10,
wins: 0,
losses: 0,
word: " ",
totalLetters: 0, 	
startGame: function() {

	 document.getElementById("start").innerHTML = "Guess the word! You get 10 guesses.";

         hangMan.scoreCount(); 

         //randomly pick a word from the list of words
      this.word = (this.guessWord[Math.floor(Math.random() * this.guessWord.length)]); 
      
      console.log(this.word);
      //count the letters in the word
      var size = this.word.length;

      //display the words letter count to the user in "_ _ ..." format. 
      for (var i = 0; i < size; i++) {
            this.reveal[i] = "_";
            }
      document.getElementById("blanks").innerHTML = 
      this.reveal.join(" ");
      document.getElementById("list").innerHTML = "letters already guessed";
       this.totalLetters = this.size;

      document.onkeyup = function(e) {
            var userGuess = e.key;
            console.log(this.userGuess);
	    hangMan.compare(this.userGuess, this.totalLetters, this.word, this.reveal, this.lettersGuessed);	
	}
	   },
compare: function(userGuess, totalLetters, word, reveal, lettersGuessed) {
	var correct = false;
	var remaining = false;
      //Evaluate users guessed letter for each letter's position.
      for (var j = 0; j < this.word.length; j++) {
            //if the letter is correct, add the letter to the reveal array at that position. Also      
            if (userGuess === this.word[j].toLowerCase()) {
                  this.reveal[j] = userGuess;
		  correct = true;
                  document.getElementById("blanks").innerHTML = this.reveal.join(" ");
                  }
	    if (this.reveal[j] === "_") {
		  remaining = true;
		  }
	}  
      //keep count of correct guesses and wins
	if (correct){
            this.totalLetters--;
            hangMan.scoreCount();
	    if (!remaining){
            this.wins ++;
            display(this.word);
             document.getElementById("start").innerHTML = "Alright! Good Job!  Here's another word for you to try!  <br> Guess the word! You get 10 guesses.";
            this.reveal.length = 0;
            this.lettersGuessed.length = 0;
	    document.getElementById("guesses").innerHTML = this.lettersGuessed;
            this.guesses = hangman.guesses;
            hangMan.scoreCount();
            hangMan.startGame();
            }
	}
	//this checks to see if the letter is not in the word and if the letter is not already in their guessed list.  If both are true, deduct 1 guess, and add letter to the already guessed list.
  
     if (this.word.toLowerCase().indexOf(userGuess) === -1) {
         if (this.lettersGuessed.indexOf(userGuess) === -1) {

                  this.lettersGuessed.push(userGuess); 
                  
                  document.getElementById("guesses").innerHTML = this.lettersGuessed;
                  this.guesses--;
                  hangMan.scoreCount();
                  console.log(this.lettersGuessed);
                  }  

            }

            console.log(this.lettersGuessed);
            console.log(this.totalLetters);

            if (this.guesses === 0) {
            this.losses ++;
            scoreCount();
            document.getElementById("start").innerHTML = "Sorry, you ran out of guesses.  Here, try again!";
            this.reveal.length = 0;
            this.lettersGuessed.length = 0;
              document.getElementById("guesses").innerHTML = this.lettersGuessed;
            this.guesses = hangman.guesses;
            hangMan.startGame();
            }
		},
scoreCount: function() {
	   document.getElementById("score").innerHTML = " <li>Guesses: " + this.guesses + "</li>"+ "<li>Wins: " + this.wins + "</li><li> Losses: " + this.losses + "</li>";
			},
audio: function(word){
      document.getElementById("theme").src = "assets/images/theme.mp3";
      document.getElementById("winName").innerHTML = word;
		},
display: function(word){
      //to display a picture for each word correctly guessed
             if (word === this.guessWord[0]){
                  document.getElementById("who").src = "assets/images/TardisOne.jpg"; 
                  audio(word);
                  }
            else if (word === this.guessWord[1]) {
                  document.getElementById("who").src = "assets/images/companions.jpg"; 
                  audio(word);
                  }
            else if (word === this.guessWord[2]) {
                  document.getElementById("who").src = "assets/images/timelord.jpg";
                  audio(word);
                  }
            else if (word === this.guessWord[3]) {
                  document.getElementById("who").src = "assets/images/gallifrey.jpg";
                  audio(word); 
                  }
            else if (word === this.guessWord[4]) {
                  document.getElementById("who").src = "assets/images/Dalek.jpg"; 
                  audio(word);
                  }
             else if (word === this.guessWord[5]) {
                  document.getElementById("who").src = "assets/images/cybermen.jpg";
                  audio(word); 
                  }
            else if (word === this.guessWord[6]) {
                  document.getElementById("who").src = "assets/images/sontaran.jpg"; 
                  audio(word);
                  }
              }
}
      
        

   document.onkeyup = function(e) {
   	       hangMan.startGame();	
		}