import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Menu from './components/Menu/Menu';
import Product from './components/Product/Product';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import CartCounter from './components/CartCounter/CartCounter';
import { OverlayContainer } from './components/Carousel/FullCarousel.style';
import NavigationMenu, { MobileNavigationMenu } from './components/NavigationMenu/NavigationMenu';

const showCart = () => {
  const cart: any = document.querySelector(".cart");

  cart.classList.toggle('active')
}
function App() {
  const [cartProductQuantity, setCartProductQuantity] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  return <div>
  <OverlayContainer isClicked={showOverlay}>
    <div className="navigation-menu-container">
      <img onClick={() => setShowOverlay(false)} src="/assets/images/icon-close.svg" alt="icon-close" className="m-icon-close" />
      <MobileNavigationMenu/>
    </div>
  </OverlayContainer>
  <Navigation> 
    <div className="w-full flex outer-flex-nav">
      <div className="u-margin-right-medium flex-logo">
        <img onClick={() => setShowOverlay(true)}className="icon-menu" src="/assets/images/icon-menu.svg" alt="icon-menu" />
        <img className="logo" src="/assets/images/logo.svg" alt="Logo" />
        <NavigationMenu/>
      </div>

      <div className="flex-nav relative">
          <img src="/assets/images/icon-cart-nav.svg" className="cart-btn" alt="cart-icon" onClick={showCart}/>  
          <CartCounter q={cartProductQuantity} />

          <Profile/>
          <Cart cartProductQuantity={cartProductQuantity} setCartProductQuantity={setCartProductQuantity}/>
        </div>
    </div>
  </Navigation>

  <main className="u-margin-top-large">
    <Product 
        setCartProductQuantity={setCartProductQuantity}
    />
  </main>
  </div>
}

export default App;
