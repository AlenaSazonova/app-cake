import React from 'react';
import vectorBottom from '../../icons/genericVectorBottom/Vector-bottom.png';
import {
    BackgroundDecorationBottom
}
    from './GenericVectorBottom.style';


function GenericVectorBottom({ position }) {
    return (
        <BackgroundDecorationBottom style={{ position }}>
            <img src={vectorBottom} alt="vectorBottom" />
        </BackgroundDecorationBottom>
    );
}

export default GenericVectorBottom;