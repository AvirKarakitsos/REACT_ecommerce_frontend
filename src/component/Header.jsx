import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import CartLength from '../features/cart/CartLength';

const HeaderSection = styled.header`
    height: 50px;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Basket = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
`

function Header() {
    return (
        <HeaderSection>
            <p>Header Part</p>
            <Basket>
                <CartLength/>
                <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />
            </Basket>
        </HeaderSection>
    )
}

export default Header