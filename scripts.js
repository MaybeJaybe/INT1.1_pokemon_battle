import pokemonData from "/data.js"
console.log(pokemonData)

const pokemonSelect = document.querySelector("#pokemon-select")
const health = document.querySelector("#health")
const moveSelect = document.querySelector("#battle-choice")
const attackButton = document.querySelector("#attackTrigger")
const userMoveSelect = document.getElementById("move-choice")

pokemonSelect.addEventListener('change', selectPokemon)
attackButton.addEventListener('click', battle)

const againButton = document.createElement("button")


// ---------------------------
console.log("outside declarations")
// let choosingPokemon = pokemonSelect.value
// console.log(choosingPokemon)
let chosenPokemon = pokemonSelect.value
let enemyPokemon = "shinx"
let enemyHp = pokemonData.pokemon[enemyPokemon].maxHp
let userHp = pokemonData.pokemon[chosenPokemon].maxHp


// ---------------------------
function selectPokemon () {
    console.log("*selectPokemon function*")
    //add pokemon's name as class name to the element
    //SUPER USEFUL 
    //removes the pokemon not chosen by the user
    document.body.classList.remove(chosenPokemon)

    //figure out which pokemon is selected
    chosenPokemon = pokemonSelect.value
    //add sprite of chosen pokemon
    document.body.classList.add(chosenPokemon)
    //declaring chosen pokemon with its current hp to keep track of hp during battle
    userHp = pokemonData.pokemon[chosenPokemon].maxHp
    //display selected pokemon and retrieve its stats
    enemyHp = pokemonData.pokemon[enemyPokemon].maxHp

    const moveList = pokemonData.pokemon[chosenPokemon].moves


    //add new option to dropdown for each move
    userMoveSelect.innerHTML = ""
    //loop to display each move from selected pokemon's moveset
    for (let i = 0; i < moveList.length; i++) {
        const option = document.createElement("option");
        option.text = moveList[i];
        userMoveSelect.add(option);
    }
    console.log(enemyPokemon)
    console.log("Hp")
    console.log(enemyHp)
    console.log(chosenPokemon)
    console.log("Hp")
    console.log(userHp)
}
selectPokemon()

// ---------------------------
//random number between 0 and 9 to roll if attack hits or misses for later
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// --------------------------
function battle() {
    console.log("*battle function*")
    //is the hp of either player less than 0? 
    if (enemyHp || userHp < 0) {
        print("message somebody won/lost")
        return;
    }
    //get all enemy pokemon's data
    const enemyAttack = pokemonData.pokemon[enemyPokemon].attack 
    const enemyDefense = pokemonData.pokemon[enemyPokemon].defense
    const enemyMove = pokemonData.pokemon.moves[pokemonData.pokemon[enemyPokemon].moves[0]]
    const enemyPower = enemyMove.power 
    const enemyAccuracy = enemyMove.accuracy

    console.log(enemyPokemon)
    console.log("HP:", enemyHp)
    console.log("Attack:", enemyAttack)
    console.log("Defense:", enemyDefense)
    console.log("Move:", enemyMove)
    console.log("Power:", enemyPower)
    console.log("Accuracy:", enemyAccuracy)
        
    console.log("")

    //get all user's chosen pokemon's data
    const userAttack = pokemonData.pokemon[chosenPokemon].attack
    const userDefense = pokemonData.pokemon[chosenPokemon].defense
    const userMove = pokemonData.pokemon.moves[userMoveSelect.value]
    //still doesnt change moves tho
    //instead of moves for enemyPokemon.moves[0], need enemyPokemon.moves[moveSelect]so user input affects it
    //was [userMoveSelect.value]
    const userPower = userMove.power
    const userAccuracy = userMove.accuracy
    
    console.log(chosenPokemon)
    console.log(userMoveSelect.value)
    console.log("Hp:", userHp)
    console.log("Attack:", userAttack)
    console.log("Defense:", userDefense)
    console.log("Move:", userMove)
    console.log("Power:", userPower)
    console.log("Accuracy:", userAccuracy)

    // shinx's damage 
    const enemyDamage = (enemyPower * enemyAttack / userDefense * 0.5) + 2
    console.log(enemyDamage)

    // user pokemon's damage
    const userDamage = (userPower * userAttack / enemyDefense * 0.5) + 2
    console.log(userDamage)
    //if you implement stab or type advantage, modifier = stab x type
    //and then the full equation would be damage = (power x attack / damage) x modifier
    //random number from 0 to 9, make battles dynamic 
    // var randNum = (getRandomInt(10));

    //shinx attacks first
    //calculate user hp


        userHp -= enemyDamage
        console.log("**********")
        console.log(userHp)

    //user pokemon attacks

    //calculate shinx hp

        enemyHp -= userDamage
        console.log(enemyHp)

    //user inputs with an attack button to continue
    //i know this will go even if the battle should be continuing...
    againButton.innerHTML = "Try again?"
    //somethingsomethingDiv.appendChild(againButton);
}