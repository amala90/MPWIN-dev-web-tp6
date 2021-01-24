import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  addFilmForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private filmService: FilmsService,
    private router: Router
  ) {
  }

  get f() { return this.addFilmForm.controls; }

  initForm() {
    this.addFilmForm = this.formBuilder.group(
      {
        movieId: ['', Validators.required],
        movieName: ['', Validators.required],
        movieDescription: ['', Validators.required]
      }
    );
  }


  ngOnInit(): void {
    this.initForm();
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.addFilmForm.invalid) {
      return;
    }
    else {
      let formValue = this.addFilmForm.value;
      this.filmService.addFilm(formValue);
      this.router.navigate(['/films']);
    }

  }
}
