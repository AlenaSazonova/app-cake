import React from 'react';
import GenericOffersMenu from '../genericOffersMenu/GenericOffersMenu';
import arrowLeft from '../../icons/genericOffersBlock/left-arrow..png';
import arrowRight from '../../icons/genericOffersBlock/right-arrow.png';
import ellipsePink from '../../icons/genericOffersBlock/Ellipse pink.png';
import ellipseWhite from '../../icons/genericOffersBlock/Ellipse white.png';
import {
    OffersContainer,
    OffersCardsContainer,
    LeftButton,
    RightButton,
    EllipsesContainer,
    EllipseIndicator
}
    from './GenericOffersBlock.style';


function GenericOffersBlock( {menuItems} ) {
    return (
        <div>
            <OffersContainer>
                <LeftButton>
                    <img src={arrowLeft} alt="arrow-left" />
                </LeftButton>

                <OffersCardsContainer>
                    {menuItems.map((el, index) => ( //круглые скобки чтобы вернуть значение
                        <GenericOffersMenu
                            key={index}
                            macaroonImage={el.macaroonImage}
                            macaroonFlavor={el.macaroonFlavor}
                            price={el.price}
                            paddingBottom={el.paddingBottom}
                            marginTop={el.marginTop}
                        />
                    ))}
                </OffersCardsContainer>

                <RightButton>
                    <img src={arrowRight} alt="arrow-right" />
                </RightButton>
            </OffersContainer>

            <EllipsesContainer>
                <EllipseIndicator src={ellipsePink} alt="ellipse-pink" />
                <EllipseIndicator src={ellipseWhite} alt="ellipse-pink" />
                <EllipseIndicator src={ellipseWhite} alt="ellipse-pink" />
                <EllipseIndicator src={ellipseWhite} alt="ellipse-pink" />
            </EllipsesContainer>
        </div>
    );
}

export default GenericOffersBlock;