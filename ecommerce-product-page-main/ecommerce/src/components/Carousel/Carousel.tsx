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
        <S.CarouselContainer>
            <Card onClick={() => handleChange(props.setShowCarousel)} src={`/assets/images/image-product-${imgIndex}.jpg`}/>
            <ProductThumbnail setImgIndex={setImgIndex}/>
        </S.CarouselContainer>
    )
}