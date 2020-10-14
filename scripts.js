const pokemonSelect = document.querySelector("#pokemon-select")
const health = document.querySelector("#health")
const moveSelect = document.querySelector("#battle-choice")

pokemonSelect.addEventListener('change', battle)
moveSelect.addEventListener('change', battle)

function battle() {
    const pokemon = pokemonSelect.value
// start health at specific pokemon's max health (unless user's chosen pokemon had an input that was less than its max health)

//shinx attacks first

}
battle()