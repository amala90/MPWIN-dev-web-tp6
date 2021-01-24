import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [

  { path: '', component: FilmsComponent },
  { path: 'add-film', component: AddFilmComponent },
  { path: 'details/:id', component: DetailFilmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
