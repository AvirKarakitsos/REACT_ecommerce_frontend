import { useSelector } from "react-redux"
import { getAllList } from "./cartSlice"


function CartList() {
    const list = useSelector(getAllList)

    return (
        <div>
            <p>Liste des produits dans votre panier</p>
            <ul>{!list.length 
                ? <li>Votre panier est vide</li>
                : list.map(product => <li key={product._id}>{product.name}</li> )}
            </ul>
        </div>
    )
}

export default CartList