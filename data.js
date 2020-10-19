const pokemonData = {
    pokemon: {
        shinx: {
            name: "Shinx",
            maxHp: 45,
            attack: 65,
            defense: 34,
            moves: ["bite",]
            //type: electric, damaged normally by normal, fire, water, grass.

            // another possible move later could be: spark: 65, electric type move
            //not sure if i'll use these, but note: sp. attack=40, sp. defense=34, speed=45
        },
        turtwig: {
            name: "Turtwig",
            maxHp: 55,
            attack: 68,
            defense: 64,
            moves: ["tackle", "razor leaf",]
            //type: grass, resistant to electric, damaged normally by dark.
            //note: sp. attack=45, sp. defense=55, speed=31 (shinx would attack first)
              
            //since accuracy is 95, you want the attack to hit so randNum from 0-9 needs to be > 1... right?
            //for battle function, need chance to hit in here for each move
        },
        chimchar: {
            name: "Chimchar",
            maxHp: 44,
            attack: 58,
            defense: 44,
            moves: ["scratch", "flame wheel",]
            //type: fire, damaged normally by dark and electric
            //note: sp. attack=58, sp. defense=44, speed=61 (chimchar would attack first)
        },
        piplup: {
            name: "Piplup",
            maxHp: 53,
            attack: 51,
            defense: 53,
            moves: ["pound", "bubble beam",]
            //type: water, weak to electric, normal damage dark
            //note: sp. attack=61, sp. defense=56, speed=40 (shinx would attack first)
        },

        //for the accuracy, using rand if its 65 accuracy you need 0-6... or 3 or above? idk to hit.

        moves: {
            //dark type move
            "bite": {
                power: 60,
                accuracy: 100,
            },
            "tackle": {
                //normal type move
                power: 35,
                accuracy: 100,
            },
            "razor leaf": {
                //grass type move
                power: 55,
                accuracy: 65,
            },
            "scratch": {
                //normal type move
                power: 40,
                accuracy: 100,
            },
            "flame wheel": {
                //fire type move
                power: 60,
                accuracy: 85,
            },
            "pound": {
                //normal type move
                power: 40,
                accuracy: 100,
            },
            "bubble beam": {
                //water type move
                power: 65,
                accuracy: 75,
            },
        },
    }
}
//note: could implement STAB, move thats same type as pokemon's type, damage increased by x1.5.

export default pokemonData