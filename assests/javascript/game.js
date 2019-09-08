// Andre Pseudo Code CLAP!!
// create array for different pokemon
// use the array of pokemon to cycle through a function
// make a function to use the pokemon names as a set amount of letters to be pressed
// have a picture of a guessed pokemon appear
// also include an mp3 with the correct guess
// try and make a starting image for each pokemon to be guessed
// create a function to store variable values
// have game restart through array without refreshing the page
// console.log as much as possible to check functions working properly

var pokemon = ["charizard", "snorlax", "pikachu", "ponyta", "machoke", "meowth", "psyduck"]

var randomPokemon = "";
var totalLetters = [];
var blanks = 0;
var blanksPlusCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function game() {
    randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    totalLetters = randomPokemon.split("");
    blanks = totalLetters.length;
    for (var i = 0; i < array.length; i++) {
        blanksPlusCorrect.push("_");   
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
    // console.log()
}
var charizard = document.getElementById("charizard");
var snorlax = document.getElementById("snorlax");
var pikachu = document.getElementById("pikachu");
var ponyta = document.getElementById("ponyta");
var machoke = document.getElementById("machoke");
var meowth = document.getElementById("meowth");
var psyduck = document.getElementById("psyduck");

function audio() {
    if (randomPokemon === pokemon[0]) {
        charizard.play();
        document.getElementById("startimg").src ="./assests/images/charizard.gif";
    }
    else if (randomPokemon === pokemon[1]) {
        snorlax.play();
        document.getElementById("startimg").src ="./assests/images/snorlax.gif";
    }
    else if (randomPokemon === pokemon[2]) {
        pikachu.play();
        document.getElementById("startimg").src ="./assests/images/pikachu.gif";
    }
    else if (randomPokemon === pokemon[3]) {
        ponyta.play();
        document.getElementById("startimg").src ="./assests/images/ponyta.gif";
    }
    else if (randomPokemon === pokemon[4]) {
        machoke.play();
        document.getElementById("startimg").src ="./assests/images/machoke.gif";
    }
    else if (randomPokemon === pokemon[5]) {
        meowth.play();
        document.getElementById("startimg").src ="./assests/images/meowth.gif";
    }
    else if (randomPokemon === pokemon[6]) {
        psyduck.play();
        document.getElementById("startimg").src ="./assests/images/psyduck.gif";
    }
}
function reset () {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksPlusCorrect = [];
    game ()
}
function letterChecker(letter) {
    var wordLetters = false;
    for (var i = 0; i < blanks; i++) {
       if (randomPokemon[i] == letter) {
           wordLetters = true;
       }
        
    }
    if (wordLetters) {
        for (let i = 0; i < blanks; i++) {
            if (randomPokemon[i] == letter) {
                blanksPlusCorrect[i] = letter;
            }
            
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    // console.log(blanksPlusCorrect);
}
function final() {
    
}