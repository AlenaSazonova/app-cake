import styled from "styled-components";

export const AdvantagesSection = styled.section`
    margin-bottom: 82px;
`;

export const AdvantagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 75px;
    padding-right: 75px;
    line-height: 90%;
    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        @media (max-width: 1500px) {
            flex-wrap: wrap;
            flex-basis: 33%;
            max-width: 33%;
        }

        @media (max-width: 1200px) {
            flex-basis: 100%;
            max-width: 50%;
            margin-bottom: 20px;
            margin-right: 0;
        }
    }

    & > *:first-child {
        min-width: 443px;
        margin-right: 54px;

        @media (max-width: 1200px) {
            margin-right: 0;
            min-width: 469px;
        }

        @media (max-width: 500px) {
            min-width: 269px;
        }
    }

    & > *:nth-child(2) {
        min-width: 496px;
        margin-right: 54px;
        border-radius: 30px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.11);
        background: rgba(217, 217, 217, 0.26);
        padding-bottom: 7px;
        padding-top: 7px;

        @media (max-width: 1500px) {
            background: none;
            border-radius: 0;
            box-shadow: none;
            margin-bottom: 20px;
        }

        @media (max-width: 1200px) {
            margin-right: 0;
            min-width: 469px;
        }

        @media (max-width: 500px) {
            min-width: 269px;
        }
    }

    & > *:nth-child(3) {
        min-width: 423px;

        @media (max-width: 1200px) {
            margin-right: 0;
            min-width: 469px;
        }

        @media (max-width: 500px) {
            min-width: 269px;
        }
    }

    @media (max-width: 1500px) {
        flex-wrap: wrap;
    }
`;