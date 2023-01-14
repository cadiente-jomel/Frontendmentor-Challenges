import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 2rem;

    @media all and (max-width: 770px) {
        display: none;
    }
`;


export const ImageThumbnail = styled.img`
    width: 9rem; 
    border-radius: 2rem;
    &:hover {
        filter: opacity(.7);
    }
`


