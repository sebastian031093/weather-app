const API_KEY = '6156c11240fcd241e5fe77512776fdf7';

export const fetchWeather = async (city: string) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!resp.ok) throw new Error('City was not found');

  return resp.json();
};
