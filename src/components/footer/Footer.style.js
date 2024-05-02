import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    padding-bottom: 10px;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #a6c1ee 0%, #fbc2eb 100%);
        transform: rotate(180deg);
        z-index: -1;
        
    }
`;

export const StyledFooterLinks = styled.div`
    margin-top: -40px;
    padding-left: 1345px;

    & > *:first-child {
        padding-right: 15px;
    }

    & > *:nth-child(2) {
        padding-right: 15px;
    }
`;

export const StyledFooterBlock = styled.div`
    display: flex;
`;

export const StyledFooterLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 75px;
    padding-top: 100px;
    padding-right: 155px;

    & > *:first-child {
        padding-right: 2px;
    }

    & > *:nth-child(2) {
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
    }
`;

export const StyledFooterSubscriptionForm = styled.div`
    text-align: center;
    padding-top: 50px;
    padding-right: 292px;

    & > *:first-child {
        font-weight: 600;
        font-size: 17px;
        line-height: 247%;
        color: #fff;
        padding-bottom: 6px;
    }

    & > *:nth-child(2) {
        padding-bottom: 83px;
    }

    & > *:nth-child(3) {
        font-weight: 400;
        font-size: 17px;
        line-height: 118%;
        letter-spacing: 0.15em;
        color: #fff;
    }

    & > *:nth-child(4) {
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        letter-spacing: 0.15em;
        text-align: center;
        color: #fff;
    }
`;

export const StyledFooterInputWithButton = styled.div`
    min-width: 475px;
`;

export const StyledFooterInput= styled.input`
    position: relative;
    border-radius: 50px;
    width: 394px;
    height: 51px;
    background: #fff;
    font-size: 16px;
    padding-left: 28px;
    font-weight: 400;
    line-height: 262%;
`;

export const StyledFooterButton = styled.button`
    position: absolute;
    top: 302px;
    right: 590px;
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
`;

export const StyledFooterInformation = styled.div`
    text-align: end;
    padding-top: 46px;
    line-height: 90%;

    & > *:first-child {
        padding-bottom: 41px;
    }
`;

export const StyledFooterContacts = styled.div`

    & > *:first-child {
        font-weight: 400;
        font-size: 22px;
        color: #fff;
        padding-bottom: 20px;
    }

    & > *:nth-child(2) {
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
`;

export const StyledFooterWorkingHours= styled.div`

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
`;
