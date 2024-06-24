import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import GenericOffersBlock from '../generic/genericOffersBlock/GenericOffersBlock';
import GenericVectorBottom from '../generic/genericVectorBottom/GenericVectorBottom';
import GenericVectorTop from '../generic/genericVectorTop/GenericVectorTop';
import macaronBerry from '../icons/menu/macaron-berry.png';
import macaronChoco from '../icons/menu/macaron-chocolate.png';
import macaronMatcha from '../icons/menu/macaron-matcha.png';
import {
    MenuSection
}
    from './Menu.style';


function Menu() {
    const menuItems = [
        {
            macaroonImage: macaronBerry,
            macaroonFlavor:'Macarons with berry ganache',
            price:'1.50$',
            paddingBottom:"0",
            marginTop:"0"
        },
        {
            macaroonImage: macaronChoco,
            macaroonFlavor: 'Macarons with chocolate ganache',
            price: '1.25$',
            paddingBottom: "55px",
            marginTop: "-20px"
        },
        {
            macaroonImage: macaronMatcha,
            macaroonFlavor: 'Macarons with matcha tea and lime',
            price: '1$',
            paddingBottom: "50px",
            marginTop: "35px"
        }
    ]

    return (
        <MenuSection>
            <GenericVectorTop />
            <GenericTitle
                title="Our Menu"
                subtitle="Here you can view the currently available macaron flavors and order."
                titleColor="#fff"
                marginBottom="75px"
            />

            <GenericOffersBlock menuItems={menuItems} />

            <GenericVectorBottom 
                position="relative"
            />
        </MenuSection>
    );
}

export default Menu;