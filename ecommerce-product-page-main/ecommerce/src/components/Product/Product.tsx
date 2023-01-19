import { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import FullCarousel from '../Carousel/FullCarousel';
import ProductDetails from '../ProductDetails/ProductDetails';
import Quantiy from '../Quantity/Quantity';

interface ProductComponentProps {
    setCartProductQuantity: Function
}

interface StyledProps {
    isProductDetails?: boolean,
}

export const S = {
    Row: styled.div`
        display: flex;
        justify-content: center;
        max-width: var(--grid-width);
        gap: 10rem;

        @media all and (max-width: 770px) {
            flex-direction: column;
            gap: 2rem; 
        }
    `,
    Column: styled.div`
        width: 40%;
        margin-top: ${({ isProductDetails }: StyledProps) => isProductDetails ? "5rem" : 0};
        display: ${({ isProductDetails }: StyledProps) => isProductDetails ? "block": "flex"};
        justify-content: ${({ isProductDetails }: StyledProps) => isProductDetails ? "initial": "center"};

        @media all and (max-width: 770px) {
            width: 100%;
        }
    `,
    QuantityContainer: styled.div`
        align-items: center;
        cursor: pointer;
        display: flex;  
        justify-content: space-between;
        gap: 2rem;
        margin-top: 5rem;
        -webkit-box-align: center;
        -webkit-box-pack: justify;

        @media all and (max-width: 770px) {
            flex-direction: column;
        }
    `,
    CartIcon: styled.img``,
    CartText: styled.span`
       margin-left: 1rem;
    `
}

export default (props: ProductComponentProps) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [quantityCounter, setQuantityCounter] = useState(0)

    const AddCartComponent = () => {
        if(Number(quantityCounter) == 0) {
            alert("Nothing to add")
            return
        }
        props.setCartProductQuantity((prev: number) => prev + Number(quantityCounter));
    }
    return (
    <S.Row>
        <FullCarousel carousel={showCarousel} setShowCarousel={setShowCarousel}/>
        <S.Column isProductDetails={false}>
            <Carousel setShowCarousel={setShowCarousel}/>
        </S.Column>
        <S.Column isProductDetails={true}>
            <ProductDetails/>  
            <S.QuantityContainer>
                <Quantiy counter={quantityCounter} setCounter={setQuantityCounter}/>
                <Button onClick={AddCartComponent}>
                    <S.CartIcon src="/assets/images/icon-cart.svg" alt="icon-cart"/>
                    <S.CartText>Add to cart</S.CartText>
                </Button> 
            </S.QuantityContainer>
        </S.Column>
    </S.Row>
    )
}