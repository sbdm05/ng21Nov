
import { Pipe, PipeTransform } from '@angular/core';

// décorateur
@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: any, tva?: boolean): number{
    // console.log('déclenché'); // ???
    if (tva) {
      return val.totalTTC();
    }
    return val.totalHT();
  }
}
