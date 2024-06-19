import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {PokemonDataService} from 'src/app/common/services/pokemon-data.service';
import {PokemonListComponent} from 'src/app/pokemon/pokemon-list/pokemon-list.component';
import {PokemonService} from 'src/app/pokemon/pokemon-list/pokemon.service';

@NgModule({
  declarations: [
    EnviromentComponent,
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
    PokemonDataService,
    PokemonService,
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
