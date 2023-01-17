import { useState } from 'react';
import * as S from './Product.style';
import Card from '../Card/Card';
import ProductDetails from '../ProductDetails/ProductDetails';
import Button from '../Button/Button';
import Quantiy from '../Quantity/Quantity';
import CartItem from '../CartItem/CartItem';
import Carousel from '../Carousel/Carousel';
import FullCarousel from '../Carousel/FullCarousel';


interface Props {
    setCartProductQuantity: Function
}

export default (props: Props) => {
    const [showCarousel, setShowCarousel] = useState(false);

    const AddCartComponent = () => {
        const quantity = document.querySelector('.quantity-counter');

        if(Number(quantity?.textContent) == 0) {
            alert("Nothing to add")
            return
        }
        props.setCartProductQuantity((prev: number) => prev + Number(quantity?.textContent));
    }
    return (
    <S.Row>
        <FullCarousel carousel={showCarousel} setShowCarousel={setShowCarousel}/>
        <S.Column className="column-product-container">
            <Carousel setShowCarousel={setShowCarousel}/>
        </S.Column>
        <S.Column className="u-margin-top-medium column-product-details">
            <ProductDetails/>  
            <div className="flex u-margin-top-medium">
                <Quantiy />
                <Button onClick={AddCartComponent}>
                    <img src="/assets/images/icon-cart.svg" alt="icon-cart" /> 
                    <span className="u-margin-left-small">Add to cart</span>
                </Button> 
            </div>
        </S.Column>
    </S.Row>
    )
}