import pokemonData from "/data.js"
console.log(pokemonData)

const pokemonSelect = document.querySelector("#pokemon-select")
const health = document.querySelector("#health")
const moveSelect = document.querySelector("#battle-choice")

pokemonSelect.addEventListener('change', updateMoves)
moveSelect.addEventListener('change', battle)

function updateMoves () {
    var dropdown = document.getElementById("move-choice")
    //figure out which pokemon is selected
    //get json object for that pokemon, extract from imported data

    //get moves as an array
    // var moveOptions = pokemonData.moves
    document.getElementById("moves").innerHTML = pokemonData;
    //do for loop for the pokemon's move
    //add new option to dropdown for each move
    var option = document.createElement("option");
    option.text = "tackle";
    dropdown.add(option);


    //for ("turtwig" in pokemonData) {
    //}


    //this is the basic math: damage = power(of the move) x attack(stat of attacking pokemon) / defense(stat of defending pokemon) all divided by 50
    //if you implement stab or type advantage, modifier = stab x type
    //and then the full equation would be damage = (power x attack / damage) x modifier
    //random number from 0 to 9, make battles dynamic 



}
function battle() {
    const pokemon = pokemonSelect.value
// start health at specific pokemon's max health (unless user's chosen pokemon had an input that was less than its max health)

//shinx attacks first

}
battle()