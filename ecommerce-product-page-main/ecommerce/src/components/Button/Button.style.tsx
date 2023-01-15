import styled from 'styled-components';


export const Button = styled.button`
    background-color: var(--color-primary-darker);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--default-font-size);
    font-weight: 700;
    color: var(--white);
    padding: 2rem;
    width: 60%;


    @media all and (max-width: 770px) {
        width: 100%;
    }

    &:hover {
        background-color: var(--color-primary-hovered);
    }
`