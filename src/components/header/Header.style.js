//import styled from "styled-components"; - это нужно писать в каждом таком файле
//картинки как правильно
import styled from "styled-components";


export const StyledHeader = styled.header`
    background: linear-gradient(180deg, #aea6ee 100%, #fbc2eb 0%);
    display: flex;
    min-height: 94px; 
    /*
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    */
    
`;

export const StyledLogo = styled.div`
    display: flex;
    padding-left: 75px;
    align-items: center;
`;

export const StyledLogoPictures = styled.img`
    width: 47px;
    height: 47px;
    /*box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);*/
`;

export const StyledLogoName = styled.p`
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    margin: 0;
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
`;

export const StyledMenu = styled.ul`
    display: flex;
    padding-left: 289px;
`;

export const StyledMenuElement = styled.li`
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #fff;
    list-style-type: none;
    margin-right: 61px;
    padding: 0 13px;

    &:last-child {
        margin-left: -15px;
        margin-right: 0;
        display: flex;
        align-items: center;
    }
`;

export const StyledVector = styled.img`
    width: 19px;
    height: 21px;
    padding-right: 4px;
`;

export const StyledBasket = styled.img`
    width: 59px;
    height: 59px; 
    padding-left: 26px;  
`;

export const StyledWrapBasket = styled.div`
    display: flex; 
    align-items: center; 
`;