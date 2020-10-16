import pokemonData from "/data.js"
console.log(pokemonData)

const pokemonSelect = document.querySelector("#pokemon-select")
const health = document.querySelector("#health")
const moveSelect = document.querySelector("#battle-choice")

pokemonSelect.addEventListener('change', updateMoves)
moveSelect.addEventListener('change', battle)

const userMoveSelect = document.getElementById("move-choice")

function updateMoves () {
    //figure out which pokemon is selected
    const userPoke = pokemonSelect.value
    console.log(userPoke)
    //display selected pokemon and retrieve its stats
    const chosenPokemon = pokemonData.pokemon[userPoke]
    console.log(chosenPokemon)
    const moveList = chosenPokemon.moves
    console.log(moveList)
    //add new option to dropdown for each move

    userMoveSelect.innerHTML = ""
    //loop to display each move from selected pokemon's moveset
    for (let i = 0; i < moveList.length; i++) {
        const option = document.createElement("option");
        option.text = moveList[i];
        userMoveSelect.add(option);
    }
}
updateMoves()
//random number between 0 and 9 to roll if attack hits or misses for later
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
function battle() {


// start health at specific pokemon's max health (unless user's chosen pokemon had an input that was less than its max health)

//shinx attacks first


//calculate new hp 

    //this is the basic math: damage = power(of the move) x attack(stat of attacking pokemon) / defense(stat of defending pokemon) all divided by 50
    //if you implement stab or type advantage, modifier = stab x type
    //and then the full equation would be damage = (power x attack / damage) x modifier
    //random number from 0 to 9, make battles dynamic 
    // var randNum = (getRandomInt(10));

    //first, see if shinx's initial attack fainted player, if not, go to player etc 
    //for every instance, need battle loop

    //possibly make both just attack at the same time, if both pokemon faint then you tie?
}
battle()