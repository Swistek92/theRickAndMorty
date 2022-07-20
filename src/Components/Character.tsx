import React, { useEffect, useState } from 'react';
import classes from './Character.module.css';
import axios from 'axios';
const Character = (props: any) => {
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

  return (
    <div className={classes.main}>
      <ul>
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
