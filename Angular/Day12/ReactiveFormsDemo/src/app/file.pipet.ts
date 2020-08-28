import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  pure: false
})
export class FilePipe implements PipeTransform {

  count: number = 1;

  transform(size: number, extension: string = ' MB'): string {
    console.log("Pipe Called" + this.count++);
    if (extension === 'MB') {
      return (size / (1024 * 1024)).toFixed(2) + extension;
    } else if (extension === 'GB') {
      return (size / (1024 * 1024 * 1024)).toFixed(2) + extension;
    }

  }
}
