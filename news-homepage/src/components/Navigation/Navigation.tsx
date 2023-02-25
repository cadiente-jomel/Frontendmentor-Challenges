import React, { useState } from 'react';
import styled from 'styled-components';

import IconMenu from '../../assets/images/icon-menu.svg';
import IconClose from '../../assets/images/icon-menu-close.svg';
import Logo from '../../assets/images/logo.svg';

interface NavigationStyleProps {
  isActive?: boolean
}

const S = {
  Overlay: styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: flex-end;
    opacity: ${({ isActive }: NavigationStyleProps) => isActive ? "1" : "0"};
    transition: all .2s ease;
    pointer-events: ${({ isActive }: NavigationStyleProps) => isActive ? "auto" : "none"};
    cursor: pointer;
    
    @media all and (min-width: 769px) {
      display: none;
    }
  `,

  Navigation: styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%; 
    padding: 2rem 2.5rem;
  `,

  MobileContainer: styled.div`
    background-color: #fff; 
    width: 70%;
    display: flex;
    justify-content: flex-start;
    position: relative;
    transform: ${({ isActive }: NavigationStyleProps) => isActive ? "translateX(0)" : "translateX(120%)"};
    transition: all .5s ease; 
  `,

  IconMenuClose: styled.img`
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;

  `,

  Logo: styled.img`
    width: 5rem;
  `,

  IconMenu: styled.img`
    cursor: pointer;
    width: 5rem;
    height: 3rem;

    @media all and (min-width: 769px) {
      pointer-events: none;
      display: none;
    }
  `,

  UnorderedList: styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5rem;

    & *:not(:last-child) {
      margin-bottom: 2rem;
    }
  `,

  DesktopUnorderedList: styled.ul`
    display: none;
    @media all and (min-width: 769px) {
      list-style: none;
      display: flex;
      gap: 3rem; 
      font-size: 1.6rem;
    }
  `,
  DesktopListItem: styled.li`
    cursor: pointer;
    transition: all .2s ease;
    
    &:hover { 
      color: hsl(5, 85%, 63%);
      transform: translateY(-2px);
    }
  `,

  ListItem: styled.li`
    font-size: 1.6rem;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      transform: translateY(-2px);
      color: hsl(5, 85%, 63%);
    }
  `,
}


export const Navigation = () => {
  const [ isActive, setIsActive ] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const navs = ['Home', 'New', 'Popular', 'Trending', 'Categories']
  return (
    <>
      <S.Navigation>
        <S.Logo src={Logo} alt="logo"/>

          <S.DesktopUnorderedList>
          {
            navs.map((item, index) => (
              <S.DesktopListItem key={index}>{item}</S.DesktopListItem>
            ))
          }
          </S.DesktopUnorderedList>
        <S.IconMenu onClick={handleClick} src={IconMenu} alt="logo"/>
      </S.Navigation>

      <S.Overlay isActive={isActive} onClick={handleClick}>
        <S.MobileContainer isActive={isActive}>
          <S.IconMenuClose onClick={handleClick} src={IconClose} alt="icon-menu-close"/>
          <S.UnorderedList>
          {
            navs.map((item, index) => (
              <S.ListItem key={index}>{item}</S.ListItem>
            ))
          }
          </S.UnorderedList>
        </S.MobileContainer>
      </ S.Overlay>
    </>
  )
}


export default Navigation

