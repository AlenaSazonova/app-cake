import styled from "styled-components";


export const OffersContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
    align-items: center;
`;

export const LeftButton = styled.button`
    min-width: 60px;
    height: 60px;
    border-radius: 100%;
    fill: #fff;
    margin-left: 87px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: rgba(245 231 241 / 50%);
    }
`;

export const RightButton = styled.button`
    min-width: 60px;
    height: 60px;
    border-radius: 100%;
    fill: #fff;
    margin-right: 87px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: rgba(245 231 241 / 50%);
    }
`;

export const OffersCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    opacity: ${({ $sliding }) => ($sliding ? 0 : 1)};
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 1100px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export const EllipsesContainer = styled.div`
    text-align: center;
`;

export const EllipseIndicator = styled.img`
    padding-right: 15px;
    &:last-child {
        padding-right: 0px;
    }

    transition: transform 0.3s;

    &:hover {
        transform: scale(1.2);
    }
`;