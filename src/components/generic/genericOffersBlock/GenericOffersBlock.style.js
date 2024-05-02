import styled from "styled-components";


export const StyledMenuWithArrows = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`;

export const StyledButtonLeft = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    fill: #fff;
    margin-left: 87px;
    margin-top: 230px;
`;

export const StyledButtonRight = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    fill: #fff;
    margin-right: 87px;
    margin-top: 230px;
`;

export const StyledMenuAll = styled.div`
    display: flex;
    padding-left: 25px;
    padding-right: 25px;
`;

export const StyledMenuEllipseBlock = styled.div`
    text-align: center;
`;

export const StyledMenuEllipseImg = styled.img`
    padding-right: 15px;
    &:last-child {
        padding-right: 0px;
    }
`;