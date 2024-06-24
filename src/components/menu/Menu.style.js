import styled from "styled-components";

export const MenuSection = styled.section`
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
        background: ${({ theme }) => theme.background};
        transform: rotate(180deg);
        z-index: -1;
        
    }
`;