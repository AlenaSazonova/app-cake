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
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About us</MenuItem>
                    <MenuItem>Menu</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>
                        <PhoneIconImage src={vector} alt="Phone icon" />
                        <p>+123456789</p>
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