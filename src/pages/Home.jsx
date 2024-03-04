import { useQuery } from '@apollo/client'
import { PRODUCTS } from '../graphql/Queries.js'
import Header from '../component/Header.jsx';
import Aside from '../component/Aside.jsx';
import Article from '../component/Article.jsx';
import { Provider } from 'react-redux';
import { store } from '../app/store.js';
import { useState } from 'react';
import styled from 'styled-components';


const Grid = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
`

function Home() {
  const {error, loading, data} = useQuery(PRODUCTS)
  const [isOpen, setIsOpen] = useState(false)


  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  else return (
    <>
    <Provider store={store}>
      <Header setIsOpen={setIsOpen}/>
      <Aside isOpen={isOpen}/>
      <main>
        <Grid>
          {data.products.map((item) => <Article key={item._id} product={item}/> )}
        </Grid>
      </main>
    </Provider>
    </>
)}

export default Home