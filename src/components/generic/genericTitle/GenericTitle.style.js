import styled from "styled-components";

export const StyledTitlleBlock = styled.div`
    margin-bottom: ${props => props.marginBottom || '0'};
`;

export const StyledTitle = styled.h3`
    font-weight: 600;
    font-size: 35px;
    text-transform: uppercase;
    color: ${props => props.color ? props.color : '#000'};
    text-align: center;
    padding-bottom: 15px;
`;

/*
const StyledComponentWithAdditionalStyles = styled(StyledTitle)`
    color: #fff;
`;
*/

export const StyledSubtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #747474;
    line-height: 120%;
`;