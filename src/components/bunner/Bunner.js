import React from 'react';

import GenericVectorBottom from '../generic/genericVectorBottom/GenericVectorBottom';

import macaroon1 from '../../assets/bunnerImg/image 7.png';
import macaroon2 from '../../assets/bunnerImg/image 5.png';
import macaroon3 from '../../assets/bunnerImg/image 1.png';
import macaroon4 from '../../assets/bunnerImg/image 8.png';
import macaroon5 from '../../assets/bunnerImg/image 3.png';


import {
    StyledBunner,
    StyledBunnerFirstHalf,
    StyledBunnerWords,
    StyledBunnerGreetings,
    StyledBunnerQuote,
    StyledBunnerSecondHalf,
    StyledMacaroon1,
    StyledMacaroon2,
    StyledMacaroon3,
    StyledMacaroon4,
    StyledMacaroon5,
}
    from './Bunner.style';

function Bunner () {
    return (
        <StyledBunner>
            <StyledBunnerFirstHalf>
                <StyledMacaroon1 src={macaroon1} alt="macaroon1" />
                <StyledBunnerWords>
                    <StyledBunnerGreetings>Welcome in our store</StyledBunnerGreetings>
                    <StyledBunnerQuote>We know the recipe for happiness and we are ready to share it with you.</StyledBunnerQuote>
                </StyledBunnerWords>
                <StyledMacaroon2 src={macaroon2} alt="macaroon2" />
            </StyledBunnerFirstHalf>
            <StyledBunnerSecondHalf>
                <StyledMacaroon3 src={macaroon3} alt="macaroon3" />
                <StyledMacaroon4 src={macaroon4} alt="macaroon4" />
                <StyledMacaroon5 src={macaroon5} alt="macaroon5" />
            </StyledBunnerSecondHalf>

            <GenericVectorBottom 
                position="absolute"
            />
        </StyledBunner>
    );
}

export default Bunner;