import styled from 'styled-components';

const S = {
    ProductCard: styled.img`
        width: 100%;
        border-radius: 2rem; 

        @media all and (max-width: 770px) {
            border-radius: 0;
            pointer-events: none;
        }
    `
}


export default S.ProductCard;