import {useState, useEffect} from 'react';
import * as S from './FullCarousel.style';
import { CarouselContainer } from './Carousel.style';
import Card from '../Card/Card'
import ProductThumbnail from './ProductThumbnail';

const handleChange = (setShowCarousel: any) => {
    setShowCarousel(false);
}

export default (props: any) => {
    const [imgIndex, setImgIndex] = useState(1);
    return <S.OverlayContainer isClicked={props.carousel}>
        <img onClick={() => handleChange(props.setShowCarousel)} className="control-close" src="/assets/images/icon-close.svg" alt="icon-close" />
        <S.InnerCarouselContainer>
            <div onClick={() => setImgIndex((prev: any) =>  prev <= 1 ? 4 : prev - 1)}
                 className="control-btn">
                <img src="/assets/images/icon-previous.svg" alt="icon-previous" />
            </div>
            <CarouselContainer>
                <Card src={`/assets/images/image-product-${imgIndex}.jpg`}/>
                <ProductThumbnail setImgIndex={setImgIndex}/>
            </CarouselContainer>
            <div onClick={() => setImgIndex((prev: any) =>  prev >= 4 ? 1 : prev + 1)} className="control-btn">
                <img src="/assets/images/icon-next.svg" alt="icon-next" />
            </div>
        </S.InnerCarouselContainer>
    </S.OverlayContainer>
};