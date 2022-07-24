import Dropdown from './Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { searchAction } from '../store/search-slice';
import StatusDropdown from './StatusDropdown';
const Header = (props: any) => {
  const dispatch = useDispatch();
  const selectItems = useSelector((state: any) => state.select.select);
  const { chars, removeCharacter, changeStatus } = props;
  const species: string[] = [];
  const origin: string[] = [];
  const status: string[] = [];

  chars.forEach(
    (e: { species: string; origin: { name: string }; status: string }) => {
      if (!species.includes(e.species)) {
        species.push(e.species);
      }
      if (!origin.includes(e.origin.name)) {
        origin.push(e.origin.name);
      }
      if (!status.includes(e.status) && selectItems.length === 1) {
        status.push(e.status);
      }
    }
  );

  return (
    <>
      <h1 className={classes.header}>CHARACTERS</h1>
      <div className={classes.header}>
        <ul>
          <InputGroup>
            <Form.Control
              onChange={(e) =>
                dispatch(searchAction.changeSearch(e.target.value))
              }
              className={classes.search}
              aria-label='First name'
            />
          </InputGroup>
          <li>
            <Dropdown name={'Species'} option={species} />
          </li>
          <li>
            <Dropdown name={'Origin'} option={origin} />
          </li>
          <li>
            <StatusDropdown name={'Status'} option={status} chars={chars} />
          </li>
        </ul>
        <ul>
          {selectItems.length < 2 && (
            <li>
              <button className={classes.btnChange} onClick={changeStatus}>
                Change status
              </button>
            </li>
          )}
          <li>
            <button
              onClick={() => removeCharacter()}
              className={classes.btnRemove}
            >
              Remove Characters
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
