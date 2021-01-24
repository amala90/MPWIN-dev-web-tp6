import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailFilmComponent,
    FilmsComponent,
    AddFilmComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddFilmComponent
  ]
})
export class FilmsModule { }
