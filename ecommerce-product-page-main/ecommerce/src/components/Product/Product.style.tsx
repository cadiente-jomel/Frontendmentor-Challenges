import styled from 'styled-components';


export const Row = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: var(--grid-width);
    gap: 30rem;

    @media all and (max-width: 770px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const Column = styled.div``