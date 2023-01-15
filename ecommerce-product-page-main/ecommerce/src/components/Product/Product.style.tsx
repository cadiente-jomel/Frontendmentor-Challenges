import styled from 'styled-components';


export const Row = styled.div`
    display: flex;
    justify-content: center;
    /* margin: 0 auto; */
    max-width: var(--grid-width);
    gap: 10rem;

    @media all and (max-width: 770px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const Column = styled.div``