import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../store/search-slice';
import classes from './Dropdown.module.css';
const DropdownComonent = (props: any) => {
  const propsSearch = useSelector(
    (state: { search: { origin: string[]; species: string[] } }) => state.search
  );

  const dispatch = useDispatch();
  let { name, option } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu className={classes.dropdown}>
        {option.map((e: any, i: any) => {
          if (name === 'Species') {
            const include = propsSearch.species.includes(e);
            return (
              <Dropdown.Item
                // style={{ background: include ? 'grey' : 'white' }}
                className={`${include && classes.include}`}
                key={e}
                id={e}
                onClick={(e) => dispatch(searchAction.toggleSpecies(option[i]))}
              >
                {e}
              </Dropdown.Item>
            );
          }
          if (name === 'Origin') {
            const include = propsSearch.origin.includes(e);

            return (
              <Dropdown.Item
                className={`${include && classes.include}`}
                key={e}
                id={e}
                onClick={(e) => dispatch(searchAction.toggleOrigin(option[i]))}
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
