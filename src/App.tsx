
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  //const [count, setCount] = useState(0);

  function hadleSearch(params: string) {
    console.log('aqui van lo que buscas', params);
  }

  return (
    <>
      <h1>Hi from Weather app</h1>
      <SearchBar onSearch={hadleSearch} />
    </>
  );
}

export default App;
