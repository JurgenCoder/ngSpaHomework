import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

const hotels: IHotel[] = [
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'hotel'
  },
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'tours'
  },
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'fishing'
  },
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'fishing'
  },
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'fishing'
  },
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'weather'
  },
  {
    img1: 'assets/images/res.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675,
    },
    type: 'weather'
  },
]

export const hotels$: Observable<IHotel[]> = of(hotels)
  .pipe(
    map((hotelsArr: IHotel[]) =>
      hotelsArr.filter((product: IHotel) => product.type)),
    delay(3000)
  );


