import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import GenericOffersBlock from '../generic/genericOffersBlock/GenericOffersBlock';
import GenericVectorBottom from '../generic/genericVectorBottom/GenericVectorBottom';
import GenericVectorTop from '../generic/genericVectorTop/GenericVectorTop';


import set1 from '../../assets/sets/set1.png';
import set2 from '../../assets/sets/set2.png';
import set3 from '../../assets/sets/set3.png';


import {
    StyledSectionSets
}
    from './Sets.style';



function Sets() {
    const menuItems = [
        {
            imgMacaroon: set1,
            nameMacaroon: 'A set of 6 different macarons',
            price: '10.50$',
            paddingBottom: "45px",
            marginTop: "0"
        },
        {
            imgMacaroon: set2,
            nameMacaroon: 'A set of 33 different macarons',
            price: '35$',
            paddingBottom: "55px",
            marginTop: "-20px"
        },
        {
            imgMacaroon: set3,
            nameMacaroon: 'A set of 16 different macarons',
            price: '22$',
            paddingBottom: "0",
            marginTop: "-85px"
        }
    ]


    return (
        <StyledSectionSets>
            <GenericVectorTop />
            <GenericTitle
                title="Macarons Sets"
                subtitle="Here you can get acquainted with our work"
                titleColor="#fff"
                marginBottom="60px"
            />

            <GenericOffersBlock menuItems={menuItems} />

            <GenericVectorBottom
                position="relative"
            />
        </StyledSectionSets>
    );
}

export default Sets;