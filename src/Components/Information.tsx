import Character from './Character';
import classes from './Information.module.css';
import InformationHeader from './Top';
// import character from '../data/chracets.json';
import { useSelector } from 'react-redux';
const Information = (props: any) => {
  const { chars } = props;
  const search = useSelector(
    (state: { search: string }) => state.search.search
  );

  const propsSearch = useSelector(
    (state: { search: { origin: string[]; species: string[] } }) => state.search
  );

  let filtered = chars.filter(
    (e: { name: string; origin: { name: string }; species: string }) =>
      JSON.stringify(e.name)
        .toLowerCase()
        .includes(search.toString().toLowerCase())
  );
  console.log(propsSearch);
  if (propsSearch.origin.length > 1) {
    filtered = filtered.filter(
      (e: { name: string; origin: { name: string }; species: string }) => {
        return propsSearch.origin.includes(e.origin.name);
      }
    );
  }
  if (propsSearch.species.length > 1) {
    filtered = filtered.filter(
      (e: { name: string; origin: { name: string }; species: string }) => {
        return propsSearch.species.includes(e.species);
      }
    );
  }

  return (
    <div className={classes.main}>
      <p>{JSON.stringify(search)}</p>
      <InformationHeader />

      {filtered.map((e: any) => (
        <Character
          key={e.name}
          name={e.name}
          avatar={e.image}
          origin={e.origin.name}
          episodes={e.episode[0]}
          status={e.status}
        />
      ))}
    </div>
  );
};

export default Information;
