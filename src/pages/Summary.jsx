import { Link } from "react-router-dom"
import CartList from "../features/cart/CartList"
import CartTotal from "../features/cart/CartTotal"
import { useSelector } from "react-redux"
import { cartLength, getAllCart } from "../features/cart/cartSlice"
import { useMutation } from "@apollo/client"
import { ADD_PRODUCTS } from "../graphql/Mutations"


function Summary() {
    const count = useSelector(cartLength)
    const list = useSelector(getAllCart)
   
    const [addProduct] = useMutation(
        ADD_PRODUCTS, 
        {
            variables: {order: list },
            onCompleted: (data) => {
                window.location.href = data.validOrder.url
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