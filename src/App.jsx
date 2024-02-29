import './App.css'
import { useQuery } from '@apollo/client'
import { PRODUCTS } from './graphql/Queries.js'
import Header from './component/Header.jsx';
import Aside from './component/Aside.jsx';
import Article from './component/Article.jsx';
import styled from 'styled-components';

const Grid = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
`

function App() {
  const {error, loading, data} = useQuery(PRODUCTS)


  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  else return (
    <>
    <Header/>
    <Aside/>
    <main>
      <Grid>
        {data.products.map((item) => <Article key={item._id} product={item}/> )}
      </Grid>
    </main>
    </>)

}

export default App
