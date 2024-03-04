import styled from "styled-components"
import CartToggle from "../features/cart/CartToggle"


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
    return (
        <ArticleComponent>
            <img height={300} width={300} src="https://placehold.co/300"/>
            <SectionFlexbox>
                <h2>{product.name}</h2> 
                <p><span>{(product.unity/100).toFixed(2)}€</span></p>
            </SectionFlexbox>
            <CartToggle product={product}/>
        </ArticleComponent>
    )
}

export default Article