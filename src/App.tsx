import { useQuery, gql } from '@apollo/client';

const FILMS_QUERY = gql`
  query {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(FILMS_QUERY);

  if (loading) return <h1>Loading...</h1>;

  console.log(data);

  return <div className="App"></div>;
}

export default App;
