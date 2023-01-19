import styled from 'styled-components';

const S = {
    Navigation: styled.nav` 
        background-color: var(--white);
        height: 10rem;
        width: 100%;
        border-bottom: 2px solid var(--grayish-blue);
        display: flex;
        align-items: center;
        padding: 0 7rem;
        z-index: 100;

        @media all and (max-width: 770px) {
            border-bottom: none;
            padding: 0 1rem;
        }
    `
}


export default S.Navigation;