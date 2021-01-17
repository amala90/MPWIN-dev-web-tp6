import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private films = [
    {
      movieId: 1,
      movieName: "The Hangover 1",
      movieDescription: "Trois jeunes hommes cherchent un ami qui a disparu au cours d\'une super fête àLas Vegas.",

    },
    // film 1

    {
      movieId: 2,
      movieName: "The Hangover 2",
      movieDescription: "Phil, Stu, Alan et Doug s'offrent un voyage exotique en Thaïlande, à l'occasion du mariage deStu."

    },
    // film 2

    {
      movieId: 3,
      movieName: "The Hangover 3",
      movieDescription: " Cela fait deux ans maintenant que Phil, tu, Alan et Doug sont revenus de Thaïlande. Tout le monde a bien négocié le retour mais Alan, qui a cessé de prendre ses médicaments, peine à trouver son équilibre.",

    }, // film 3

  ];

  filmsSubject = new Subject<any[]>();
  filmDetail$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  emitFilmsSubject() {
    this.filmsSubject.next(this.films);
  }

  getFilmsSubject() {
    return this.filmsSubject;
  }
  getFilms() {
    return this.films;
  }

  getFilmById(id: number): any {
    const film = this.films.find(film => {
      return film.movieId == id;
    });
    return film;
  }

  deletFilm(id) {
    let filmToDeleteIndex = this.films.findIndex(film => film.movieId === id); // chercher la position du film dans le tableau
    this.films.splice(filmToDeleteIndex, 1); // emlever le film a la position trouvee
  }
  setDetailFilm(filmDetail: any) {
    this.filmDetail$.next(filmDetail);
  }
  getDetailFilm() {
    return this.filmDetail$.asObservable();
  }
}


