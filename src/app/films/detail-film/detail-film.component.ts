import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {


  id: any;
  film: any;
  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.film = this.filmsService.getFilmById(this.id);
    this.filmsService.setDetailFilm(this.film);
  }
}