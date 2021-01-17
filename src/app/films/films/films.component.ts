import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: any[] = [];
  filmsSubscription: Subscription;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    // this.films = this.filmsService.getFilms();
    this.filmsSubscription = this.filmsService.getFilmsSubject().subscribe({
      next: films => {
        this.films = films;
        console.log('films:', films);
      },
      error: err => console.log(err),
      complete: () => console.log('Done')
    });
    this.filmsService.emitFilmsSubject();
  }

  deleteFilm(movieId) {
    this.filmsService.deletFilm(movieId);
  }

  ngOnDestroy(): void {
    this.filmsSubscription.unsubscribe();
  }
}
