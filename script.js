function pokemonSelecionado(pokemon) {
    if (pokemon == 'Pikachu') {
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Pikachu/pikachu.gif" id="pokemonSprite">`
    }
    if (pokemon == 'Bulbassauro') {
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Bulbassaur/bulbasaur.gif" id="pokemonSprite">`
    }
    if (pokemon == 'Charmander') {
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Charmander/charmander.gif" id="pokemonSprite">`
    }
    if (pokemon == 'Squirtle') {
        pokemonInicial.innerHTML = `<img src="src/Pokemons/Squirtle/squirtle.gif" id="pokemonSprite">`

    } 

    atualizarStatus(pokemon);
    
    
}


var pokemonEscolhido = {
    level: 1,
    percentualVida: 100,
    percentualSujeira: 0,
    percentualFome: 99,
    alimentar: function () {
        if (this.percentualFome > 0 && this.percentualFome <= 100) {
            this.percentualFome -= 10;
            document.getElementById("percentualFome").style.width = this.percentualFome +'%';
        }
    },
    banhar: function () {
        if (this.percentualSujeira > 0 && this.percentualSujeira <= 100) {
            this.percentualSujeira -= 10;
            document.getElementById("percentualSujeira").style.width = this.percentualSujeira +'%';
        }
    },
    treinar: function () {
        if (this.percentualVida > 0) {
            this.percentualVida -= 10;
            this.percentualSujeira += 10;
            this.percentualFome += 10;
            document.getElementById("percentualSujeira").style.width = this.percentualSujeira +'%';
            document.getElementById("percentualVida").style.width = this.percentualVida +'%';
            document.getElementById("percentualFome").style.width = this.percentualFome +'%';
            if (this.percentualFome >=100 || this.percentualVida <=0 || this.percentualSujeira >=100){
                alert('O pokemin morreu')
            }
        }
    },
    brincar: function () {
        if(this.percentualSujeira < 100) {
            this.percentualSujeira += 30;
            document.getElementById("percentualSujeira").style.width = this.percentualSujeira +'%';

        }
    }
}

function atualizarStatus(pokemon) {
    botoesAcao.innerHTML = `
    <button class="botao" id="alimentar" onclick="pokemonEscolhido.alimentar()">Alimentar</button>
    <button class="botao" id="darBanho" onclick="pokemonEscolhido.banhar()">Dar Banho</button>
    <button class="botao" id="brincar" onclick="pokemonEscolhido.brincar()">Brincar</button>
    <button class="botao" id="passear" onclick="pokemonEscolhido.treinar()">Batalhar</button>
    `
    atributos.innerHTML = `
    <div class="statusPokemon">
        <ul id="atributosPokemon">
            <b><li>${pokemon}</li></b>
            <li>Lvl &nbsp; <b>${pokemonEscolhido.level}</b></li>
        </ul>
    </div>
    <div class="atributos">
        <ul id="atributosPokemon2">
            <div class="percentuais">Vida:<li class="barra"><span id="percentualVida" style="width: 100%;"></span></li></div>
            <div class="percentuais">Sujeira:<li class="barra"><span id="percentualSujeira" style="width: 0%;"></span></li></div>
            <div class="percentuais">Fome:<li class="barra"><span id="percentualFome" style="width: 99%;"></span></li></div>
        </ul>
    </div>`
}