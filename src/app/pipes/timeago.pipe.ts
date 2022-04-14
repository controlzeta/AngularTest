import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(value: string): string {
    return formatDistance(new Date(), Date.parse(value));
  }

}
