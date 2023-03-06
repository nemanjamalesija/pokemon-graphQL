import { useQuery, gql } from '@apollo/client';

const TEST_QUERY = gql`
  query {
    pokemon_v2_itemname {
      item_id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) return <h1>Loading...</h1>;
  console.log(data);

  return <div className="App"></div>;
}

export default App;
