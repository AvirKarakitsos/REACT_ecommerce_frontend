import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, getAllCart } from "./cartSlice"
import styled from "styled-components"

const ListElement = styled.li`
    display: flex;
    justify-content: space-between;
`

function CartList() {
    const list = useSelector(getAllCart)
    const dispatch = useDispatch()

    function deleteOneProduct(productId) {
        dispatch(deleteProduct({ id: productId}))
    }

    function addOneProduct(item) {
        dispatch(addProduct({
            id: item.id,
            name: item.name,
            unity: item.unity
        }))
    }

    return (
        <div>
            {!list.length 
                ? <p>Votre panier est vide</p>
                : <>
                    <p>Votre panier</p>
                    <ul>{list.map(product => (
                        <ListElement key={product.id}>
                            <span>{product.name}</span>
                            <span>{(product.unity/100).toFixed(2)}€</span>
                            <div>
                                <button onClick={() => deleteOneProduct(product.id)}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => addOneProduct(product)}>+</button>
                            </div>
                        </ListElement>) )}
                    </ul>
                </>}
        </div>
    )
}

export default CartList