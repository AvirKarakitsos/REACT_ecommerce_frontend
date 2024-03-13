import styled from 'styled-components';
import CartTotal from '../features/cart/CartTotal';
import CartLength from '../features/cart/CartLength';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderSection = styled.header`
    height: 75px;
    padding: 0 100px;
    display: flex;
    justify-content: right;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const Navbar = styled.section`
    width: 150px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Basket = styled.ul`
    position: absolute;
    top: 48px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

function Header({setIsOpen}) {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(localStorage.getItem("token"))
    const [isDisplay, setIsDisplay] = useState(false)

    const handleLogout = function() {
        setIsLogin(localStorage.removeItem("token"))
        setIsDisplay(false)
        navigate("/")

    }

    return (
        <HeaderSection>
            <Navbar>
                <FontAwesomeIcon icon="fa-solid fa-user" onClick={() => setIsDisplay(value => !value)} className={!!isLogin ? "colorGreen fs22" : "colorRed fs22"}/>
                    {isDisplay && <Basket className='noDecoration'>
                        {!!isLogin ?
                        <><li className='borderSquare'><Link className='noLink colorBlack' to="/account">Mon compte</Link></li>
                            <li className='borderSquare' onClick={handleLogout}>Déconnexion</li>
                        </>
                        : <li className='borderSquare'><Link className='noLink colorBlack' to="/login">Connexion</Link></li>}
                    </Basket>}
                    <div className='flexDisplay'>
                        <CartLength/>
                        <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='fs22' onClick={() => setIsOpen(value =>!value)}/>
                        <CartTotal/>
                    </div>
            </Navbar>
        </HeaderSection>
    )
}

export default Header