interface IHotel {
  imgHead: string;
  img1: string;
  img2: string;
  address: string;
  phone:  number;
  weather: IWeather;
  socialInfo: ISocialInfo;
  type: string;
}

interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}
