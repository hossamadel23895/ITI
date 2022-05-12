import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert',
})
export class StringConvertPipe implements PipeTransform {
  transform(productCode: string): unknown {
    return productCode.replace('-', ' ');
  }
}
