import React from 'react';

import GenericOffersMenu from '../genericOffersMenu/GenericOffersMenu';

import arrowLeft from '../../../assets/genericOffersBlock/left-arrow..png';
import arrowRight from '../../../assets/genericOffersBlock/right-arrow.png';
import ellipsePink from '../../../assets/genericOffersBlock/Ellipse pink.png';
import ellipseWhite from '../../../assets/genericOffersBlock/Ellipse white.png';

import {
    StyledMenuWithArrows,
    StyledMenuAll,
    StyledButtonLeft,
    StyledButtonRight,

    StyledMenuEllipseBlock,
    StyledMenuEllipseImg
}
    from './GenericOffersBlock.style';


function GenericOffersBlock( {menuItems} ) {
    return (
        <div>
            <StyledMenuWithArrows>

                <StyledButtonLeft>
                    <img src={arrowLeft} alt="arrow-left" />
                </StyledButtonLeft>

                <StyledMenuAll>
                    {menuItems.map((el, index) => ( //круглые скобки чтобы вернуть значение
                        <GenericOffersMenu
                            key={index}
                            imgMacaroon={el.imgMacaroon}
                            nameMacaroon={el.nameMacaroon}
                            price={el.price}
                            paddingBottom={el.paddingBottom}
                            marginTop={el.marginTop}
                        />
                    ))}
                </StyledMenuAll>

                <StyledButtonRight>
                    <img src={arrowRight} alt="arrow-right" />
                </StyledButtonRight>
            </StyledMenuWithArrows>
            <StyledMenuEllipseBlock>
                <StyledMenuEllipseImg src={ellipsePink} alt="ellipse-pink" />
                <StyledMenuEllipseImg src={ellipseWhite} alt="ellipse-pink" />
                <StyledMenuEllipseImg src={ellipseWhite} alt="ellipse-pink" />
                <StyledMenuEllipseImg src={ellipseWhite} alt="ellipse-pink" />
            </StyledMenuEllipseBlock>
        </div>
    );
}

export default GenericOffersBlock;