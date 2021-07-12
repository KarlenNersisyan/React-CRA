import "./App.css";
import sunImg from "./assets/img/01.svg";
import halfSun from "./assets/img/05.svg";
import lightningImg from "./assets/img/09.svg";
import cloudyImg from "./assets/img/17.svg";

const weatherInfo = [
  {
    weekday: "Tuesday",
    imgURL: halfSun,
    temp: "32C",
  },
  {
    weekday: "Monday",
    imgURL: sunImg,
    temp: "36C",
  },
  {
    weekday: "Wednesday",
    imgURL: halfSun,
    temp: "35C",
  },

  {
    weekday: "Friday",
    imgURL: lightningImg,
    temp: "36C",
  },
  {
    weekday: "Thursday",
    imgURL: halfSun,
    temp: "45C",
  },
  {
    weekday: "Sunday",
    imgURL: cloudyImg,
    temp: "39C",
  },
  {
    weekday: "Saturday",
    imgURL: lightningImg,
    temp: "37C",
  },
];

function Image(props) {
  return <img src={props.src} alt={props.alt} />;
}

function WeatherList(props) {
  return (
    <div className="dayWeather">
      <h1>{props.weekday}</h1>
      <Image src={props.imgURL} alt="weather" />
      <p>{props.temp}</p>
    </div>
  );
}

function App() {
  let weather = weatherInfo.map((el) => {
    return (
      <WeatherList weekday={el.weekday} imgURL={el.imgURL} temp={el.temp} />
    );
  });

  return <div className="WeatherListContainer"> {weather} </div>;
}

export default App;
