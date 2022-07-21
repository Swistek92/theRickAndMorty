import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAction } from '../store/search-slice';

const DropdownComonent = (props: any) => {
  const dispatch = useDispatch();
  const { name, option } = props;

  const nameaction = name.name;

  return (
    <Dropdown>
      <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {option.map((e: any, i: any) => {
          if (name === 'Species') {
            return (
              <Dropdown.Item
                key={e}
                id={e}
                onClick={(e) => dispatch(searchAction.setSpecies(option[i]))}
              >
                {e}
              </Dropdown.Item>
            );
          }
          if (name === 'Origin') {
            return (
              <Dropdown.Item
                key={e}
                id={e}
                onClick={(e) => dispatch(searchAction.setOrigin(option[i]))}
              >
                {e}
              </Dropdown.Item>
            );
          }
          if (name === 'Status') {
            return (
              <Dropdown.Item
                key={e}
                id={e}
                onClick={(e) => dispatch(searchAction.setStatus(option[i]))}
              >
                {e}
              </Dropdown.Item>
            );
          }
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComonent;
