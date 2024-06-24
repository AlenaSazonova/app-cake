import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import map from '../icons/contacts/Mapsicle Map.png';
import {
    ContactsSection,
    ImageTextContainer,
    TextContainer,
    TopBlock,
    BottomBlock,
    BlockTitle,
    ContactText,
    ContactDetails,
    WorkingHours
}
    from './Contacts.style';


function Contacts() {
    return (
        <ContactsSection>
            <GenericTitle
                title="How to find us?"
                subtitle="If you want to visit us, you can find up-to-date information about our "
                additionalSubtitle="confectionery here."
                marginBottom="73px"
            />
            <ImageTextContainer>
                <TextContainer>
                    <TopBlock>
                        <ContactDetails>
                            <BlockTitle>Contacts</BlockTitle>
                            <ContactText>+123456789</ContactText>
                            <ContactText>macaronsmania@gmail.com</ContactText>
                        </ContactDetails>
                        <div>
                            <BlockTitle>Location</BlockTitle>
                            <ContactText>c. Paris</ContactText>
                            <ContactText>Rue Raspail, 92300 Levallois-Perret</ContactText>
                        </div>
                    </TopBlock>
                    <BottomBlock>
                        <WorkingHours>
                            <BlockTitle>Workıng hours</BlockTitle>
                            <ContactText>Mon-Sun from 09:00 to 20:00</ContactText>
                        </WorkingHours>
                        <div>
                            <BlockTitle>Social media</BlockTitle>
                            <ContactText>Instagram: macarons_mania </ContactText>
                            <ContactText>Facebook: macarons_mania </ContactText>
                            <ContactText>Twitter: macarons_mania </ContactText>
                        </div>
                    </BottomBlock>
                </TextContainer>
                <div>
                    <img src={map} alt="Map showing our location" />
                </div>
            </ImageTextContainer>
        </ContactsSection>
    );
}

export default Contacts;