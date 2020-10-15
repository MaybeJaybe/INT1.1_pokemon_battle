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
        "moves": [
            //normal type move
            {
                name: "tackle",
                damage: 35,
                //for rand maybe needs 2 or above to hit
            },
            //grass type move
            {
                name: "razor leaf",
                damage: 55,
                //for rand maybe need 6 or above
            },
        ]
    },
    "chimchar": {
        maxHp: 44,
        attack: 58,
        defense: 44,
        //type: fire, damaged normally by dark and electric
        //note: sp. attack=58, sp. defense=44, speed=61 (chimchar would attack first)
        "moves": [
            {
                //normal type move
                name: "scratch",
                damage: 40,
            },
            {
                //fire type move
                name: "flame wheel",
                damage: 60,
            },
        ]
    },
    "piplup": {
        maxHp: 53,
        attack: 51,
        defense: 53,
        //type: water, weak to electric, normal damage dark
        //note: sp. attack=61, sp. defense=56, speed=40 (shinx would attack first)
        "moves": [
            {
                name: "pound",
                damage: 40,
            },
            {
                name: "bubble beam",
                damage: 65,
            },
        ]
    },
}
//note: could implement STAB, move thats same type as pokemon's type, damage increased by x1.5.

export default pokemonData