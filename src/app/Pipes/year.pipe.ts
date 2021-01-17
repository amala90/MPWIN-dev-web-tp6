import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let anneeActuelle = new Date().getFullYear();
    let sortieDepuis = anneeActuelle - parseInt(value);
    return 'est sorti en ' + value + ' donc il y a ' + sortieDepuis + ' ans depuis sa sortie';
  }

}
