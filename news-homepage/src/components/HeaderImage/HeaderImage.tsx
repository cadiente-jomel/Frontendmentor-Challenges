import React from 'react';
import styled from 'styled-components';
import HeaderImageMobile from '../../assets/images/image-web-3-mobile.jpg';
import HeaderImageDesktop from '../../assets/images/image-web-3-desktop.jpg';


const S = {
    Container: styled.div`
        padding: 0 2rem;
        display: flex; 
        flex-direction: column;
        gap: 2rem;
        grid-area: HeaderArea;
    `,

    Picture: styled.picture``,
    Source: styled.source``,

    Image: styled.img`
        object-fit: cover;
        width: 100%;
    `,
    HeaderContentContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;

    `,

    HeaderContentInnerContainer: styled.div`
        /* @media all and (min-width: 769px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-basis: 60%;
        }  */
    `,

    HeaderTitle: styled.h1`
        font-size: 5rem; 
        font-weight: 800;
        line-height: 6rem;
        /* flex-basis: 40%; */
    `,
    HeaderSubtitle: styled.p`
        color: hsl(236, 13%, 42%);
        font-size: 1.6rem;
        letter-spacing: 1px; 
        margin-bottom: 2rem;
    `,
    HeaderButton: styled.button`
        background-color: hsl(5, 85%, 63%);
        border: none;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 1.5rem 3.5rem;
        transition: all .2s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-5px);
            background-color: hsl(240, 100%, 5%);
        }

        &:active {
            transform: translateY(0);
        }


        /* @media all and (min-width: 769px) {
            width: 20rem;
        } */
    `
}

const HeaderImage = () => {
    return (
        <S.Container>
            <S.Picture>
                <S.Source media="(min-width: 769px)" srcSet={HeaderImageDesktop} />
                <S.Image src={HeaderImageMobile}/>
            </S.Picture>
            <S.HeaderContentContainer>
                <S.HeaderTitle>
                    The Bright Future of Web 3.0?
                </S.HeaderTitle>
                <S.HeaderContentInnerContainer>
                    <S.HeaderSubtitle>
                        We dive into the next evolution of the web that
                        claims to put the power of the platforms back 
                        into the hands of the people but is it really 
                        fulfilling its promise?
                    </S.HeaderSubtitle>
                    <S.HeaderButton>Read more</S.HeaderButton>
                </S.HeaderContentInnerContainer>
            </S.HeaderContentContainer>
        </S.Container>
    )
};

export default HeaderImage