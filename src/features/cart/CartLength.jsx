import { useSelector } from "react-redux"
import { cartLength } from "./cartSlice"


function CartLength() {
    const counter = useSelector(cartLength)

    return (
        <span>{counter}</span>
    )
}

export default CartLength