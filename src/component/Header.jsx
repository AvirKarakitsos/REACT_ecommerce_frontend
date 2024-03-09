import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import CartLength from '../features/cart/CartLength';
import CartTotal from '../features/cart/CartTotal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

function Header({setIsOpen}) {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token"))

    const handleLogin = function() {
        if(!!isLogin) setIsLogin(localStorage.removeItem("token"))
        else navigate("/login")
    }

    return (
        <HeaderSection>
            <p>Header Part</p>
            <Basket>
                <FontAwesomeIcon icon="fa-solid fa-user" onClick={handleLogin} className={!!isLogin ? "colorGreen" : "colorRed"}/>
                <CartLength/>
                <FontAwesomeIcon icon="fa-solid fa-basket-shopping" onClick={() => setIsOpen(value =>!value)}/>
                <CartTotal/>
            </Basket>
        </HeaderSection>
    )
}

export default Header