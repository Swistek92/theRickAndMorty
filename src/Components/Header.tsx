import Dropdown from './Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { searchAction } from '../store/search-slice';
import { useState } from 'react';
const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const setSearch = (e: any) => {
    dispatch(searchAction.changeSearch(searchValue));
    console.log(searchValue);
  };

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
          <Dropdown name={'Species'} option={['1', '2']} />
        </li>
        <li>
          <Dropdown name={'orgin'} option={['1', '2']} />
        </li>
        <li>
          <Dropdown name={'status'} option={['1', '2']} />
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
