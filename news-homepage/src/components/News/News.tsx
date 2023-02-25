import React from 'react';
import styled from 'styled-components';

const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background-color: hsl(240, 100%, 5%);
        margin: 3rem 2rem;
        grid-area: News;

        @media all and (min-width: 1025px) {
           margin-top: 0; 
        }
    `,
    Title: styled.h2`
        color: hsl(35, 77%, 62%);
        font-size: 3rem;

    `,
    ArticleContainer: styled.div`
        padding: 3rem 0;
        cursor: pointer;

        &:hover :first-child {
            color: hsl(35, 77%, 62%);
        }

        &:not(:last-child) {
            border-bottom: 1px solid hsl(236, 13%, 42%);
        }

    `,
    ArticleTitle: styled.h3`
        color: hsl(36, 100%, 99%);
        font-size: 2rem;
        line-height: 5rem;
    `,
    ArticleSubtitle: styled.p`
        color: hsl(233, 8%, 79%);
        font-size: 1.6rem;
        line-height: 3rem;
    `
}

const News = () => {
    const news = [
        {
            id: 0,
            title: "Hydrogen VS Electric Cars",
            subtitle: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            id: 1,
            title: "The Downsides of AI Artistry",
            subtitle: "What are the possible adverse effects of on-demand AI image generation"
        },
        {
            id: 2,
            title: "Is VC Funding Drying Up?",
            subtitle: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
    ]

    return (
        <S.Container>
            <S.Title>News</S.Title>
            {
                news.map((obj) => (
                    <S.ArticleContainer key={obj.id}>
                        <S.ArticleTitle>
                            {obj.title}
                        </S.ArticleTitle>
                        <S.ArticleSubtitle>
                            {obj.subtitle}
                        </S.ArticleSubtitle>
                    </S.ArticleContainer>
                ))
            }
        </S.Container>
    )
};


export default News;