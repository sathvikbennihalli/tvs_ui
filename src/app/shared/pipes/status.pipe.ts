import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../enums/status.enum';

@Pipe({
  name: 'statusFormatter',
  standalone: true,
  pure: true,
})
export class StatusClassPipe implements PipeTransform {
  transform(status: Status): string {
    switch (status) {
      case Status.SUBMITTED:
        return 'status-submitted';
      case Status.APPROVED:
        return 'status-approved';
      case Status.REVERTED:
      case Status.RE_SUBMITTED:
        return 'status-reverted';
      case Status.NOT_SUBMITTED:
        return 'status-not-submitted';
      default:
        return '';
    }
  }
}
