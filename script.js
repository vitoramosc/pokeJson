function pokemonSelecionado(pokemon){
    if(pokemon == 'Pikachu'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Pikachu/pikachu.gif" id="pokemonSprite">`
    }
    if(pokemon == 'Bulbassauro'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Bulbassaur/bulbasaur.gif" id="pokemonSprite">`
    }
    if(pokemon == 'Charmander'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Charmander/charmander.gif" id="pokemonSprite">`
    }
    if(pokemon == 'Squirtle'){
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Squirtle/squirtle.gif" id="pokemonSprite">`
    }
    atualizarStatus(pokemon)}


var pokemonEscolhido = {
    level: 1,
    percentualVida: 100,
    percentualSujeira: 0,
    percentualFome: 0,
}



function atualizarStatus(pokemon){
    botoesAcao.innerHTML =`
    <button class="botao" id="alimentar">Alimentar</button>
    <button class="botao" id="darBanho">Dar Banho</button>
    <button class="botao" id="brincar">Brincar</button>
    <button class="botao" id="passear">Batalhar</button>
    `
    atributos.innerHTML= `
    <div class="statusPokemon">
        <ul id="atributosPokemon">
            <b><li>${pokemon}</li></b>
            <li>Lvl &nbsp; <b>${pokemonEscolhido.level}</b></li>
        </ul>
    </div>
    <div class="atributos">
        <ul id="atributosPokemon2">
            <div class="percentuais">Vida:<li class="barra"><span id="percentualVida"></span></li></div>
            <div class="percentuais">Sujeira:<li class="barra"><span id="percentualSujeira"></span></li></div>
            <div class="percentuais">Fome:<li class="barra"><span id="percentualFome"></span></li></div>
        </ul>
    </div>`
}