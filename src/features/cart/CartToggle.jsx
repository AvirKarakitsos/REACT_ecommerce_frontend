import { addProduct, deleteProduct, getAllCart } from "./cartSlice.js"
import { useDispatch, useSelector } from "react-redux"

function CartToggle({product}) {
    const dispatch = useDispatch()
    const list = useSelector(getAllCart)
    const filterProduct = list.filter(item => item.productId === product._id)


    function deleteOneProduct() {
        dispatch(deleteProduct({ productId: product._id }))
    }

    function addOneProduct() {
        dispatch(addProduct({
            productId: product._id,
            name: product.name,
            unity: product.unity
        }))
    }

    return (
        filterProduct.length !== 0
            ? <div>
                <button className="toggleButton" onClick={deleteOneProduct}>-</button>
                <span>{filterProduct[0].quantity}</span>
                <button className="toggleButton" onClick={addOneProduct}>+</button>
            </div>
            : <button className="validButton" onClick={addOneProduct}>Ajouter au panier</button>
    )
}

export default CartToggle