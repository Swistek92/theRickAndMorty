import Character from './Character';
import classes from './Information.module.css';
import InformationHeader from './Top';
// import character from '../data/chracets.json';
import { useSelector } from 'react-redux';
const Information = (props: any) => {
  const search = useSelector(
    (state: { search: string }) => state.search.search
  );

  console.log('information', search);
  const { chars } = props;

  const filtered = chars.filter((e: { name: '' }) =>
    JSON.stringify(e.name)
      .toLowerCase()
      .includes(search.toString().toLowerCase())
  );

  filtered.forEach((e: any) => {
    console.log(e.orgin);
  });

  // {
  //       "id": 17,
  //       "name": "Annie",
  //       "status": "Alive",
  //       "species": "Human",
  //       "type": "",
  //       "gender": "Female",
  //       "origin": {
  //         "name": "Earth (C-137)",
  //         "url": "https://rickandmortyapi.com/api/location/1"
  //       },
  //       "location": {
  //         "name": "Anatomy Park",
  //         "url": "https://rickandmortyapi.com/api/location/5"
  //       },
  //       "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  //       "episode": [
  //         "https://rickandmortyapi.com/api/episode/3"
  //       ],
  //       "url": "https://rickandmortyapi.com/api/character/17",
  //       "created": "2017-11-04T22:21:24.481Z"
  //     }

  console.log(search.length);
  return (
    <div className={classes.main}>
      <p>{JSON.stringify(search)}</p>
      <InformationHeader />

      {filtered.map((e: any) => (
        <Character
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
