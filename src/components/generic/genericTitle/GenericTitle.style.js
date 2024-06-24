import styled from "styled-components";

const CormorantGaramondSemiBold = 'Cormorant-Garamond-SemiBold';
const OpenSansRegularFont = 'Open-Sans-Regular';

export const TitleBlock = styled.div`
    margin-bottom: ${props => props.marginBottom || '0'};
`;

export const Title = styled.h3`
    font-family: ${CormorantGaramondSemiBold}, sans-serif;
    font-weight: 600;
    font-size: 35px;
    text-transform: uppercase;
    color: ${props => props.color ? props.color : '#000'};
    text-align: center;
    padding-bottom: 15px;
`;

export const Subtitle = styled.p`
    font-family: ${OpenSansRegularFont}, sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.subtitleColor};
    line-height: 120%;
`;