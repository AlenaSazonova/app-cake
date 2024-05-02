import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import icon1 from '../../assets/advantagesImg/Icon1.png';
import icon2 from '../../assets/advantagesImg/Icon2.png';
import icon3 from '../../assets/advantagesImg/Icon3.png';

import {
    StyledSectionAdvantages,
    StyledAdvantages,
    StyledAdvantagesBlocks,
    StyledAdvantagesImg,
    StyledAdvantagesAllText,
    StyledAdvantagesTitle,
    StyledAdvantagesText
}
    from './Advantages.style';




function AdvantagesBlocks({ img, titleBlock, subtitleBlock }) {
    return (
        <StyledAdvantagesBlocks>
            <StyledAdvantagesImg src={img} alt="icon" />
            <StyledAdvantagesAllText>
                <StyledAdvantagesTitle>{titleBlock}</StyledAdvantagesTitle>
                <StyledAdvantagesText>{subtitleBlock}</StyledAdvantagesText>
            </StyledAdvantagesAllText>
        </StyledAdvantagesBlocks>
    );
}


function Advantages() {
    return (
        <StyledSectionAdvantages>
            <GenericTitle
                title="Why choose us?"
                subtitle="You will choose us because we know how to surprise you, we always have high quality "
                subTitleAdd="products."
                marginBottom="75px"
            />
            <StyledAdvantages>
                <AdvantagesBlocks 
                    img={icon1}
                    titleBlock="High Quality"
                    subtitleBlock="All our products are of high quality. We purchase products only from verified suppliers."
                />
                <AdvantagesBlocks 
                    img={icon2}
                    titleBlock="Variety"
                    subtitleBlock="We have about 25 different flavors of macarons. Every day we come up with different flavors so that you can enjoy macarons."
                />
                <AdvantagesBlocks 
                    img={icon3}
                    titleBlock="Delivery"
                    subtitleBlock="If you want to try our macarons outside our pastry shop, we can deliver them to you in a short time."
                />
            </StyledAdvantages>
        </StyledSectionAdvantages>
    );
}

export default Advantages;