import React from 'react';
import styled from 'styled-components';

import Gaming from '../../assets/images/image-gaming-growth.jpg';
import Retro from '../../assets/images/image-retro-pcs.jpg';
import Laptop from '../../assets/images/image-top-laptops.jpg';

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column; 
        padding: 0 2rem;
        gap: 2rem;
        grid-area: Top;
        margin: 4rem 0;

        @media all and (min-width: 1025px) {
            flex-direction: row;
            justify-content: space-between;
        }
    `,
    Card: styled.div`
        display: flex; 
        gap: 2rem;
        cursor: pointer;

        &:hover :last-child :first-child{
            color: hsl(5, 85%, 63%);
        }

        &:hover img {
            transform: scale(1.1);
        }

        @media all and (min-width: 1025px) {
            align-items: center;
        }
    `,
    Thumbnail: styled.img`
        width: 10rem;
        object-fit: cover;
        transition: all .2s ease;
    `,
    NewsContentContainer: styled.div``,
    Top: styled.h3`
        color: hsl(233, 8%, 79%);
        font-size: 3rem;
    `,
    NewsTitle: styled.p`
        font-size: 2rem;
        font-weight: 700; 
    `,
    NewsSubtitle: styled.p`
        color: hsl(236, 13%, 42%);
        font-size: 1.6rem;
    `,
}


const TopNews = () => {
    const topNews = [
        {
            id: 0,
            top: "01",
            image: Retro,
            title: "Reviving Retro PCs",
            subtitle: "What happens when odl PCs are given modern upgrades?"
        },
        {
            id: 1,
            top: "02",
            image: Laptop,
            title: "Top 10 Laptops of 2022",
            subtitle: "Our best picks for various needs and budgets."
        },
        {
            id: 2,
            top: "03",
            image: Gaming,
            title: "The Growth of Gaming",
            subtitle: "How the pandemic has sparked fresh opportunities."
        }
    ]

    return (
        <S.Container>
            {
                topNews.map((obj) => (
                    <S.Card>
                        <S.Thumbnail src={obj.image}/>
                        <S.NewsContentContainer>
                            <S.Top>{obj.top}</S.Top>
                            <S.NewsTitle>{obj.title}</S.NewsTitle>
                            <S.NewsSubtitle>{obj.subtitle}</S.NewsSubtitle>
                        </S.NewsContentContainer>
                    </S.Card>
                ))
            }
        </S.Container>
    )
};

export default TopNews;