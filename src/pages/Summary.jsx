import styled from "styled-components"
import Layout from "./layouts/Layout"
import Message from "../component/Message"
import CartList from "../features/cart/CartList"
import CartTotal from "../features/cart/CartTotal"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { cartLength, getAllCart } from "../features/cart/cartSlice"
import { useMutation } from "@apollo/client"
import { ADD_PRODUCTS } from "../graphql/Mutations"
import { getStatus, getToken } from "../features/user/userSlice"

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
    const user = useSelector(getStatus)
    const token = useSelector(getToken)
   
    const [addProduct, {error}] = useMutation(
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
        }
    )

    if(error) return <Message message="Une Erreur est survenue"/>

    else return (
        <Layout>
            <MainContainer>
                {!user && <p className="fs22 textCenter">Veuillez vous connecter pour valider votre commande</p>}
                <CartList/>
                <div className="flexDisplay fs22">
                    <span>Total:</span><CartTotal/>
                </div>
                {count !== 0 && user && <button className="blueButton" onClick={addProduct}>Paiement du panier</button>}
                <button className="greyButton"><Link className="noLink colorWhite" to='/'>Retour</Link></button>
            </MainContainer>
        </Layout>
    )
}

export default Summary