import React from 'react';
import GenericVectorBottom from '../generic/genericVectorBottom/GenericVectorBottom';
import macaroon1 from '../icons/bunnerImg/image 7.png';
import macaroon2 from '../icons/bunnerImg/image 5.png';
import macaroon3 from '../icons/bunnerImg/image 1.png';
import macaroon4 from '../icons/bunnerImg/image 8.png';
import macaroon5 from '../icons/bunnerImg/image 3.png';
import {
    BunnerSection,
    TopContainer,
    TextContainer,
    GreetingText,
    QuoteText,
    BottomContainer,
    LightBeigeMacaroonImage,
    DarkBeigeMacaroonImage,
    SmallPinkMacaroonImage,
    BigPinkMacaroonImage,
    LightPinkMacaroonImage
}
    from './Bunner.style';


function Bunner () {
    return (
        <BunnerSection>
            <TopContainer>
                <LightBeigeMacaroonImage src={macaroon1} alt="light-beige-macaroon" />
                <TextContainer>
                    <GreetingText>Welcome in our store</GreetingText>
                    <QuoteText>We know the recipe for happiness and we are ready to share it with you.</QuoteText>
                </TextContainer>
                <DarkBeigeMacaroonImage src={macaroon2} alt="dark-beige-macaroon" />
            </TopContainer>
            <BottomContainer>
                <SmallPinkMacaroonImage src={macaroon3} alt="small-pink-macaroon" />
                <BigPinkMacaroonImage src={macaroon4} alt="big-pink-macaroon" />
                <LightPinkMacaroonImage src={macaroon5} alt="light-pink-macaroon" />
            </BottomContainer>

            <GenericVectorBottom 
                position="absolute"
            />
        </BunnerSection>
    );
}

export default Bunner;