import { useSelector } from "react-redux"
import { cartLength } from "./cartSlice"


function CartLength() {
    const counter = useSelector(cartLength)

    return (
        <div>{counter}</div>
    )
}

export default CartLength