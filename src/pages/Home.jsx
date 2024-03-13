import styled from 'styled-components';
import Article from '../component/Article.jsx';
import { useQuery } from '@apollo/client'
import { PRODUCTS } from '../graphql/Queries.js'
import Layout from './layouts/Layout.jsx';


const Grid = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 50px 25px;
`

function Home() {
  const {error, loading, data} = useQuery(PRODUCTS)
 
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  else return (
    <Layout>
      <main>
        <Grid>
          {data.products.map((item) => <Article key={item._id} product={item}/> )}
        </Grid>
      </main>
    </Layout>
)}

export default Home