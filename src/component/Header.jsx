import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const HeaderSection = styled.header`
    height: 50px;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return (
        <HeaderSection>
            <p>Header Part</p>
            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />
        </HeaderSection>
    )
}

export default Header