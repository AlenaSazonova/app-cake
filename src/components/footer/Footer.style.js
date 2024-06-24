import styled from "styled-components";

const CormorantGaramondSemiBold = 'Cormorant-Garamond-SemiBold';
const OpenSansSemiBoldFont = 'Open-Sans-SemiBold';
const OpenSansRegularFont = 'Open-Sans-Regular';

export const FooterSection = styled.footer`
    position: relative;
    width: 100%;
    padding-bottom: 9px;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.background};
        transform: rotate(180deg);
        z-index: -1;
        
    }
`;

export const SocialMediaLinks = styled.div`
    display: flex;
    margin-top: -40px;
    align-items: center;
    justify-content: flex-end;
    margin-right: 60px;

    & > *:not(:last-child) {
        margin-right: 15px;
    }

     & > * {
        transition: background 0.3s, border-radius 0.3s;

        &:hover {
            background: rgba(251, 194, 235, 0.5);
            border-radius: 100%;
        }
    }

    @media (max-width: 1300px) {
        justify-content: center;
        margin-right: 0;
        margin-top: 40px;
        margin-bottom: 15px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 60px;

    @media (max-width: 1300px) {
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
        text-align: center;
    }

    @media (max-width: 500px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;

    & > *:first-child {
        padding-right: 2px;
    }

    & > *:nth-child(2) {
        font-family: ${CormorantGaramondSemiBold}, sans-serif;
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
    }

    @media (max-width: 1300px) {
        margin-bottom: 20px;
        justify-content: center;
    }
`;

export const FormContainer = styled.div`
    text-align: center;
    padding-top: 50px;
    padding-right: 70px;

    & > *:first-child {
        font-family: ${OpenSansSemiBoldFont}, sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 247%;
        color: #fff;
        padding-bottom: 6px;

        @media (max-width: 500px) {
            font-weight: 400;
            font-size: 12px;
        }
    }

    & > *:nth-child(2) {
        padding-bottom: 83px;

        
    }

    & > *:nth-child(3) {
        font-family: ${OpenSansRegularFont}, sans-serif;
        font-weight: 400;
        font-size: 17px;
        line-height: 118%;
        letter-spacing: 0.15em;
        color: #fff;
    }

    & > *:nth-child(4) {
        font-family: ${OpenSansRegularFont}, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        letter-spacing: 0.15em;
        text-align: center;
        color: #fff;

        @media (max-width: 1300px) {
            margin-bottom: 15px;
        }
    }

    @media (max-width: 1300px) {
        padding-right: 0;
        padding-top: 20px;

        & > *:nth-child(2) {
            padding-bottom: 40px;
        }
    }

    @media (max-width: 500px) {
        padding-top: 10px;

        & > *:nth-child(2) {
            padding-bottom: 20px;
        }
    }
`;

export const EmailSubscription = styled.div`
    min-width: 475px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 500px) {
        min-width: 275px;
    }
`;

export const Input= styled.input`
    font-family: ${OpenSansRegularFont}, sans-serif;
    border-radius: 50px;
    width: 394px;
    height: 51px;
    background: #fff;
    font-size: 16px;
    padding-left: 28px;
    font-weight: 400;
    line-height: 262%;

    @media (max-width: 1300px) {
        width: 80%;
    }
`;

export const Button = styled.button`
    font-family: ${OpenSansSemiBoldFont}, sans-serif;
    position: absolute;
    top: 0px;
    right: 25px;
    z-index: 100;
    border-radius: 50px;
    width: 149px;
    height: 51px;
    background: #9f9f9f;
    font-weight: 600;
    font-size: 17px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: rgba(122, 115, 120, 0.5);
    }

    @media (max-width: 420px) {
        right: 10px;
    }
`;

export const ContactAndHours = styled.div`
    font-family: ${OpenSansRegularFont}, sans-serif;
    text-align: end;
    line-height: 90%;

    & > *:first-child {
        padding-bottom: 41px;
    }

    @media (max-width: 1300px) {
        text-align: center;
        line-height: normal;
    }
`;

export const Contacts = styled.div`

    & > *:first-child {
        font-weight: 400;
        font-size: 22px;
        color: #fff;
        padding-bottom: 20px;
    }

    & > *:nth-child(2) {
        line-height: 150%;
        font-weight: 400;
        font-size: 16px;
        text-transform: uppercase;
        color: #fff;
    }

    & > *:nth-child(3) {
        font-weight: 400;
        font-size: 16px;
        color: #fff;
    }

    @media (max-width: 1300px) {
        & > *:first-child {
            padding-bottom: 10px;
        }
    }
`;

export const WorkingHours= styled.div`

    & > *:first-child {
        font-weight: 400;
        font-size: 22px;
        color: #fff;
        padding-bottom: 8px;
    }

    & > *:nth-child(2) {
        font-weight: 400;
        font-size: 16px;
        color: #fff;
    }

    @media (max-width: 1300px) {
        & > *:first-child {
            padding-bottom: 10px;
        }
    }
`;