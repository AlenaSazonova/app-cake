import styled from "styled-components";

export const StyledSectionAdvantages = styled.section`
    margin-bottom: 82px;
`;

export const StyledAdvantages = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 75px;
    padding-right: 75px;
    line-height: 90%;
    & > * {
        /* общие стили для всех дочерних элементов */
    }

    & > *:first-child {
        max-width: 423px;
        margin-right: 54px;
    }

    & > *:nth-child(2) {
        max-width: 456px;
        margin-right: 54px;
        border-radius: 30px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.11);
        background: rgba(217, 217, 217, 0.26);
        padding-bottom: 7px;
    }

    & > *:nth-child(3) {
        max-width: 390px;
    }
`;

export const StyledAdvantagesBlocks = styled.div`
    display: flex;
`;

export const StyledAdvantagesImg = styled.img`
    padding-right: 15px;
`;

export const StyledAdvantagesAllText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const StyledAdvantagesTitle = styled.h5`
    font-weight: 400;
    font-size: 20px;
    color: #000;
    padding-bottom: 7px;
`;

export const StyledAdvantagesText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #656464;
`;