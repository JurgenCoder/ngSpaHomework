import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: number): string {
    return 'Tel: +' + phoneNumber.toString().substr(0, 4) + ' '
                    + phoneNumber.toString().substr(4, 3) + ' '
                    + phoneNumber.toString().substr(7, 3);
  }

}
