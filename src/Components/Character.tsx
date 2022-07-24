import React, { useEffect, useRef, useState } from 'react';
import classes from './Character.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectActions } from '../store/select-slice';
const Character = (props: any) => {
  const dispatch = useDispatch();

  const [org, setOrg] = useState(['']);
  const { name, avatar, episodes, origin, status } = props;

  useEffect(() => {
    const getEpisode = async () => {
      if (episodes.length > 1) {
        try {
          const ep1 = await axios.get(episodes[0]);
          const ep2 = await axios.get(episodes[1]);
          setOrg([ep1.data.name, ep2.data.name]);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const ep1 = await axios.get(episodes[0]);
          setOrg([ep1.data.name]);
        } catch (error) {
          console.log(error);
        }
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
    <div
      className={classes.main}
      style={{ background: status === 'Dead' ? 'grey' : 'white' }}
    >
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
        {!org[1] && <li>{`${org[0]}`} </li>}
        {org[1] && <li>{`${org[0]} // ${org[1]}`} </li>}

        <li>{status}</li>
      </ul>
    </div>
  );
};

export default Character;
