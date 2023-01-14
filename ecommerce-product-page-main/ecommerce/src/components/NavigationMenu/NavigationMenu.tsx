import Menu from '../Menu/Menu';

export default () => {
    return (
        <ul className="navigation-menu inner-nav">
          <Menu menuName="Collections"/>
          <Menu menuName="Men"/>
          <Menu menuName="Women" selected/>
          <Menu menuName="About"/>
          <Menu menuName="Contact"/>
        </ul> 
    )
}

export const MobileNavigationMenu = () => {
    return (
        <ul className="mobile-navigation-menu inner-nav">
          <Menu menuName="Collections"/>
          <Menu menuName="Men"/>
          <Menu menuName="Women" selected/>
          <Menu menuName="About"/>
          <Menu menuName="Contact"/>
        </ul> 
    )
}