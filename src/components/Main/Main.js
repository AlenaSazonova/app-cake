import React from 'react';
import {
    MainBlock
}
    from './Main.style';



function Main({ children }) {
    return (
        <MainBlock>
            {children}
        </MainBlock>
    );
}

export default Main;