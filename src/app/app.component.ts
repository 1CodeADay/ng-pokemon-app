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


  ngOnInit() {
    console.table(this.pokemonList); 
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;

    console.log(`The name of  your pokemon is ${this.pokemonList[index].name}`);
  }
}
