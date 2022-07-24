import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { selectActions } from '../store/select-slice';

const StatusDropdown = (props: any) => {
  const selectCharacter = useSelector((state: any) => state.select.select);
  const selectStatus = useSelector((state: any) => state.select.status);
  const dispatch = useDispatch();
  let { name, option, chars } = props;

  if (selectCharacter.length === 1 && name === 'Status') {
    const char = chars.filter((e: any) => e.name === selectCharacter[0]);
    if (char[0].status === 'Dead') {
      name = 'Dead';
      option = [];
    } else if (char[0].status === 'unknown') {
      option = ['Alive', 'Dead'];
    } else if (char[0].status === 'Alive') {
      option = ['Dead'];
    }
  } else {
    option = ['Dead', 'unknown', 'Alive'];
  }

  if (selectCharacter.length !== 1) {
    dispatch(selectActions.setStatus(null));
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
        {name === 'Status' && Boolean(selectStatus) ? selectStatus : name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {option.map((e: any, i: any) => {
          return (
            <Dropdown.Item
              key={e}
              id={e}
              onClick={(e) => dispatch(selectActions.setStatus(option[i]))}
            >
              {e}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default StatusDropdown;
