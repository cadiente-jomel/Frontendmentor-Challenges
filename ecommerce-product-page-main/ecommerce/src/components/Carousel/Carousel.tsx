import {useState} from 'react';
import * as S from './Carousel.style';
import Card from '../Card/Card';
import ProductThumbnail from './ProductThumbnail';

interface Props {
    setShowCarousel: Function
}


const handleChange = (setShowCarousel: Function) => {
    setShowCarousel(true)
}

export default (props: Props) => {
    const [imgIndex, setImgIndex] = useState(1)
    return(
        <S.CarouselContainer className="column-product-images">
            <div onClick={() => setImgIndex((prev: number) =>  prev <= 1 ? 4 : prev - 1)}
                 className="control-btn m-control-btn-left">
                <img src="/assets/images/icon-previous.svg" alt="icon-previous" />
            </div>
            <Card onClick={() => handleChange(props.setShowCarousel)} src={`/assets/images/image-product-${imgIndex}.jpg`}/>
            <ProductThumbnail setImgIndex={setImgIndex}/>
            <div onClick={() => setImgIndex((prev: number) =>  prev >= 4 ? 1 : prev + 1)} className="control-btn m-control-btn-right">
                <img src="/assets/images/icon-next.svg" alt="icon-next" />
            </div>
        </S.CarouselContainer>
    )
}