import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, getAllCart } from "./cartSlice"
import styled from "styled-components"

const ListElement = styled.li`
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
`

const BasketContainer = styled.div`
    width:100%;
`

function CartList() {
    const list = useSelector(getAllCart)
    const dispatch = useDispatch()

    function deleteOneProduct(productId) {
        dispatch(deleteProduct({ productId }))
    }

    function addOneProduct(item) {
        dispatch(addProduct({
            productId: item.productId,
            name: item.name,
            unity: item.unity
        }))
    }

    return (
        <BasketContainer>
            {!list.length 
                ? <p>Votre panier est vide</p>
                : <>
                    <p>Votre panier</p>
                    <ul>{list.map(product => (
                        <ListElement key={product.productId}>
                            <span>{product.name}</span>
                            <span>{(product.unity/100).toFixed(2)}€</span>
                            <div>
                                <button className="toggleButton" onClick={() => deleteOneProduct(product.productId)}>-</button>
                                <span>{product.quantity}</span>
                                <button className="toggleButton" onClick={() => addOneProduct(product)}>+</button>
                            </div>
                        </ListElement>) )}
                    </ul>
                </>}
        </BasketContainer>
    )
}

export default CartList