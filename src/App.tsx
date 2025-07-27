
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { Container, Typography } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherApi';
import './App.css';

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');

  function handleSearch(params: string) {
    console.log('aqui van lo que buscas', params);
  }

  return (
    <Container>
      <Typography variant="h3" textAlign="center" mt={4}>
        Weather App
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {error && <Typography color="error">{error}</Typography>}
      {weather && <WeatherCard data={weather} />}
    </Container>
  );
}

export default App;
