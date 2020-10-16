import pokemonData from "/data.js"
console.log(pokemonData)

const pokemonSelect = document.querySelector("#pokemon-select")
const health = document.querySelector("#health")
const moveSelect = document.querySelector("#battle-choice")
const attackButton = document.querySelector("#attackTrigger")
const userMoveSelect = document.getElementById("move-choice")

pokemonSelect.addEventListener('change', updateMoves)
// moveSelect.addEventListener('change', battle) (could trigger battle instead of button)
attackButton.addEventListener('click', battle)

// ---------------------------
const enemy = {
    name: "shinx",
    currentHp: 45,
}
const user = {
    
}

// ---------------------------
function updateMoves () {
    console.log("*updateMoves function*")
    //figure out which pokemon is selected
    const userPoke = pokemonSelect.value
    console.log(userPoke)
    //declaring chosen pokemon with its current hp to keep track of hp during battle
    user.name = userPoke
    user.currentHp = pokemonData.pokemon.shinx.maxHp
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
// ---------------------------
//random number between 0 and 9 to roll if attack hits or misses for later
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// --------------------------
function battle() {
    console.log("*battle function*")
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



    //AFTER USER CLICKS ATTACK THE FIRST TIME ONLY
    //lock pokemon input, so they can only select the moves for that specific pokemon until the battle ends!!



    // shinx's damage 
    const enemyDamage = (enemyPower * enemyAttack / userDefense * 0.5) + 1
    console.log(enemyDamage)

    // user pokemon's damage
    const userDamage = (userPower * userAttack / enemyDefense * 0.5) + 1
    console.log(userDamage)

    // start health at specific pokemon's max health (unless user's chosen pokemon had an input that was less than its max health)

    //shinx attacks first
    //calculate user hp
    currentHp -= enemyDamage
    if (currentHp <= 0) {
        //stop battle
        //display popup saying "you lost"
    } else {
        //continue battle, user chooses move
    }
    //user pokemon attacks

    //calculate shinx hp
    currentEnemyHp -= userDamage
    if (currentEnemyHp <= 0) {
        //stop battle
        //display popup saying "you won"
    } else {
        //continue battle
    }
    //user inputs with an attack button to continue
}