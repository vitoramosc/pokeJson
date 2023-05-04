function pokemonSelecionado(pokemon){
    if(pokemon == 'pikachu'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Bulbassaur/bulbasaur.gif" id="pokemonSprite">`
    }
    if(pokemon == 'Bulbassauro'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Bulbassaur/bulbasaur.gif" id="pokemonSprite">`
    }
    if(pokemon == 'Charmander'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Bulbassaur/bulbasaur.gif" id="pokemonSprite">`
    }
    if(pokemon == 'Squirtle'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Bulbassaur/bulbasaur.gif" id="pokemonSprite">`
    }
    botoesAcao.innerHTML =`
    <button class="botao" id="alimentar">Alimentar</button>
    <button class="botao" id="darBanho">Dar Banho</button>
    <button class="botao" id="brincar">Brincar</button>
    <button class="botao" id="passear">Batalhar</button>
    `
}

