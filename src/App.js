import "./App.css";
import sunImg from "./assets/img/01.svg";
import halfSun from "./assets/img/05.svg";
import lightningImg from "./assets/img/09.svg";
import cloudyImg from "./assets/img/17.svg";

const weatherInfo = [
  {
    weekday: "Monday",
    imgURL: sunImg,
    temp: "36C",
  },
  {
    weekday: "Tuesday",
    imgURL: halfSun,
    temp: "32C",
  },
  {
    weekday: "Wednesday",
    imgURL: sunImg,
    temp: "35C",
  },
  {
    weekday: "Thursday",
    imgURL: halfSun,
    temp: "45C",
  },

  {
    weekday: "Friday",
    imgURL: lightningImg,
    temp: "36C",
  },
  {
    weekday: "Saturday",
    imgURL: cloudyImg,
    temp: "37C",
  },
  {
    weekday: "Sunday",
    imgURL:lightningImg,
    temp: "39C",
  },
];

function Image(props) {
  return <img src={props.src} alt={props.alt} width={props.width} />;
}

function WeatherList(props) {
  return (
    <div className="dayWeather">
      <h3>{props.weekday}</h3>
      <Image src={props.imgURL} alt="weather" width="40%" />
      <p>{props.temp}</p>
    </div>
  );
}

function App() {
  const weather = weatherInfo.map((el) => {
    return (
      <WeatherList weekday={el.weekday} imgURL={el.imgURL} temp={el.temp} />
    );
  });

  return <div className="WeatherListContainer"> {weather} </div>;
}

export default App;
