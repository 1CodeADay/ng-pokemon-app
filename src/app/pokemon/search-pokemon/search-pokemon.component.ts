import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',

})
export class SearchPokemonComponent implements OnInit {

    searchTerms = new Subject<string>();
    pokemons$: Observable<Pokemon[]>;

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) { }

    ngOnInit(): void {
        this.pokemons$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
            debounceTime(300),
        // ignore new term if same as previous term
            distinctUntilChanged(),
        // switch to new search observable each time the term changes
            switchMap((term) => this.pokemonService.searchPokemonList(term)),
        );
    }

    search(term: string){
        this.searchTerms.next(term);
    }

    goToDetail(pokemon: Pokemon) {
        const link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}
