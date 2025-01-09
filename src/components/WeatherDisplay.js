import React from 'react';

function WeatherDisplay({ weatherData }) {
  const { name, main, weather, wind } = weatherData;

  return (
    <div className="card text-center bg-dark text-white mt-5 mx-auto" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          <strong>Durum:</strong> {weather[0].description} <br />
          <strong>Sıcaklık:</strong> {main.temp}°C <br />
          <strong>Nem:</strong> {main.humidity}% <br />
          <strong>Rüzgar:</strong> {wind.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
