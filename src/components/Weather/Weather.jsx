export default function Weather({ theme, predictions }) {
  if (theme === 'light') {
    return <h2>Weather Light</h2>;
  }

  return (
    <div>
      <h1>Weather</h1>
      {predictions.map(({ weekDey, temp, icon: Icon }) => (
        <div key={weekDey}>
          <h2>{weekDey}</h2>
          <Icon />
          <p>{temp}</p>
        </div>
      ))}
    </div>
  );
}
