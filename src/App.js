import "./App.css";
import sunImg from "./assets/img/01.svg";
import halfSun from "./assets/img/05.svg";
import lightningImg from "./assets/img/09.svg";
import cloudyImg from "./assets/img/17.svg";

const weatherInfo = [
  { id:1,
    weekday: "Monday",
    imgURL: sunImg,
    temp: "36C",
  },
  { id:2,
    weekday: "Tuesday",
    imgURL: halfSun,
    temp: "32C",
  },
  { id:3,
    weekday: "Wednesday",
    imgURL: sunImg,
    temp: "35C",
  },
  { id:4,
    weekday: "Thursday",
    imgURL: halfSun,
    temp: "45C",
  },

  { 
    id:5,
    weekday: "Friday",
    imgURL: lightningImg,
    temp: "36C",
  },
  { 
    id:6,
    weekday: "Saturday",
    imgURL: cloudyImg,
    temp: "37C",
  },
  { 
    id:7,
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
      <WeatherList key={el.id} weekday={el.weekday} imgURL={el.imgURL} temp={el.temp} />
    );
  });

  return <div className="WeatherListContainer"> {weather} </div>;
}

export default App;
