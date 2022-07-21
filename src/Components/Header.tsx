import Dropdown from './Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { searchAction } from '../store/search-slice';
import { useState } from 'react';
const Header = (props: any) => {
  const { chars } = props;
  const species: string[] = ['off'];
  const origin: string[] = ['off'];
  const status: string[] = [];

  chars.forEach((e: { species: ''; origin: { name: '' }; status: '' }) => {
    if (!species.includes(e.species)) {
      species.push(e.species);
    }
    if (!origin.includes(e.origin.name)) {
      origin.push(e.origin.name);
    }
    if (!status.includes(e.status)) {
      status.push(e.status);
    }
  });

  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <InputGroup>
        <InputGroup>Search</InputGroup>
        <Form.Control
          onChange={(e) => dispatch(searchAction.changeSearch(e.target.value))}
          aria-label='First name'
        />
      </InputGroup>
      <ul>
        <li>
          <Dropdown name={'Species'} option={species} />
        </li>
        <li>
          <Dropdown name={'Origin'} option={origin} />
        </li>
        <li>
          <Dropdown name={'Status'} option={status} />
        </li>
        <li>
          <button className={classes.btnChange}>Change status</button>
        </li>
        <li>
          <button className={classes.btnRemove}>Remove Characters</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
