import {useState, useEffect} from 'react';
import * as S from './FullCarousel.style';
import { CarouselContainer } from './Carousel.style';
import Card from '../Card/Card'
import ProductThumbnail from './ProductThumbnail';

interface Props {
    carousel: boolean,
    setShowCarousel: Function
}

const handleChange = (setShowCarousel: Function) => {
    setShowCarousel(false);
}

export default (props: Props) => {
    const [imgIndex, setImgIndex] = useState(1);
    return <S.OverlayContainer isClicked={props.carousel}>
        <img onClick={() => handleChange(props.setShowCarousel)} className="control-close" src="/assets/images/icon-close.svg" alt="icon-close" />
        <S.InnerCarouselContainer>
            <div onClick={() => setImgIndex((prev: number) =>  prev <= 1 ? 4 : prev - 1)}
                 className="control-btn">
                <img src="/assets/images/icon-previous.svg" alt="icon-previous" />
            </div>
            <CarouselContainer>
                <div className="full-carousel-image-container">
                    <Card src={`/assets/images/image-product-${imgIndex}.jpg`}/>
                </div>
                <div className="overlay-thumbnail">
                    <ProductThumbnail setImgIndex={setImgIndex}/>
                </div>
            </CarouselContainer>
            <div onClick={() => setImgIndex((prev: number) =>  prev >= 4 ? 1 : prev + 1)} className="control-btn">
                <img src="/assets/images/icon-next.svg" alt="icon-next" />
            </div>
        </S.InnerCarouselContainer>
    </S.OverlayContainer>
};