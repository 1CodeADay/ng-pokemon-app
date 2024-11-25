import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;



  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)

    if (pokemon) {
      this.pokemonSelected = pokemon;
      console.log(`The name of  your pokemon is ${pokemon.name}`);

    }
    else {
      this.pokemonSelected = pokemon;
      console.log(`No pokemon found`);
    }

  }

}
