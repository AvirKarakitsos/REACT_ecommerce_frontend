import styled from "styled-components"
import CartToggle from "../features/cart/CartToggle"
import { formatPrice } from "../utils/common"


const ArticleComponent = styled.article`
    width: 100%;
    max-width: 420px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
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
                <h2 className="title2">{product.name}</h2> 
                <p className="fs22">{formatPrice(product.unity)}</p>
            </SectionFlexbox>
            <CartToggle product={product}/>
        </ArticleComponent>
    )
}

export default Article