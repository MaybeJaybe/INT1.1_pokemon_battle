const pokemonData = {
    "shinx": {
        maxHp: 45,
        attack: 65,
        defense: 34,
        //type: electric, damaged normally by normal, fire, water, grass.
        //dark type move
        bite: 60,
        // another possible move later could be: spark: 65, electric type move
        //not sure if i'll use these, but note: sp. attack=40, sp. defense=34, speed=45
    },
    "turtwig": {
        maxHp: 55,
        attack: 68,
        defense: 64,
        //type: grass, resistant to electric, damaged normally by dark.
        //note: sp. attack=45, sp. defense=55, speed=31 (shinx would attack first)
    },
    "chimchar": {
        maxHp: 44,
        attack: 58,
        defense: 44,
        //type: fire, damaged normally by dark and electric
        //note: sp. attack=58, sp. defense=44, speed=61 (chimchar would attack first)
    },
    "piplup": {
        maxHp: 53,
        attack: 51,
        defense: 53,
        //type: water, weak to electric, normal damage dark
        //note: sp. attack=61, sp. defense=56, speed=40 (shinx would attack first)
    },

    //figure out how to nest dictionaries, so user selecting pokemon and pokemon moves is separate
    const moveSet = {
        "turtwigMoves": {
            //normal type move
            "tackle": 35,
            //grass type move
            "razor leaf": 55,
        },
        "charmanderMoves": {
            //normal type move
            "scratch": 40,
            //fire type move
            "flame wheel": 60,
        },
        "piplupMoves": {
            //normal type move
            "pound": 40,
            //water type move
            "bubble beam": 65,
        },
    },
},
//note: could implement STAB, move thats same type as pokemon's type, damage increased by x1.5.

export default(pokemonData)