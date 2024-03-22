import { useSelector } from "react-redux"
import { cartLength } from "./cartSlice"
import styled from "styled-components"

const Border = styled.span`
    position: absolute;
    top: -12px;
    left: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 23px;
    font-weight: 400;
    border-radius: 50%;
    background-color: blue;
    color: white;
`


function CartLength() {
    const counter = useSelector(cartLength)

    return (
        <Border>{counter}</Border>
    )
}

export default CartLength