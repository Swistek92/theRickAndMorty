import React, { useEffect, useRef, useState } from 'react';
import classes from './Character.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectActions } from '../store/select-slice';
const Character = (props: any) => {
  const dispatch = useDispatch();

  const [org, setOrg] = useState({ name: '' });
  const { name, avatar, episodes, origin, status } = props;

  useEffect(() => {
    const getEpisode = async () => {
      try {
        const res = await axios.get(episodes);
        setOrg(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEpisode();
  }, [episodes]);

  const changeSelect = (e: any) => {
    if (e.target.checked) {
      dispatch(selectActions.addSelect(name));
    } else {
      dispatch(selectActions.removeSelect(name));
    }
  };

  return (
    <div className={classes.main}>
      <ul>
        <li>
          <input type='checkbox' onChange={changeSelect}></input>
        </li>
        <li>
          <p>{name} </p>
        </li>
        <li>
          <img src={avatar} alt='img' />
        </li>
        <li>{origin}</li>
        <li>{org.name}</li>
        <li>{status}</li>
      </ul>
    </div>
  );
};

export default Character;
