import styled from "styled-components"
import Layout from "./layouts/Layout"
import CartList from "../features/cart/CartList"
import CartTotal from "../features/cart/CartTotal"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { cartLength, getAllCart } from "../features/cart/cartSlice"
import { useMutation } from "@apollo/client"
import { ADD_PRODUCTS } from "../graphql/Mutations"

const MainContainer = styled.main`
    max-width: 500px;
    width:100%;
    margin: 100px auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    row-gap: 25px;
    border: 1px solid black;
`

function Summary() {
    const count = useSelector(cartLength)
    const list = useSelector(getAllCart)
    const token = localStorage.getItem("token") ?? ""
    const navigate = useNavigate()
   
    const [addProduct] = useMutation(
        ADD_PRODUCTS, 
        {
            variables: {order: list },
            context: {
                headers: {
                  Authorization: `Bearer ${token}`,
                }
            },
            onCompleted: (data) => {
                window.location.href = data.validOrder.url
            },
            onError: (error) => {
                console.error('Erreur de mutation:', error);
          
                if (error.networkError.statusCode === 401) navigate("/login")
            }
        }
    )

    return (
        <Layout>
            <MainContainer>
                <CartList/>
                <div className="flexDisplay fs22">
                    <span>Total:</span><CartTotal/>
                </div>
                {count !== 0 && <button className="blueButton" onClick={addProduct}>Paiement du panier</button>}
                <button className="greyButton"><Link className="noLink colorWhite" to='/'>Retour</Link></button>
            </MainContainer>
        </Layout>
    )
}

export default Summary