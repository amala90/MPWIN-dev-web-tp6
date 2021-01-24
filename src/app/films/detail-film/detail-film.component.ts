import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {


  id: any;
  film: any;
  constructor(private route: ActivatedRoute, private filmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.film = this.filmsService.getFilmById(this.id);
    this.filmsService.setDetailFilm(this.film);
  }

  onSubmit(f: NgForm) {
    this.filmsService.updateFilm(f.value); // appel a la methode update pour modifier le filmm
    this.router.navigate(['films']); // naviger vers la page des films en utilisant le Router
  }

}