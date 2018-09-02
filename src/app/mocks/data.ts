import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

const hotels: IHotel[] = [
  {
    img1: 'assets/images/land.jpg',
    img2: 'assets/images/r1.jpg',
    address: 'Resort Address',
    phone: 1285968685,
    weather: {
      title: 'Et harum quidem',
      icon: '../../assets/image/cloudy.png',
      water: 23,
      temperature: 15
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
      water: 24,
      temperature: 18
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 1770,
      following: 523,
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
      water: 26,
      temperature: 20
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 456,
      following: 112,
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
      water: 21,
      temperature: 12
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 1234,
      following: 97,
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
      followers: 5850,
      following: 1675,
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
      water: 23,
      temperature: 19
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 850,
      following: 65,
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
      water: 25,
      temperature: 16
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 7850,
      following: 1675,
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


