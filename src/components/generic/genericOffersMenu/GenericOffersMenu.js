import React from 'react';
import imgLike from '../../../assets/genericOffersMenu/heart.png';

import {
    StyledMenuBlocks,
    StyledMenuLike,
    StyledMenuImg,
    StyledMenuNameWrap,
    StyledMenuName,
    StyledMenuPriceAndButton,
    StyledMenuPrice,
    StyledMenuButton,
    StyledMenuButtonText
}
    from './GenericOffersMenu.style';


function GenericOffersMenu({ imgMacaroon, nameMacaroon, price, paddingBottom, marginTop }) {
    return (
        <StyledMenuBlocks>
            <StyledMenuLike>
                <img src={imgLike} alt="like" />
            </StyledMenuLike>
            <StyledMenuImg style={{ paddingBottom, marginTop }}>
                <img src={imgMacaroon} alt="macaron" />
            </StyledMenuImg>
            <StyledMenuNameWrap>
                <StyledMenuName>{nameMacaroon}</StyledMenuName>
            </StyledMenuNameWrap>
            <StyledMenuPriceAndButton>
                <StyledMenuPrice>Price: {price}</StyledMenuPrice>
                <StyledMenuButton>
                    <StyledMenuButtonText>Add</StyledMenuButtonText>
                </StyledMenuButton>
            </StyledMenuPriceAndButton>
        </StyledMenuBlocks>
    );
}

export default GenericOffersMenu;