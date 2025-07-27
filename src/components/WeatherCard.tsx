import { Card, CardContent, Typography } from '@mui/material';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };

  weather: {
    desc: string;
  }[];
}

function WeatherCard({ data }: { data: WeatherData }) {
  return (
    <Card sx={{ maxWidth: 400, marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
        <Typography>Temp: {data.main.temp}°C</Typography>
        <Typography>Humidity: {data.main.humidity}%</Typography>
        <Typography>{data.weather[0].desc}</Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
