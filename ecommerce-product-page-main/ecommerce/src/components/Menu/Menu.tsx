import styled from 'styled-components';
// import * as S from './Menu.style';

interface MenuComponentProps {
    menuName: string,
}



const S = {
    Menu: styled.li`
        list-style-type: none; 
        height: 5rem;
        &::after {
            border-bottom: 5px solid var(--color-primary-darker); 
            content: "";
            display: block;
            margin-top: 3.6rem;
            transition: all .2s ease;
            width: 0;
        }

        &:hover::after {
            width: 100%;
        }

        &:not(:last-child) {
            margin-right: 3rem;
        }

        @media all and (max-width: 770px) {
            font-size: 2rem;

            &::after {
                margin-top: 1rem;
            }
        }
    `,
    MenuAnchor: styled.a`
        text-decoration: none;
        color: var(--black); 
    `
}


export default (props: MenuComponentProps) => (
    <S.Menu>
        {props.menuName}
    </S.Menu>
);