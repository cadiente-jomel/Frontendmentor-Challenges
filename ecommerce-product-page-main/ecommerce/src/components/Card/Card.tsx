import styled from 'styled-components';

const S = {
    ProductCard: styled.img`
        width: 100%;
        pointer-events: none;
        
        @media all and (min-width: 770px) {
            pointer-events: auto;
            border-radius: 2rem;
        }
    `
}


export default S.ProductCard;