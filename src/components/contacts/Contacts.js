import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';

import map from '../../assets/contacts/Mapsicle Map.png';

import {
    StyledSectionContacts,
    StyledContactsAndMap,
    StyledContactsWithoutMap,
    StyledContactsFirstBlock,
    StyledContactsSecondBlock,
    StyledContactsTitle,
    StyledContactsText,
    StyledContactsContacts,
    StyledContactsWorkingOurs
}
    from './Contacts.style';


function Contacts() {
    return (
        <StyledSectionContacts>
            <GenericTitle
                title="How to find us?"
                subtitle="If you want to visit us, you can find up-to-date information about our "
                subTitleAdd="confectionery here."
                marginBottom="73px"
            />
            <StyledContactsAndMap>
                <StyledContactsWithoutMap>
                    <StyledContactsFirstBlock>
                        <StyledContactsContacts>
                            <StyledContactsTitle>Contacts</StyledContactsTitle>
                            <StyledContactsText>+123456789</StyledContactsText>
                            <StyledContactsText>macaronsmania@gmail.com</StyledContactsText>
                        </StyledContactsContacts>
                        <div>
                            <StyledContactsTitle>Location</StyledContactsTitle>
                            <StyledContactsText>c. Paris</StyledContactsText>
                            <StyledContactsText>Rue Raspail, 92300 Levallois-Perret</StyledContactsText>
                        </div>
                    </StyledContactsFirstBlock>
                    <StyledContactsSecondBlock>
                        <StyledContactsWorkingOurs>
                            <StyledContactsTitle>Workıng hours</StyledContactsTitle>
                            <StyledContactsText>Mon-Sun from 09:00 to 20:00</StyledContactsText>
                        </StyledContactsWorkingOurs>
                        <div>
                            <StyledContactsTitle>Social media</StyledContactsTitle>
                            <StyledContactsText>Instagram: macarons_mania </StyledContactsText>
                            <StyledContactsText>Facebook: macarons_mania </StyledContactsText>
                            <StyledContactsText>Twitter: macarons_mania </StyledContactsText>
                        </div>
                    </StyledContactsSecondBlock>
                </StyledContactsWithoutMap>
                <div>
                    <img src={map} alt="map" />
                </div>
            </StyledContactsAndMap>
        </StyledSectionContacts>
    );
}

export default Contacts;