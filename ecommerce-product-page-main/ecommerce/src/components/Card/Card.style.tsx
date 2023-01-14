import styled from 'styled-components';
import { isPropertySignature } from 'typescript';


export const ProductCard = styled.img`
    width: 100%;
    border-radius: 2rem; 

    @media all and (max-width: 770px) {
        border-radius: 0;
    }
`;