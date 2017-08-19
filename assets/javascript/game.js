// pseudo code

// Declare variables(player & comp)(Objects and values)
// Declare variables for alphabets array/ Artist array and Image array(objects and values)
// some how make computer choose random artist
// player selects one of alphabets, whic updates guessed letter and also updates
// wins and how many attempts left
// code must able to read an event using onkeyup
// need algorithm to declare if player is winner or loser
// need algorithm to reset game.
//need algorithm to change images depending on the words used
//need to play music depending on the artist choice made, so need to create music object.
//logic to 

// Declaring variables and initial values
var wins = 0;
var losses = 0;
var pGuesses = 10; 
var pGuessRemain = 10;
var pGuessUsed = [];
var artistToGuess = null;
var currentBand = [];


 document.getElementById("currentWord").innerHTML = "Current Word: _ _ _ _ _ _";
 // // Declare variables for alphabets array
var pcLetterDb = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m','n','o','p','q','r','s','t',
'u','v','w','x','y','z'];

//Declare variable for artistDb
var artistDb = ['ArREhman','Michael','Beetles','Ravi','Zakir','ChainSmokers',
'Drake'];

var artistImageDb = {
	ArREhman:"assets/images/ar.jpg",
	Michael:"assets/images/Michael.jpg",
	Beetles:"assets/images/Beatles.jpg",
	Ravi:"assets/images/ravi.jpg",
	Zakir:"assets/images/Zakhir.jpg",
	ChainSmokers:"assets/images/ChainSmokers.jpg"
};

//Before start of game, put memory in pc
var curBandDocString = "";
var pcAlphDB = pcLetterDb[Math.floor(Math.random() * pcLetterDb.length)];
var artist = artistDb[Math.floor(Math.random() * artistDb.length)];
// var bandIndex = artistDb[Math.floor((Math.random() * 20) + 1)];
// this.currentBand = this.artistDb[bandIndex - 1];

// console.log(this.currentBand)
// for(var i = 0; i< ranWord.length; i++){
// 	ranWord[i] = "_ ";
// }
// this.emptyWords.push('_');

// function printRanWord(){
// 	var f = document.currentword;
// 	var b = f.elments[""]
// }

//update win, loose, playerguessremain, playedguessused, pc, player on playing

var updatePGuessRemain = function(){
	 document.querySelector('#remain').innerHTML = "Number of Guesses Remaining: " + pGuessRemain;
	//console.log(reh); - to check value of updatePGuessRemain.
};

var updatePGuessUsed = function(){
	document.querySelector('#used').innerHTML = "Letter Already Guessed: " + pGuessUsed.join(", ");
	//console.log(kuch); -- gets value for var if its assigned value is docu.query
};

var updateArtistToGuess = function(){
	if(this.artistToGuess = this.artistDb[Math.floor(Math.random() * this.artistDb.length)]){
	 // document.getElementById("currentWord").innerHTML = this.curBandDocString;
	 for(var j = 0; j < artistToGuess.length; j++){ 

	 document.querySelector('#currentWord').innerHTML = "Current Word: " + artistToGuess.replace(/.{1}/g, "_ ");
	}	
}
};
var updateUnderScores= function(){
document.onkeyup = function(event){
	pGuessRemain--;
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase(); // also convert keystroke from any case to lower case.
	console.log(playerGuess);
	
			// var x = artistToGuess.indexOf(playerGuess);
		}
		};


//Now reseting the game

var resetGame = function(){
	pGuesses = 10;
	pGuessRemain = 10;
	pGuessUsed = [];

	updatePGuessRemain();
	updatePGuessUsed();
	updateArtistToGuess();
}
	updatePGuessRemain();
	updateArtistToGuess();

var resetWholeGame = function(){
	wins = 0;
	losses = 0;
	pGuesses = 10; 
	pGuessRemain = 10;
	pGuessUsed = [];
	artistToGuess = null;
	document.querySelector('#win').innerHTML = "Wins: " + "";
	document.querySelector('#lost').innerHTML = "Losses: " + "";
}



//on pressing any key
document.onkeyup = function(event){
	pGuessRemain--;
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase(); // also convert keystroke from any case to lower case.
	//console.log(playerGuess);
	// var ranAlpha = "";
	pGuessUsed.push(playerGuess);
	updatePGuessRemain();
	updatePGuessUsed();
	// if (pGuessUsed == pcLetterDb){
		
	if (pGuessRemain> 0){

            if (playerGuess == artistToGuess){

                wins++;

                document.querySelector('#win').innerHTML = "Wins: " + wins;

                // alert("Yes, you have psychic powers similar to mine!");

                resetGame();

            }

        }else if(pGuessRemain == 0){

            // Then we will loss and we'll update the html to display the loss 

            losses++;

            document.querySelector('#lost').innerHTML = "Losses: " + losses;

            // alert("May be as of now, you do not have psychic powers like mine, please try again?");

            // Then we'll call the reset. 

            resetGame();

}

if(wins === 5){
	alert("You are winner!!!");
	resetWholeGame();
}
if(losses === 5){
	alert("You lost the game!")
	resetWholeGame();
}

for(var t = 0; t < artistToGuess.length; t++){
		if(artistToGuess[t] == playerGuess){
			// var x = artistToGuess.indexOf(playerGuess);artistToGuess[t] == playerGuess;
			console.log(artistToGuess[t]);
}
}
	
	updateUnderScores();

};


