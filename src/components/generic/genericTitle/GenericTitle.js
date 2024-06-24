import React from 'react';
import {
    Title,
    Subtitle,
    TitleBlock
}
    from './GenericTitle.style';


function GenericTitle({ title, subtitle, titleColor, marginBottom, additionalSubtitle }) {
    return (
        <TitleBlock style={{ marginBottom }}>
            <Title color={titleColor}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Subtitle>{additionalSubtitle}</Subtitle>
        </TitleBlock>
    );
}

export default GenericTitle;