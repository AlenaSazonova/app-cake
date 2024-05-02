import React from 'react';

import {
    StyledTitle,
    StyledSubtitle,
    StyledTitlleBlock
}
    from './GenericTitle.style';


function GenericTitle({ title, subtitle, titleColor, marginBottom, subTitleAdd}) {
    return (
        <StyledTitlleBlock style={{ marginBottom }}>
            <StyledTitle color={titleColor}>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <StyledSubtitle>{subTitleAdd}</StyledSubtitle>
        </StyledTitlleBlock>
    );
}

export default GenericTitle;