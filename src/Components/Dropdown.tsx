import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
const DropdownComonent = (props: any) => {
  const [select, setSelect] = useState('');
  const { name, option } = props;

  const clickHandler = (e: any) => {
    e.preventDefault();
    setSelect(e.target.id);
    console.log(select);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {option.map((e: any) => {
          return (
            <Dropdown.Item key={e} id={e} onClick={clickHandler}>
              {e}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComonent;
