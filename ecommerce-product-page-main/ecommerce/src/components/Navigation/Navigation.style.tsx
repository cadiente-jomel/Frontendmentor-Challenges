import styled from 'styled-components';

export const Navigation = styled.nav` 
    background-color: var(--white);
    height: 10rem;
    width: 100%;
    border-bottom: 2px solid var(--grayish-blue);
    display: flex;
    align-items: center;
    padding: 0 7rem;
    z-index: 100;

    @media all and (max-width: 770px) {
        padding: 0 1rem;
    }
`

