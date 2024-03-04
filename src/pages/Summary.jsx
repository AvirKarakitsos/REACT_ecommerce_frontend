import { Link } from "react-router-dom"
import CartList from "../features/cart/CartList"
import CartTotal from "../features/cart/CartTotal"
import { useSelector } from "react-redux"
import { cartLength } from "../features/cart/cartSlice"

function Summary() {
    const count = useSelector(cartLength)

    return (
        <main>
            <h1>Summary Page</h1>
            <CartList/>
            <div>
                <span>Total:</span><CartTotal/>
            </div>
            {count !== 0 && <button>Paiement du panier</button>}
            <button><Link to='/'>Retour</Link></button>
        </main>
    )
}

export default Summary