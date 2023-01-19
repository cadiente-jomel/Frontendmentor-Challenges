import {useState, useEffect} from 'react';
import styled from "styled-components";

import Card from '../Card/Card'
import { S as Styled } from './Carousel';
import ProductThumbnail from './ProductThumbnail';

interface FullCarouselStyledProps {
  isClicked: boolean,
}

interface FullCarouselComponentProps {
    carousel: boolean,
    setShowCarousel: Function
}

export const S = {
    OverlayContainer: styled.div`
        margin: 0 auto;
        height: 100vh;
        width: ${(props: FullCarouselStyledProps) => props.isClicked ? "100vw" : "0vw"};
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.9);
        overflow-x: hidden;
        transition: 0.5s;
    `,
    InnerCarouselContainer: styled.div`
        position: relative;
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    `,
    ControlCloseBtn: styled.img`     
        position: absolute;
        right: 33%;
        top: 13%;
        width: 3rem;
        z-index: 100;
    `,
    CarouselControlBtn: styled.div`
        
        background-color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        cursor: pointer;

        &:first-child {
            margin-right: 10rem;
        }

        &:last-child {
            margin-left: 10rem;
        }
    `,
    CarouselControlIcon: styled.img``,
    FullCarouselImageContainer: styled.div`
        width: 50vh;
        margin: 0 auto;
    `,
    OverlayThumbnail: styled.div`
        width: 50vh;
        margin: 2rem auto;
    `
}


export default (props: FullCarouselComponentProps) => {
    const [imgIndex, setImgIndex] = useState(1);

    const handleChange = (setShowCarousel: Function) => {
        setShowCarousel(false);
    }

    return <S.OverlayContainer isClicked={props.carousel}>
        <S.ControlCloseBtn onClick={() => handleChange(props.setShowCarousel)} src="/assets/images/icon-close.svg" alt="icon-close" />
        <S.InnerCarouselContainer>
            <S.CarouselControlBtn onClick={() => setImgIndex((prev: number) =>  prev <= 1 ? 4 : prev - 1)}>
                <S.CarouselControlIcon src="/assets/images/icon-previous.svg" alt="icon-previous" />
            </S.CarouselControlBtn>
            <Styled.CarouselContainer>
                <S.FullCarouselImageContainer>
                    <Card src={`/assets/images/image-product-${imgIndex}.jpg`}/>
                </S.FullCarouselImageContainer>
                <S.OverlayThumbnail>
                    <ProductThumbnail setImgIndex={setImgIndex}/>
                </S.OverlayThumbnail>
            </Styled.CarouselContainer>
            <S.CarouselControlBtn onClick={() => setImgIndex((prev: number) =>  prev >= 4 ? 1 : prev + 1)}>
                <S.CarouselControlIcon src="/assets/images/icon-next.svg" alt="icon-next" />
            </S.CarouselControlBtn>
        </S.InnerCarouselContainer>
    </S.OverlayContainer>
};