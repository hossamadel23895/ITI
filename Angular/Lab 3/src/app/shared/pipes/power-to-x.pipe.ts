import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX',
})
export class PowerToXPipe implements PipeTransform {
  transform(value: number, power: number): unknown {
    return Math.pow(value, power);
  }
}
