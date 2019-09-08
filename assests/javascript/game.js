// Andre Pseudo Code CLAP!!
// create array for different pokemon
// use the array of pokemon to cycle through a function
// make a function to use the pokemon names as a set amount of letters to be pressed
// try and make a starting image for each pokemon to be guessed
// create a function to store variable values
// have game move through array without restarting the page
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
    console.log(randomPokemon)
}