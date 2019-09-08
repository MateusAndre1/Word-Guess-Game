// Andre Pseudo Code CLAP!!
// create array for different pokemon
// use the array of pokemon to cycle through a function
// make a function to use the pokemon names as a set amount of letters to be pressed
// try and make a starting image for each pokemon to be guessed
// create a function to store variable values
// have game move through array without restarting the page

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
    
}