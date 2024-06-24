import styled from "styled-components";

const CormorantGaramondSemiBold = 'Cormorant-Garamond-SemiBold';
const OpenSansRegularFont = 'Open-Sans-Regular';

export const ContactsSection = styled.section`
    margin-bottom: 65px;
`;

export const ImageTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 75px;

    & > *:first-child {
        

        @media (max-width: 1360px) {
            
        }
    }

    & > *:nth-child(2) {
        @media (max-width: 740px) {

        }

        & > * {
                @media (max-width: 740px) {
                    width: 299px;
                }
            }
    }

    @media (max-width: 1360px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1360px) {
        margin-bottom: 20px;
    }
    @media (max-width: 740px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const TopBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 55px;

    @media (max-width: 740px) {
        padding-right: 0px;
        margin-bottom: 20px;
        width: 241px;
    }
`;

export const BottomBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BlockTitle = styled.h5`
    font-family: ${CormorantGaramondSemiBold}, sans-serif;
    font-weight: 600;
    font-size: 25px;
    text-transform: uppercase;
    color: #000;
    padding-bottom: 20px;
`;

export const ContactText = styled.p`
    font-family: ${OpenSansRegularFont}, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #000;
    line-height: 180%;
`;

export const ContactDetails = styled.div`
    margin-bottom: 150px;

    @media (max-width: 1360px) {
        margin-bottom: 40px;
    }

    @media (max-width: 740px) {
        margin-bottom: 20px;
        
    }
`;

export const WorkingHours = styled.div`
    margin-bottom: 184px; 

    @media (max-width: 1360px) {
        margin-bottom: 40px;
    }

    @media (max-width: 740px) {
        margin-bottom: 20px;
    }
`;