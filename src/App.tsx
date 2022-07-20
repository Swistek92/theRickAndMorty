import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Information from './Components/Information';
import { useLocalStorage } from './useLocalStorage';

const App = () => {
  const [state, setState] = useLocalStorage('characters', []);
  useEffect(() => {
    if (state!.length < 10) {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          setState(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <div className='App'>
        <Header />
        <Information chars={state} />
      </div>
    </React.Fragment>
  );
};

export default App;
