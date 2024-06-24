import React from 'react';
import imgLike from '../../icons/genericOffersMenu/heart.png';
import {
    MenuBlock,
    LikeButton,
    ImageContainer,
    FlavorContainer,
    FlavorText,
    PriceAndButtonContainer,
    MacaronPrice,
    Button,
    ButtonText
}
    from './GenericOffersMenu.style';


function GenericOffersMenu({ macaroonImage, macaroonFlavor, price, paddingBottom, marginTop }) {
    return (
        <MenuBlock>
            <LikeButton>
                <img src={imgLike} alt="like" />
            </LikeButton>
            <ImageContainer style={{ paddingBottom, marginTop }}>
                <img src={macaroonImage} alt="macaron" />
            </ImageContainer>
            <FlavorContainer>
                <FlavorText>{macaroonFlavor}</FlavorText>
            </FlavorContainer>
            <PriceAndButtonContainer>
                <MacaronPrice>Price: {price}</MacaronPrice>
                <Button>
                    <ButtonText>Add</ButtonText>
                </Button>
            </PriceAndButtonContainer>
        </MenuBlock>
    );
}

export default GenericOffersMenu;