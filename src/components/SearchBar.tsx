import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface Props {
  onSearch: (city: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState('');

  function handleSubmit() {
    console.log('Hi from handle city');

    if (city.trim()) onSearch(city);
  }

  return (
    <Box display="flex" gap={2} alignItems="center" my={2}>
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
