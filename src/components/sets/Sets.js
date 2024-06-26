import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import GenericOffersBlock from '../generic/genericOffersBlock/GenericOffersBlock';
import GenericVectorBottom from '../generic/genericVectorBottom/GenericVectorBottom';
import GenericVectorTop from '../generic/genericVectorTop/GenericVectorTop';
import set1 from '../icons/sets/set1.png';
import set2 from '../icons/sets/set2.png';
import set3 from '../icons/sets/set3.png';
import set4 from '../icons/sets/set4.png';
import set5 from '../icons/sets/set5.png';
import set6 from '../icons/sets/set6.png';
import {
    SetsSection
}
    from './Sets.style';


function Sets() {
    const menuItems = [
        {
            macaroonImage: set1,
            macaroonFlavor: 'A set of 6 different macarons',
            price: '10.50$',
            paddingBottom: "45px",
            marginTop: "0"
        },
        {
            macaroonImage: set2,
            macaroonFlavor: 'A set of 33 different macarons',
            price: '35$',
            paddingBottom: "55px",
            marginTop: "-20px"
        },
        {
            macaroonImage: set3,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '22$',
            paddingBottom: "0",
            marginTop: "-85px"
        },
        {
            macaroonImage: set4,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '20$',
            paddingBottom: "10px",
            marginTop: "30px"
        },
        {
            macaroonImage: set4,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '20$',
            paddingBottom: "10px",
            marginTop: "40px"
        },
        {
            macaroonImage: set4,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '20$',
            paddingBottom: "10px",
            marginTop: "40px"
        },
        {
            macaroonImage: set5,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '30$',
            paddingBottom: "10px",
            marginTop: "30px"
        },
        {
            macaroonImage: set5,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '30$',
            paddingBottom: "10px",
            marginTop: "30px"
        },
        {
            macaroonImage: set5,
            macaroonFlavor: 'A set of 16 different macarons',
            price: '30$',
            paddingBottom: "10px",
            marginTop: "30px"
        },
        {
            macaroonImage: set6,
            macaroonFlavor: 'A set of 12 heart-shaped macarons',
            price: '40$',
            paddingBottom: "0px",
            marginTop: "0px"
        },
        {
            macaroonImage: set6,
            macaroonFlavor: 'A set of 12 heart-shaped macarons',
            price: '40$',
            paddingBottom: "0px",
            marginTop: "0px"
        },
        {
            macaroonImage: set6,
            macaroonFlavor: 'A set of 12 heart-shaped macarons',
            price: '40$',
            paddingBottom: "0px",
            marginTop: "0px"
        }
    ]

    return (
        <SetsSection>
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
        </SetsSection>
    );
}

export default Sets;