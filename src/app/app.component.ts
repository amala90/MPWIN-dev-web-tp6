import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tp2';
  films = [
    {
      movieName: 'TheHangover1',
      movieDescription: 'Trois jeunehommescherchent unami qui adisparu aucours d\'unesuper fête àLas Vegas',
      movieYear: 2009,
    },

    {
      movieName: 'TheHangover2',
      movieDescription: 'Phil, Stu, Alanet Dougs\'offrent unvoyageexotique enThaïlande, à l\'occasion dumariage deStu.s',
      movieYear: 2011,
    },

    {
      movieName: 'TheHangover3',
      movieDescription: 'Cela fait deux ansmaintenant que Phil,Stu, Alan et Doug sontrevenus de Thaïlande.Tout le monde a biennégocié le retour maisAlan, qui a cessé deprendre sesmédicaments, peine àtrouver son équilibre.',
      movieYear: 2013,
    },

  ];

  onFilmAdd(newFilm) {

    this.films.push(newFilm);
  }
}
