import styled from "styled-components";

const OpenSansRegular = 'Open-Sans-Regular';

export const AdvantagesBlockContainer = styled.div`
    font-family: ${OpenSansRegular}, sans-serif;
    display: flex;
`;

export const AdvantagesIcon = styled.img`
    padding-right: 15px;

    @media (max-width: 500px) {
        display: none;
    }
`;

export const AdvantagesContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const AdvantagesTitle = styled.h5`
    font-weight: 400;
    font-size: 20px;
    color: #000;
    padding-bottom: 7px;
`;

export const AdvantagesSubtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #656464;
`;