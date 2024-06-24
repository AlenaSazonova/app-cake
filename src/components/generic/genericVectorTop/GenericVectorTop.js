import React from 'react';
import vectorTop from '../../icons/genericVectorTop/Vector-top.png';
import {
    BackgroundDecorationTop
}
    from './GenericVectorTop.style';


function GenericVectorTop() {
    return (
        <BackgroundDecorationTop>
            <img src={vectorTop} alt="vectorTop" />
        </BackgroundDecorationTop>
    );
}

export default GenericVectorTop;