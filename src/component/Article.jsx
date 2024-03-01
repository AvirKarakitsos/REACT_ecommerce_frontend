import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addProduct, getAllCart } from "../features/cart/cartSlice"

const ArticleComponent = styled.article`
    width: 100%;
    max-width: 420px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`

const SectionFlexbox = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Article({product}) {
    const dispatch = useDispatch()
    const quantity = useSelector(getAllCart)

    function handleProduct() {
        dispatch(addProduct({
            id: product._id,
            name: product.name,
            unity: product.unity
        }))
    }

    return (
        <ArticleComponent>
            <img src="https://placehold.co/300"/>
            <SectionFlexbox>
                <h2>{product.name}</h2> 
                <p><span>{(product.unity/100).toFixed(2)}€</span></p>
            </SectionFlexbox>
            <div>{quantity[product.id]}</div>
            <button onClick={handleProduct}>Ajouter au panier</button>
        </ArticleComponent>
    )
}

export default Article