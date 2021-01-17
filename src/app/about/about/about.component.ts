import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  film: any;
  filmDetailsSubscription: Subscription;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmDetailsSubscription = this.filmsService.getDetailFilm().subscribe(
      data => {
        this.film = data;
      });
  }

  ngOnDestroy(): void {
    this.filmDetailsSubscription.unsubscribe();
  }

}
