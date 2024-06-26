import React from 'react';
import { useState } from 'react';
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const [sliding, setSliding] = useState(false);

    const handlePrevClick = () => {
        setSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + menuItems.length) % menuItems.length);
            setSliding(false);
        }, 500); 
    };

    const handleNextClick = () => {
        setSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % menuItems.length);
            setSliding(false);
        }, 500);
    };

    const visibleItems = menuItems.slice(currentIndex, currentIndex + itemsPerPage);
    const totalPages = Math.ceil(menuItems.length / itemsPerPage);
    const currentPage = Math.floor(currentIndex / itemsPerPage);



    return (
        <div>
            <OffersContainer>
                <LeftButton onClick={handlePrevClick}>
                    <img src={arrowLeft} alt="arrow-left" />
                </LeftButton>

                <OffersCardsContainer sliding={sliding}>
                    {visibleItems.map((el, index) => (
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

                <RightButton onClick={handleNextClick}>
                    <img src={arrowRight} alt="arrow-right" />
                </RightButton>
            </OffersContainer>

            <EllipsesContainer>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <EllipseIndicator
                        key={index}
                        src={index === currentPage ? ellipsePink : ellipseWhite}
                        alt={`ellipse-${index}`}
                    />
                ))}
            </EllipsesContainer>
        </div>
    );
}

export default GenericOffersBlock;