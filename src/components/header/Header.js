//import React from 'react'; - это где по правильному нужно писать?я так поняла что во всех
//файлах где компоненты возвращают jsx

//как правильно картинки добавлять
//как добавлять шрифты
//куда стили обнуления добавить и стили общие для страницы
//что происходит с figma, только при нажатом option показывает то что нужно
//стили обнуления вставила в App.css

import React from 'react';
import logo from '../../assets/headerImg/Group 1.png';
import vector from '../../assets/headerImg/Vector.png';
import basket from '../../assets/headerImg/shooping-bag.png';

import {StyledHeader, 
        StyledLogo, 
        StyledLogoPictures, 
        StyledLogoName, 
        StyledNav,
        StyledMenu,
        StyledMenuElement,
        StyledVector,
        StyledWrapBasket,
        StyledBasket
    } 
from './Header.style';




function Navigation({children}) {
    return (
        <StyledMenu>
            {children}
        </StyledMenu>
    );
}

function Header() {
    return (
        <StyledHeader>
            <StyledLogo>
                <StyledLogoPictures src={logo} alt="macaroons" />
                <StyledLogoName>Macaronsmania</StyledLogoName>
            </StyledLogo>
            <StyledNav>
                <Navigation>
                    <StyledMenuElement>Home</StyledMenuElement>
                    <StyledMenuElement>About us</StyledMenuElement>
                    <StyledMenuElement>Menu</StyledMenuElement>
                    <StyledMenuElement>Contact</StyledMenuElement>
                    <StyledMenuElement>
                        <StyledVector src={vector} alt="vector" />
                        <p>+123456789</p>
                    </StyledMenuElement>
                </Navigation>
            </StyledNav>
            <StyledWrapBasket>
                <StyledBasket src={basket} alt="shooping-bag" />
            </StyledWrapBasket>
        </StyledHeader>
    );
}

export default Header;
