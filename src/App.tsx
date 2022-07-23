import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Information from './Components/Information';
import { searchAction } from './store/search-slice';
import { selectActions } from './store/select-slice';
import { useLocalStorage } from './useLocalStorage';

const App = () => {
  const dispatch = useDispatch();
  const selectCharacter = useSelector((state: any) => state.select.select);
  const selectStatus = useSelector((state: any) => state.select.status);

  const [state, setState] = useLocalStorage('characters', []);
  useEffect(() => {
    if (state!.length < 1) {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          setState(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeCharacter = (name: any) => {
    const newList = state?.filter(
      (e: any) => !selectCharacter.includes(e.name)
    );
    setState(newList);
    dispatch(selectActions.clearSelect());
  };

  const changeStatus = () => {
    if (selectCharacter.length === 1 && Boolean(selectStatus)) {
      const index = state!.findIndex(
        (e: { status: string; name: string }) => e.name === selectCharacter[0]
      );

      let newState = state?.map((e: any, i: any) => {
        if (i !== index) {
          return e;
        } else {
          e.status = selectStatus;
          return e;
        }
      });
      // @ts-ignore: Unreachable code error

      setState(newState);
    }
  };

  return (
    <React.Fragment>
      <div className='App'>
        <Header
          chars={state}
          removeCharacter={removeCharacter}
          changeStatus={changeStatus}
        />
        <Information chars={state} />
      </div>
    </React.Fragment>
  );
};

export default App;
