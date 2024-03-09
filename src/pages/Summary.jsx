import { Link, useNavigate } from "react-router-dom"
import CartList from "../features/cart/CartList"
import CartTotal from "../features/cart/CartTotal"
import { useSelector } from "react-redux"
import { cartLength, getAllCart } from "../features/cart/cartSlice"
import { useMutation } from "@apollo/client"
import { ADD_PRODUCTS } from "../graphql/Mutations"
import Header from "../component/Header"
import styled from "styled-components"

const MainContainer = styled.main`
    max-width: 500px;
    width:100%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border 1px solid black;
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
        <>
            <Header/>
            <MainContainer>
                <CartList/>
                <div>
                    <span>Total:</span><CartTotal/>
                </div>
                {count !== 0 && <button className="validButton" onClick={addProduct}>Paiement du panier</button>}
                <button><Link to='/'>Retour</Link></button>
            </MainContainer>
        </>
    )
}

export default Summary