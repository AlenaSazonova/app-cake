import React from 'react';

import {
    AdvantagesBlockContainer,
    AdvantagesIcon,
    AdvantagesContent,
    AdvantagesTitle,
    AdvantagesSubtitle
}
    from './AdvantagesCards.style';

function AdvantagesCards({ img, titleBlock, subtitleBlock }) {
    return (
        <AdvantagesBlockContainer>
            <AdvantagesIcon src={img} alt="icon" />
            <AdvantagesContent>
                <AdvantagesTitle>{titleBlock}</AdvantagesTitle>
                <AdvantagesSubtitle>{subtitleBlock}</AdvantagesSubtitle>
            </AdvantagesContent>
        </AdvantagesBlockContainer>
    );
}

export default AdvantagesCards;