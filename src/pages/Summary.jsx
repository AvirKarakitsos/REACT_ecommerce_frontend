import { Link, useNavigate } from "react-router-dom"
import CartList from "../features/cart/CartList"
import CartTotal from "../features/cart/CartTotal"
import { useSelector } from "react-redux"
import { cartLength, getAllCart } from "../features/cart/cartSlice"
import { useMutation } from "@apollo/client"
import { ADD_PRODUCTS } from "../graphql/Mutations"


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
        <main>
            <h1>Summary Page</h1>
            <CartList/>
            <div>
                <span>Total:</span><CartTotal/>
            </div>
            {count !== 0 && <button onClick={addProduct}>Paiement du panier</button>}
            <button><Link to='/'>Retour</Link></button>
        </main>
    )
}

export default Summary