/* eslint-disable no-unreachable */

function getWeatherBackground(weatherString = "") {
  switch (weatherString) {
    case "rain":
      return "https://cdn.abcotvs.com/dip/images/5184599_031119-kgo-shutterstock-rain-img.jpg?w=1600";
    case "clouds":
      return "https://www.almanac.com/sites/default/files/image_nodes/cloudy-sky.jpg";
    case "snow":
      return "https://il5.picdn.net/shutterstock/videos/3215686/thumb/1.jpg";
    case "clear":
      return "https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg";
    case "drizzle":
      return "https://cdn.abcotvs.com/dip/images/5184599_031119-kgo-shutterstock-rain-img.jpg?w=1600";
    case "thunderstorm":
      return "http://i.ytimg.com/vi/el93AooFrgg/maxresdefault.jpg";
    case "mist":
      return "http://3.bp.blogspot.com/-PsBYNl5ltF0/TeeF2HLv_QI/AAAAAAAAAKA/IVrqRAdx_TQ/s1600/Morning+mist%252C+Waitomo%252C+New+Zealand+Pictures.jpg";
    default:
      return "https://s19499.pcdn.co/wp-content/uploads/2018/09/blue-sky-with-bright-sun-picture-id947314334-1.jpg";
  }
}

export default getWeatherBackground;
