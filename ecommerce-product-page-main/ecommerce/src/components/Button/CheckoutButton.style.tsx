import styled from 'styled-components';

export const CheckoutButton = styled.button` 
    background-color: var(--color-primary-darker);
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--default-font-size);
    font-weight: 700;
    margin-top: 2rem;
    color: var(--white);
    padding: 2rem;
    width: 100%;


    @media all and (max-width: 770px) {
        width: 100%;
    }

    &:hover {
        background-color: var(--color-primary-hovered);
    }
`