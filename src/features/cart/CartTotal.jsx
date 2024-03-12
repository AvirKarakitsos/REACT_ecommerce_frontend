import { useSelector } from "react-redux"
import { cartTotal } from "./cartSlice"
import { formatPrice } from "../../utils/common"

function CartTotal() {
    const total = useSelector(cartTotal)

    return (
        <span>{total !== 0 ? `${formatPrice(total)}` : "0€"}</span>
    )
}

export default CartTotal