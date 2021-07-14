import './weather.css';

export default function Weather({ theme, predictions }) {
  if (theme === 'light') {
    return <h2>Weather Light</h2>;
  }

  return (
    <div className="general">
      <h1 className="title">Weather Forecast</h1>
      <div className="card">
        {predictions.map(({ weekDey, temp, icon: Icon }) => (
          <div className="card-item" key={weekDey}>
            <h2>{weekDey}</h2>
            <Icon />
            <p>{temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
