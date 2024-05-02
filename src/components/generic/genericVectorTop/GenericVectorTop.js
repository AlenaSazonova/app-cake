import React from 'react';

import vectorTop from '../../../assets/genericVectorTop/Vector-top.png';

import {
    StyledVectorTop
}
    from './GenericVectorTop.style';


function GenericVectorTop() {
    return (
        <StyledVectorTop>
            <img src={vectorTop} alt="vectorTop" />
        </StyledVectorTop>
    );
}

export default GenericVectorTop;