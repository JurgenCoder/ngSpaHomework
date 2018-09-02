import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tourFilter'
})
export class TourFilterPipe implements PipeTransform {

  transform(hotels: IHotel[], searchTerm: string): IHotel[] {
    if(!searchTerm) {
      return hotels;
    }

    return hotels.filter((hotel: IHotel) => {
      return `${hotel.type}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }

}
