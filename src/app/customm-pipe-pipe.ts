import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custommPipe'
})
export class CustommPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
