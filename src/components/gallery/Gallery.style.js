import styled from "styled-components";

export const GallerySection = styled.section`
    margin-bottom: 40px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 1450px;
    padding: 0 20px;
`;

export const Image = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
    justify-content: center;
    align-items: center;

    & > * {
        width: 100%;

        @media (max-width: 1430px) {
            margin-bottom: 20px;
            margin-right: 5px;
            width: 400px;
        }

        @media (max-width: 530px) {
            width: 250px;
        }
    }

    @media (max-width: 1430px) {
        flex-wrap: wrap;
        margin-top: 80px;
    }
`;

export const TopEllipse = styled.div`
    position: relative;
    top: 0;
    right: 75px;
    width: 100%;
    z-index: 50;

    @media (max-width: 1430px) {
        display: none;
    }
`;

export const ButtomEllipse = styled.div`
    position: relative;
    bottom: 65px;
    right: 75px;
    width: 100%;
    z-index: 50;

    @media (max-width: 1430px) {
        display: none;
    }
`;