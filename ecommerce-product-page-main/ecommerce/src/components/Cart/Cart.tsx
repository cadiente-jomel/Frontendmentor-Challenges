import {useState} from 'react';
import * as S from './Cart.style';
import CartItem from '../CartItem/CartItem';
import { CheckoutButton } from '../Button/CheckoutButton.style';

interface Props {
    cartProductQuantity: number,
    setCartProductQuantity: Function
}

const ProductItem = (props: Props) => {
    if(props.cartProductQuantity <= 0) {
        return <h3 className="empty">Your cart is empty</h3>
    } else {
        return (

            <S.Container>
                <S.ItemContainer>
                    <div className="cart-flex">
                        <S.ItemImage src="/assets/images/image-product-1-thumbnail.jpg"/>
                        <S.ItemDetails>
                            <p className="item-name">Fall Limited Edition...</p>
                            <div className="item-price">
                                <p>
                                    <span className="price">$125</span>
                                    <span className="multiply">x</span>
                                    <span className="quantity">{props.cartProductQuantity}</span>
                                </p>
                                <p className="total u-margin-left-small">${props.cartProductQuantity * 125}</p>
                            </div>
                        </S.ItemDetails>
                    </div>
                    <div className="remove-btn-container">
                        <S.ItemRemove src="/assets/images/icon-delete.svg" onClick={() =>props.setCartProductQuantity(0)}/> 
                    </div>
                </S.ItemContainer>

                <CheckoutButton>Checkout</CheckoutButton>
            </S.Container>
        )
    }

}


export default (props: Props) => {

    return <S.Cart className="cart">
        <S.CartTitle>Cart</S.CartTitle>    
        <ProductItem cartProductQuantity={props.cartProductQuantity} setCartProductQuantity={props.setCartProductQuantity} />
    </S.Cart> 
}