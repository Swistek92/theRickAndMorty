import Character from './Character';
import classes from './Information.module.css';
import InformationHeader from './Top';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Information = (props: any) => {
  const { chars, charsPerPage, loading } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(chars);
  const search = useSelector(
    (state: { search: string }) => state.search.search
  );
  const propsSearch = useSelector(
    (state: { search: { origin: string[]; species: string[] } }) => state.search
  );
  // filter by searchers
  let filtered = chars.filter(
    (e: { name: string; origin: { name: string }; species: string }) =>
      JSON.stringify(e.name)
        .toLowerCase()
        .includes(search.toString().toLowerCase())
  );

  if (loading) {
    return <div>Loading</div>;
  }

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

  // pagination
  let numbersOfPage: Number;
  if (Number.isInteger(filtered.length / charsPerPage)) {
    numbersOfPage = filtered.length / charsPerPage;
  } else {
    numbersOfPage = Math.floor(filtered.length / charsPerPage) + 1;
  }

  const previousPage = () => {
    if (currentPage === 1) {
      return;
    } else setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === numbersOfPage) {
      return;
    } else setCurrentPage(currentPage + 1);
  };

  const exactPage = (e: any) => {
    setCurrentPage(e);
  };
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(filtered.length / charsPerPage); i++) {
    pageNumber.push(i);
  }

  // Get  posts
  const indexOfLastPost = currentPage * charsPerPage;
  const indexOfFirstPost = indexOfLastPost - charsPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className={classes.main}>
      <InformationHeader />
      {currentPosts.map((e: any) => {
        const randomEpisodes = [];
        const randomNumber = () => Math.floor(Math.random() * e.episode.length);
        const numberOne = randomNumber();
        let numberTwo = randomNumber();
        // select random 2 episodes to show
        // rekurencja
        if (e.episode.length > 1) {
          const check = () => {
            if (numberOne !== numberTwo) {
              return;
            }
            if (numberOne === numberTwo) {
              numberTwo = randomNumber();
              check();
            }
          };
          check();
          randomEpisodes.push(e.episode[numberOne]);
          randomEpisodes.push(e.episode[numberTwo]);
        } else {
          randomEpisodes.push(e.episode[numberOne]);
        }

        return (
          <Character
            key={e.name}
            name={e.name}
            avatar={e.image}
            origin={e.origin.name}
            episodes={randomEpisodes}
            status={e.status}
          />
        );
      })}
      <div className={classes.btns}>
        <button onClick={previousPage}>&#x2190;</button>
        {pageNumber.map((e) => {
          return (
            <button
              key={e}
              // style={{ background: e === currentPage ? 'grey' : 'white' }}
              className={`${e === currentPage && classes.include}`}
              onClick={() => exactPage(e)}
            >
              {e}
            </button>
          );
        })}

        <button onClick={nextPage}>&#x2192;</button>
      </div>
    </div>
  );
};

export default Information;
