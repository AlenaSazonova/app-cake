import styled from "styled-components";

const CormorantGaramondSemiBold = 'Cormorant-Garamond-SemiBold';

export const BunnerSection = styled.section`
    background: ${({ theme }) => theme.background};
    height: 830px;
    margin-bottom: 39px;
    position: relative;

    @media (max-width: 1200px) {
        height: auto;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const TextContainer = styled.div`
    
`;

export const GreetingText = styled.h1`
    font-family: ${CormorantGaramondSemiBold}, sans-serif;
    font-weight: 600;
    font-size: 60px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding-top: 152px;
    margin-bottom: 21px;

    @media (max-width: 1200px) {
        padding-top: 50px;
        font-size: 40px;
    }
`;

export const QuoteText = styled.p`
    font-family: ${CormorantGaramondSemiBold}, sans-serif;
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    color: #fff;

    @media (max-width: 1200px) {
        font-size: 18px;
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const LightBeigeMacaroonImage = styled.img`
    padding-top: 70px;
    padding-left: 50px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const DarkBeigeMacaroonImage = styled.img`
    padding-top: 15px;
    padding-right: 5px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const SmallPinkMacaroonImage = styled.img`
    padding-left: 134px;
    padding-bottom: 20px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const BigPinkMacaroonImage = styled.img`
    padding-top: 10px;

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
    }
`;

export const LightPinkMacaroonImage = styled.img`
    padding-right: 150px;
    padding-bottom: 130px;

    @media (max-width: 1200px) {
        display: none;
    }
`;