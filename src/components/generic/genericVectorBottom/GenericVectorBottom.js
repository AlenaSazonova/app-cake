import React from 'react';

import vectorBottom from '../../../assets/genericVectorBottom/Vector-bottom.png';

import {
    StyledVectorBottom
}
    from './GenericVectorBottom.style';


function GenericVectorBottom({ position }) {
    return (
        <StyledVectorBottom style={{ position }}>
            <img src={vectorBottom} alt="vectorBottom" />
        </StyledVectorBottom>
    );
}

export default GenericVectorBottom;