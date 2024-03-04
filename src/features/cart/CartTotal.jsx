import { useSelector } from "react-redux"
import { cartTotal } from "./cartSlice"

function CartTotal() {
    const total = useSelector(cartTotal)

    return (
        <span>{total !== 0 ? `${(total/100).toFixed(2)}€` : null}</span>
    )
}

export default CartTotal