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
    //get pokemon
    const userPoke = pokemonSelect.value
    const enemyPokemon = pokemonData.pokemon.shinx
    const userPokemon = pokemonData.pokemon[userPoke]
    //get all enemy pokemon's data
    const enemyHp = enemyPokemon.maxHp
    const enemyAttack = enemyPokemon.attack 
    const enemyDefense = enemyPokemon.defense
    const enemyMove = pokemonData.pokemon.moves[enemyPokemon.moves[0]]
    const enemyPower = enemyMove.power 
    const enemyAccuracy = enemyMove.accuracy

    console.log("shinx",enemyPokemon.moves[0])
    console.log(enemyHp, enemyAttack, enemyDefense, enemyMove, enemyPower, enemyAccuracy)
    //get all user's chosen pokemon's data
    const userHp = userPokemon.maxHp
    const userAttack = userPokemon.attack
    const userDefense = userPokemon.defense
    const userMove = pokemonData.pokemon.moves[userMoveSelect.value]
    const userPower = userMove.power
    const userAccuracy = userMove.accuracy

    console.log(userPoke, userMoveSelect.value)
    console.log(userHp, userAttack, userDefense, userMove, userPower, userAccuracy)

    // figure out the formulas pls
    //this is the basic math: damage = power(of the move) x attack(stat of attacking pokemon) / defense(stat of defending pokemon) all divided by 50
    //if you implement stab or type advantage, modifier = stab x type
    //and then the full equation would be damage = (power x attack / damage) x modifier
    //random number from 0 to 9, make battles dynamic 
    // var randNum = (getRandomInt(10));

    // shinx's damage 
    // const enemyDamage = (enemyPower * enemyAttack / userDefense * 0.5) + 1
    // console.log(enemyDamage)

    // user pokemon's damage
    // const userDamage = (userPower * userAttack / enemyDefense * 0.5) + 1
    // console.log(userDamage)

    // start health at specific pokemon's max health (unless user's chosen pokemon had an input that was less than its max health)

    //shinx attacks first

    //calculate user hp, see if shinx attack took user hp to <= 0, if not, go to user

    //if user pokemon hp <= 0, display popup saying "you lost"

    //user pokemon attacks

    //calculate shinx hp, see if attack put shinx hp to <= 0 if not, go to attack button

    //user inputs with an attack button to continue

    //if shinx hp is <= 0, display popup saying "you won"
}
battle()