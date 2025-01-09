import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './index.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchWeatherData = async (city) => {
    const apiKey = '37bbe92fafbba9eead398d3d7afd35b8'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Şehir bulunamadı.');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const getBackgroundVideo = () => {
    if (!weatherData) return 'clear.mp4';
    const mainWeather = weatherData.weather[0].main.toLowerCase();

    switch (mainWeather) {
      case 'clear':
        return 'clear.mp4';
      case 'clouds':
        return 'clouds.mp4';
      case 'rain':
        return 'rain.mp4';
      case 'snow':
        return 'snow.mp4';
      case 'thunderstorm':
        return 'thunderstorm.mp4';
      default:
        return 'clear.mp4';
    }
  };

  return (
    <div>
      <video
        className="video-background"
        autoPlay
        loop
        muted
        src={require(`./assets/videos/${getBackgroundVideo()}`)}
      ></video>

      <div className="container text-white text-center py-5">
        <h1 className="display-4">Hava Durumu Uygulaması</h1>
        <p className="lead">İl, ilçe veya ülke seçerek anlık hava durumunu öğrenin!</p>
        <WeatherForm fetchWeatherData={fetchWeatherData} />
        {error && <p className="alert alert-danger mt-3">{error}</p>}
        {weatherData && <WeatherDisplay weatherData={weatherData} />}

        {/* Hakkında Butonu */}
        <button
          className="btn btn-info mt-4"
          onClick={() => setShowModal(true)}
        >
          Hakkında
        </button>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Hakkında</h2>
              <p>
                Bu uygulama, OpenWeather API'sini kullanarak hava durumu
                bilgilerini sağlar.
                <br></br>
                Oluşturan Kişi: Abdullah Başpınar 2025
                <br></br>
                Hacettepe Üniversitesi
              </p>
              <button
                className="btn btn-danger mt-3"
                onClick={() => setShowModal(false)}
              >
                Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
