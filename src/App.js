import { useEffect, useState } from 'react';
import './App.css';
//Header
import Header from './components/Header/Header'
//MUI
import TextField from '@mui/material/TextField';
//axios
import axios from 'axios';
//card
import CardMovie from './components/Card/CardMovie';

function App() {

  const [inputTxt, setInputTxt] = useState('');
  const [showMovie, setShowMovie] = useState({})
  const [loading, setLoading] = useState(false)

  
  const handleOnChange = (e) => {
    setInputTxt(e.target.value);
  }
  const handleOnSubmit = (e) => {

    e.preventDefault();
    let cleanerTxt = inputTxt.split(' ').join('-').toLowerCase();

    axios(`http://www.omdbapi.com/?t=${cleanerTxt}&apikey=3a147524`)
      .then(resp => setShowMovie(resp.data));
    setInputTxt('');
  }




  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form className='form' onSubmit={handleOnSubmit}>
          <TextField
            className='textField'
            placeholder='Search Game'
            variant='outlined'
            value={inputTxt}
            onChange={handleOnChange}
          />
          <button className='btn'>Search</button>
        </form>
      </div>

      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {showMovie.Title ? <CardMovie showMovie={showMovie} /> : <h3>Search any movie existing</h3>}
      </div>
      <div style={{ height: '60px' }}></div>
    </>
  );
}

export default App;
