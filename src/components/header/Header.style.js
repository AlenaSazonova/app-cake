import styled from "styled-components";

const OpenSansSemiBoldFont = 'Open-Sans-SemiBold';
const CormorantGaramondSemiBold = 'Cormorant-Garamond-SemiBold';

export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme.backgroundReverse};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 20px 2px 5px;
    min-height: 94px; 
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    padding-left: 75px;
    align-items: center;

    @media (max-width: 1200px) {
        padding-left: 0;
        margin: 0 auto;
    }
`;

export const LogoImage = styled.img`
    width: 47px;
    height: 47px;

    @media (max-width: 1200px) {
        width: 40px;
        height: 40px;
    }
`;

export const LogoName = styled.p`
    font-family: ${CormorantGaramondSemiBold}, sans-serif;
    font-weight: 700;
    font-size: 30px; /* 30px */
    line-height: 140%;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    margin: 0 0 0 5px;

    @media (max-width: 1200px) {
        font-size: 25px;
        margin: 0 0 0 10px;
    }
`;

export const Navigation = styled.nav`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 26px;

    @media (max-width: 1200px) {
        width: 100%;
        justify-content: space-around;
        margin-right: 0;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;

    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

export const MenuItem = styled.li`
    font-family: ${OpenSansSemiBoldFont}, sans-serif;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #fff;
    margin-right: 30px;
    padding: 0 13px;

    &:last-child {
        margin-left: -15px;
        margin-right: 0;
        display: flex;
        align-items: center;
    }

    @media (max-width: 1200px) {
        margin: 10px 0;
        padding: 0;
    }
`;

export const MenuLink = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: pink;
    }
`;

export const PhoneLink = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: pink;
    }
`;

export const PhoneIconImage = styled.img`
    width: 19px;
    height: 21px;
    margin-right: 4px;

    @media (max-width: 1200px) {
        width: 16px;
        height: 18px;
    }
`;

export const CartContainer = styled.button`
    position: relative;
    z-index: 50;
    margin-right: 27px;
    border-radius: 100%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.3s, border-radius 0.3s;

    &:hover {
        border: 2px solid pink;
        border-radius: 100%;
    }

    @media (max-width: 1200px) {
        margin: 10px auto;
    }
`;

export const Cart = styled.img`
    width: 59px;
    height: 59px;

    @media (max-width: 1200px) {
        width: 50px;
        height: 50px;
    }
`;

export const SunContainer = styled.button`
    background: linear-gradient(180deg, #aea6ee 100%, #fbc2eb 0%);
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.3s, border-radius 0.3s;

    &:hover {
        border: 2px solid pink;
        border-radius: 100%;
    }

    @media (max-width: 1200px) {
        margin: 0 auto;
    }
`;

export const SunImage = styled.img`
    width: 59px;
    height: 59px;
    border-radius: 100%;

    @media (max-width: 1200px) {
        width: 50px;
        height: 50px;
    }
`;