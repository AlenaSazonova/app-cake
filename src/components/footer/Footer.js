import React from 'react';
import GenericVectorTop from '../generic/genericVectorTop/GenericVectorTop';
import twitter from '../icons/footer/Twitter.png';
import facebook from '../icons/footer/Facebook.png';
import instagram from '../icons/footer/Instagram.png';
import logo from '../icons/footer/Group 1.png';
import {
    FooterSection,
    SocialMediaLinks,
    FooterContainer,
    LogoSection,
    FormContainer,
    EmailSubscription,
    Input,
    Button,
    ContactAndHours,
    Contacts,
    WorkingHours
}
    from './Footer.style';


function Footer() {
    return (
        <FooterSection>
            <GenericVectorTop />
            <SocialMediaLinks>
                <a href="https://www.twitter.com/" >
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.facebook.com/" >
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/" >
                    <img src={instagram} alt="instagram" />
                </a>
            </SocialMediaLinks>

            <FooterContainer>
                <LogoSection>
                    <img src={logo} alt="logo" />
                    <p>Macaronsmania</p>
                </LogoSection>

                <FormContainer>
                    <p>Subscribe to the newsletter and be aware of promotions</p>
                    <EmailSubscription>
                        <Input type="text" placeholder="Your Email" />
                        <Button>Send</Button>
                    </EmailSubscription>
                    <p>2023 ©Macaronsmania. All Rights Reserved.</p>
                    <p>Created by Alena</p>
                </FormContainer>

                <ContactAndHours>
                    <Contacts>
                        <h5>Contacts</h5>
                        <p>+123456789</p>
                        <p>macaronsmania@gmail.com</p>
                    </Contacts>
                    <WorkingHours>
                        <h5>Working hours</h5>
                        <p>Mon-Sun from 09:00 to 20:00</p>
                    </WorkingHours>
                </ContactAndHours>
            </FooterContainer>
        </FooterSection>
    );
}

export default Footer;