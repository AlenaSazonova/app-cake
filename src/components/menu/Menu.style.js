import styled from "styled-components";

export const StyledSectionMenu = styled.section`
    position: relative;
    width: 100%;
    margin-bottom: 40px;
    
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





