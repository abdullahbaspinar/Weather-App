import React, { useState } from 'react';

function WeatherForm({ fetchWeatherData }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      alert('Lütfen bir şehir adı girin.');
      return;
    }
    fetchWeatherData(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mt-4">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Şehir Adı Giriniz"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Göster
      </button>
    </form>
  );
}

export default WeatherForm;
