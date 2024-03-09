import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import CartLength from '../features/cart/CartLength';
import CartTotal from '../features/cart/CartTotal';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderSection = styled.header`
    height: 50px;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Basket = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
`

const Navbar = styled.ul`
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
`

function Header({setIsOpen}) {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token"))
    const [isDisplay, setIsDisplay] = useState(false)

    const handleLogin = function() {
        if(!!isLogin) {
            setIsLogin(localStorage.removeItem("token"))
            setIsDisplay(false)
        } 
        else navigate("/login")
    }

    return (
        <HeaderSection>
            <p>Header Part</p>
            <Basket>
                <FontAwesomeIcon icon="fa-solid fa-user" onClick={() => setIsDisplay(value => !value)} className={!!isLogin ? "colorGreen" : "colorRed"}/>
                {isDisplay && <Navbar className='noDecoration'>
                    {!!isLogin ?
                    <><li><Link to="/account">Mon compte</Link></li>
                        <li onClick={handleLogin}>Déconnexion</li>
                    </>
                    : <li><Link to="/login">Connexion</Link></li>}
                </Navbar>}
                <CartLength/>
                <FontAwesomeIcon icon="fa-solid fa-basket-shopping" onClick={() => setIsOpen(value =>!value)}/>
                <CartTotal/>
            </Basket>
        </HeaderSection>
    )
}

export default Header