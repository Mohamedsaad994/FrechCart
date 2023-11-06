import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuttxt',
  standalone: true
})
export class CuttxtPipe implements PipeTransform {

  transform(text:string, limit:number): string {
    return text.split(" ").slice(0, limit).join()
  }

}
