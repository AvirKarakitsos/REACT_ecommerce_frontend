import { addProduct, deleteProduct, getAllCart } from "./cartSlice.js"
import { useDispatch, useSelector } from "react-redux"

function CartToggle({product}) {
    const dispatch = useDispatch()
    const list = useSelector(getAllCart)
    const filterProduct = list.filter(item => item.id === product._id)


    function deleteOneProduct() {
        dispatch(deleteProduct({ id: product._id }))
    }

    function addOneProduct() {
        dispatch(addProduct({
            id: product._id,
            name: product.name,
            unity: product.unity
        }))
    }

    return (
        filterProduct.length !== 0
            ? <div>
                <button onClick={deleteOneProduct}>-</button>
                <span>{filterProduct[0].quantity}</span>
                <button onClick={addOneProduct}>+</button>
            </div>
            : <button onClick={addOneProduct}>Ajouter au panier</button>
    )
}

export default CartToggle