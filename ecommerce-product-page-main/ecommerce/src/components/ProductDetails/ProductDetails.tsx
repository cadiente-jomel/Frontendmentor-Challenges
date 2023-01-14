import * as S from './ProductDetails.style'


export default () => (
    <div>
        <S.CompanyName className="u-margin-bottom-small">sneakers company</S.CompanyName>
        <S.ProductName className="u-margin-bottom-small">Fall Limited Edition Sneakers</S.ProductName>
        <S.ProductDetails className="u-margin-bottom-small">These low profile sneakers are your perfect wear companion. Featuring a durable rubber outer sole, They'll withstand everything the weather can offer.</S.ProductDetails>
        <S.ProductPrice className="product-price">$125.00
            <S.DiscountPercentage>50%</S.DiscountPercentage>
        </S.ProductPrice>
        <S.OldProductPrice>$250.00</S.OldProductPrice>
    </div>
)