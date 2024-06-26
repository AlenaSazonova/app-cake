import React from 'react';
import logo from '../icons/headerImg/Group 1.png';
import vector from '../icons/headerImg/Vector.png';
import basket from '../icons/headerImg/shooping-bag.png';
import {
    HeaderContainer,
    LogoWrapper,
    LogoImage,
    LogoName,
    Navigation,
    MenuList,
    MenuItem,
    MenuLink,
    PhoneLink,
    PhoneIconImage,
    CartContainer,
    Cart,
    SunContainer,
    SunImage
}
    from './Header.style';


function Header({ toggleTheme, icon }) {
    return (
        <HeaderContainer>
            <LogoWrapper>
                <LogoImage src={logo} alt="macaroons" />
                <LogoName>Macaronsmania</LogoName>
            </LogoWrapper>
            <Navigation>
                <MenuList>
                    <MenuItem>
                        <MenuLink href='#home'>Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href='#about'>About us</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href='#menu'>Menu</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href='#contact'>Contact</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <PhoneLink href="tel:+123456789">
                            <PhoneIconImage src={vector} alt="Phone icon" />
                            <p>+123456789</p>
                        </PhoneLink>
                    </MenuItem>
                </MenuList>
            </Navigation>
            <CartContainer>
                <Cart src={basket} alt="shooping-bag" />
            </CartContainer>
            <SunContainer onClick={toggleTheme}>
                <SunImage key={icon} src={icon} alt="theme icon" />
            </SunContainer>
        </HeaderContainer>
    );
}

export default Header;