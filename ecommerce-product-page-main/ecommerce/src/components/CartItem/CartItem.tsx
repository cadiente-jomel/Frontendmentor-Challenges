import * as S from './CartItem.style';

interface Props {
    productQuantity: number,
    total: number
}

const removeItem = () => {
    const item = document.querySelector(".cart")?.children[1];
    item?.remove();
    document.querySelector('.empty')?.classList.remove('empty--hide');

} 


export default (props: Props) => (
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
                            <span className="quantity">{props.productQuantity}</span>
                        </p>
                        <p className="total u-margin-left-small">${props.total}</p>
                    </div>
                </S.ItemDetails>
            </div>
            <div className="remove-btn-container">
                <S.ItemRemove src="/assets/images/icon-delete.svg" onClick={removeItem}/> 
            </div>
        </S.ItemContainer>
    </S.Container>
)