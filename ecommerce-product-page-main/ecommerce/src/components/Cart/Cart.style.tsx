import styled, { keyframes }from 'styled-components';
export const Cart = styled.div`
    width: 35rem;
    border-radius: 1.2rem;
    background-color: var(--white);
    box-shadow: 0 0 1rem var(--black);
    position: absolute;
    display: none;
    top: -17rem;
    right: 10rem;
    padding: 2rem;

    @media all and (max-width: 770px) {
        width: 95vw;
        right: -1rem;
    }
`


export const CartTitle = styled.h3`
    font-size: 2rem;
    border-bottom: 2px solid var(--grayish-blue);
    padding: 1rem 2rem; 
    @media all and (max-width: 770px) {
        font-size: 3rem;
    }
`

export const Container = styled.div`
    width: 100%;
    font-size: 1.6rem;
`

export const ItemContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ItemImage = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 5px;

    @media all and (max-width: 770px) {
        width: 12rem;
        height: 12rem;
    }
`
    
export const ItemDetails = styled.div`
    line-height: 2.5rem;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    font-weight: 700;
`

export const ItemRemove = styled.img``
