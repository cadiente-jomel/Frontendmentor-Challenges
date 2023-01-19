// import * as S from './Cart.style';
import styled from 'styled-components';
import { S as Styled} from '../Product/Product';
import CheckoutButton  from '../Button/CheckoutButton';

interface CartComponentProps {
    cartProductQuantity: number,
    setCartProductQuantity: Function,
    isActive?: boolean,
}

interface CartComponentStyledProps {
    isMarginLeft?: boolean,
    isActive?: boolean
}

const S = {
    Cart: styled.div`
        width: 35rem;
        border-radius: 1.2rem;
        background-color: var(--white);
        box-shadow: 0 0 1rem var(--black);
        position: absolute;
        right: 10rem;
        padding: 2rem; 
        display: ${({ isActive }: CartComponentStyledProps) => isActive ? "inline-block" : "none"};
        top: 8rem;
        transition: top .5s ease;
        z-index: 100;
    
        @media all and (max-width: 770px) {
            width: 95vw;
            right: -1rem;
        }
    `,
    CartTitle: styled.h3`
        font-size: 2rem;
        border-bottom: 2px solid var(--grayish-blue);
        padding: 1rem 2rem; 
        @media all and (max-width: 770px) {
            font-size: 3rem;
        }
    `,
    Container: styled.div`
        width: 100%;
        font-size: 1.6rem;
    `,
    ItemContainer: styled.div`
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
    `,
    ItemImage: styled.img`
        width: 5rem;
        height: 5rem;
        border-radius: 5px;
    
        @media all and (max-width: 770px) {
            width: 12rem;
            height: 12rem;
        }
    `,     
    ItemDetails: styled.div`
        line-height: 2.5rem;
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        font-weight: 700;
    `,
    ItemRemove: styled.img``,

    CartFlex: styled(Styled.QuantityContainer)`
        margin-top: 0;

        @media all and (max-width: 770px) {
            flex-direction: row;
        }
    `,
    ItemName: styled.p`
        color: var(--blue); 
    `,
    ItemPriceContainer: styled.div`
        display: flex;
    `,

    Paragraph: styled.p`
        margin-left: ${({ isMarginLeft }: CartComponentStyledProps) => isMarginLeft ? "1rem" : "0"};
    `,

    Span: styled.span`
        color: var(--blue);
        letter-spacing: .2rem;
    `,
    RemoveBtnContainer: styled.div`
        margin: auto 0;
    `,

    EmptyMessage: styled.h3`  
        text-align: center;
        padding: 4rem 0;
        font-size: 3rem;
        color: var(--blue);
    `
}



const ProductItem = (props: CartComponentProps) => {
    if(props.cartProductQuantity <= 0) {
        return <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
    } else {
        return (

            <S.Container>
                <S.ItemContainer>
                    <S.CartFlex>
                        <S.ItemImage src="/assets/images/image-product-1-thumbnail.jpg"/>
                        <S.ItemDetails>
                            <S.ItemName>Fall Limited Edition...</S.ItemName>
                            <S.ItemPriceContainer>
                                <S.Paragraph>
                                    <S.Span>$125</S.Span>
                                    <S.Span>x</S.Span>
                                    <S.Span>{props.cartProductQuantity}</S.Span>
                                </S.Paragraph>
                                <S.Paragraph isMarginLeft={true}>${props.cartProductQuantity * 125}</S.Paragraph>
                            </S.ItemPriceContainer>
                        </S.ItemDetails>
                    </S.CartFlex>
                    <S.RemoveBtnContainer>
                        <S.ItemRemove src="/assets/images/icon-delete.svg" onClick={() =>props.setCartProductQuantity(0)}/> 
                    </S.RemoveBtnContainer>
                </S.ItemContainer>

                <CheckoutButton>Checkout</CheckoutButton>
            </S.Container>
        )
    }

}


export default (props: CartComponentProps) => {
    return <S.Cart isActive={props.isActive}>
        <S.CartTitle>Cart</S.CartTitle>    
        <ProductItem cartProductQuantity={props.cartProductQuantity} setCartProductQuantity={props.setCartProductQuantity} />
    </S.Cart> 
}