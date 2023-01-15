import styled from 'styled-components';

export const CompanyName = styled.p`
    text-transform: uppercase;
    color: var(--color-primary-darker);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 3px;
`

export const ProductName = styled.h1`
    font-size: 3rem;

    @media all and (max-width: 770px) {
        font-size: 3rem;
    }
`

export const ProductDetails = styled.p`
    color: var(--blue);
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3rem;
`

export const ProductPrice = styled.h3`
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    align-items: center
`

export const DiscountPercentage = styled.span`
    background-color: var(--color-primary-lighter);
    color: var(--color-primary-darker);
    font-weight: 700;
    border-radius: 10px;
    margin-left: 2rem;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    @media all and (max-width: 770px) {
        font-size: 1.7rem;
    }
`

export const OldProductPrice = styled.p`
    color: var(--blue);
    text-decoration: line-through;    
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 5px;
    @media all and (max-width: 770px) {
        font-size: 2rem;
    }
`