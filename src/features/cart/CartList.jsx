import { useSelector } from "react-redux"
import { getAllCart } from "./cartSlice"
import { useEffect } from "react"


function CartList() {
    const list = useSelector(getAllCart)

    useEffect(()=> {
        console.log(list)
    },[list])

    return (
        <div>
            <p>Liste des produits dans votre panier</p>
            <ul>{!list.length 
                ? <li>Votre panier est vide</li>
                : list.map(product => <li key={product.id}>{product.name}<span>{product.quantity}</span></li> )}
            </ul>
        </div>
    )
}

export default CartList