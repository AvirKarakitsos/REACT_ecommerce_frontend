import CartList from "../features/cart/CartList.jsx"
import CartTotal from "../features/cart/CartTotal.jsx"
import styled from 'styled-components'

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
    return (
        isOpen 
        && <AsideComponent>
            <CartList/>
            <div>
                <span>Total:</span>
                <CartTotal/>
            </div>
            <button>Valider le panier</button>
        </AsideComponent>
    )
}

export default Aside