import styled from "styled-components";

const CormorantGaramondSemiBoldFont = 'Cormorant-Garamond-SemiBold';
const OpenSansSemiBoldFont = 'Open-Sans-SemiBold';

export const MenuBlock = styled.div`
    border-radius: 35px;
    width: 363px;
    height: 520px;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-right: 64px;

        @media (max-width: 1100px) {
        margin-right: 0px;
        margin-bottom: 20px;
    }
    }

    @media (max-width: 1400px) {
        width: 263px;
    }

    @media (max-width: 500px) {
        width: 203px;
    }
`;

export const LikeButton = styled.button`
    position: relative;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-left: 314px;
    background: #fff;
    cursor: pointer;
    border: 1px solid transparent;
    transition: background 0.3s, border-radius 0.3s;

    &:hover {
        background: rgba(251, 194, 235, 0.5);
        border-radius: 100%;
    }

    @media (max-width: 1400px) {
        margin: 0 auto;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${props => props.paddingBottom || '0'};
    margin-top: ${props => props.marginTop || '0'};

    & > * {
        max-width: 100%;
        max-height: 100%;

        @media (max-width: 1400px) {
        max-width: 90%;
        max-height: 90%;
    }
    }
`;

export const FlavorContainer = styled.div`
    height: 102px;
    background: rgba(251, 194, 235, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 34px;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 130%;
`;

export const FlavorText = styled.p`
    font-family: ${CormorantGaramondSemiBoldFont}, sans-serif;
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
    color: #000;
`;

export const PriceAndButtonContainer = styled.div`
    font-family: ${OpenSansSemiBoldFont}, sans-serif;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`;

export const MacaronPrice = styled.div`
    font-weight: 600;
    font-size: 19px;
    text-align: center;
    color: #000;
    padding-left: 17px;
`;

export const Button = styled.button`
    border-radius: 50px;
    width: 105px;
    height: 37px;
    background: rgba(251, 194, 235, 0.35);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin-right: 20px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: rgba(251, 194, 235, 0.5);
    }
`;

export const ButtonText = styled.p`
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    color: #000;
`;