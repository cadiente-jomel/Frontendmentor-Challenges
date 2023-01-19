import {useState} from 'react';
import styled from 'styled-components';

import Cart from './components/Cart/Cart';
import CartCounter from './components/CartCounter/CartCounter';
import Navigation from './components/Navigation/Navigation';
import NavigationMenu, { MobileNavigationMenu } from './components/NavigationMenu/NavigationMenu';
import { S as OverlayStyled } from './components/Carousel/FullCarousel';
import Product from './components/Product/Product';
import Profile from './components/Profile/Profile';
import { S as Styled } from './components/Product/Product';

const S = {
  MainContainer: styled.main`
    margin-top: 8rem;
    display: flex;
    justify-content: center;
  `,
  NavigationMenuContainer: styled.div` 
    background-color: var(--white);
    height: 100%;
    width: 60%;
    border-bottom: 2px solid var(--grayish-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 7rem;
    z-index: 100;
    position: relative;
  `,
  MobileCloseIcon: styled.img` 
    position: absolute;
    left: 2rem;
    top: 2rem;
    width: 2rem;
  `,
  IconMenu: styled.img` 
    display: none;

    @media all and (max-width: 770px) {
      display: inline-block;
    }
  `,
  Logo: styled.img` 
    width: 23%;
    @media all and (max-width: 770px) {
      width: 100%;
    }
  `,
  LogoContainer: styled(Styled.QuantityContainer)`
    margin-top: 0;
    margin-right: 8rem; 

    @media all and (max-width: 770px) {
      flex-direction: row;
    }
  `,
  OuterNavigationContainer: styled(Styled.QuantityContainer)`
    width: 100%;
    margin-top: 0;

    @media all and (max-width: 770px) {
      flex-direction: row;
    }
  `,
  CartBtn: styled.img``,
  CartProfileContainer: styled(Styled.QuantityContainer)`
    margin-top: 0;
    position: relative;

    @media all and (max-width: 770px) {
      flex-direction: row;
    }
  `
}


function App() {
  const [cartProductQuantity, setCartProductQuantity] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleChange = () => {
    setShowCart(!showCart);
  }
  return <div>
  <OverlayStyled.OverlayContainer isClicked={showOverlay}>
    <S.NavigationMenuContainer>
      <S.MobileCloseIcon onClick={() => setShowOverlay(false)} src="/assets/images/icon-close.svg" alt="icon-close"/>
      <MobileNavigationMenu/>
    </S.NavigationMenuContainer>
  </OverlayStyled.OverlayContainer>
  <Navigation> 
    <S.OuterNavigationContainer>
      <S.LogoContainer>
        <S.IconMenu onClick={() => setShowOverlay(true)} src="/assets/images/icon-menu.svg" alt="icon-menu" />
        <S.Logo src="/assets/images/logo.svg" alt="Logo" />
        <NavigationMenu/>
      </S.LogoContainer>

      <S.CartProfileContainer>
          <S.CartBtn src="/assets/images/icon-cart-nav.svg" alt="cart-icon" onClick={handleChange}/>  
          <CartCounter q={cartProductQuantity} />

          <Profile/>
          <Cart isActive={showCart} cartProductQuantity={cartProductQuantity} setCartProductQuantity={setCartProductQuantity}/>
        </S.CartProfileContainer>
    </S.OuterNavigationContainer>
  </Navigation>

  <S.MainContainer>
    <Product 
        setCartProductQuantity={setCartProductQuantity}
    />
  </S.MainContainer>
  </div>
}

export default App;
