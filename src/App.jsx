import Weather from './components/Weather/Weather';
import weatherPredictions from './data/weather.data';

export default function App() {
  return (
    <div className="App">
      <Weather theme="dark" predictions={weatherPredictions} />
    </div>
  );
}
