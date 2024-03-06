import { useDispatch, useSelector } from "react-redux"
import CartList from "../features/cart/CartList.jsx"
import CartTotal from "../features/cart/CartTotal.jsx"
import styled from 'styled-components'
import { cartLength, emptyCart } from "../features/cart/cartSlice.js"
import { Link } from "react-router-dom"

const AsideComponent = styled.aside`
    width: 500px;
    padding: 100px 50px;
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    background-color: white;
`


function Aside({isOpen}) {
    const counter = useSelector(cartLength)
    const dispatch = useDispatch()

    return (
        isOpen 
        && <AsideComponent>
            <CartList/>
            <div>
                <span>Total:</span>
                <CartTotal/>
                {counter !== 0 && <button onClick={() => dispatch(emptyCart())}>Vider le panier</button>}
            </div>
            {counter !== 0 && <button><Link to="/cart">Valider le panier</Link></button>}
        </AsideComponent>
    )
}

export default Aside