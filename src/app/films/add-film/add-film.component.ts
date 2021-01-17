import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  @Output() filmOutput = new EventEmitter<any>();
  movieNameForm = '';
  movieYearForm = '';
  movieDescriptionForm = '';
  constructor() { }

  ngOnInit(): void {
  }

  add_film() {
    const jsonObject = {
      movieName: this.movieNameForm,
      movieDescription: this.movieDescriptionForm,
      movieYear: this.movieYearForm,
    };
    this.filmOutput.emit(jsonObject)
  }
}
