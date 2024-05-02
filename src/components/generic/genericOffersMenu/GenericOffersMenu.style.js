import styled from "styled-components";

export const StyledMenuBlocks = styled.div`
    border-radius: 35px;
    width: 363px;
    height: 520px;
    background: #fff;

    &:not(:last-child) {
        margin-right: 64px;
    }
`;

export const StyledMenuLike = styled.button`
    position: relative;
    z-index: 50;
    margin-top: 22px;
    margin-left: 314px;
    background: #fff;
`;

export const StyledMenuImg = styled.div`
    text-align: center;
    padding-bottom: ${props => props.paddingBottom || '0'};
    margin-top: ${props => props.marginTop || '0'};
`;

export const StyledMenuNameWrap = styled.div`
    height: 102px;
    background: rgba(251, 194, 235, 0.35);
    display: flex;
    align-items: center;
    margin-bottom: 34px;
`;

export const StyledMenuName = styled.p`
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
    color: #000;
`;

export const StyledMenuPriceAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledMenuPrice = styled.div`
    font-weight: 600;
    font-size: 19px;
    text-align: center;
    color: #000;
    padding-left: 17px;
`;

export const StyledMenuButton = styled.button`
    border-radius: 50px;
    width: 105px;
    height: 37px;
    background: rgba(251, 194, 235, 0.35);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin-right: 20px;
`;

export const StyledMenuButtonText = styled.p`
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    color: #000;
`;