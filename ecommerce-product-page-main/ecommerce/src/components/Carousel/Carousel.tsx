import {useState} from 'react';
import * as S from './Carousel.style';
import Card from '../Card/Card';
import ProductThumbnail from './ProductThumbnail';

const handleChange = (setShowCarousel: any) => {
    setShowCarousel(true)
}

export default (props: any) => {
    const [imgIndex, setImgIndex] = useState(1)
    return(
        <S.CarouselContainer className="column-product-images">
            <div onClick={() => setImgIndex((prev: any) =>  prev <= 1 ? 4 : prev - 1)}
                 className="control-btn m-control-btn-left">
                <img src="/assets/images/icon-previous.svg" alt="icon-previous" />
            </div>
            <Card onClick={() => handleChange(props.setShowCarousel)} src={`/assets/images/image-product-${imgIndex}.jpg`}/>
            <ProductThumbnail setImgIndex={setImgIndex}/>
            <div onClick={() => setImgIndex((prev: any) =>  prev >= 4 ? 1 : prev + 1)} className="control-btn m-control-btn-right">
                <img src="/assets/images/icon-next.svg" alt="icon-next" />
            </div>
        </S.CarouselContainer>
    )
}