import React from 'react';
import GenericVectorTop from '../generic/genericVectorTop/GenericVectorTop';

import twitter from '../../assets/footer/Twitter.png';
import facebook from '../../assets/footer/Facebook.png';
import instagram from '../../assets/footer/Instagram.png';
import logo from '../../assets/footer/Group 1.png';

import {
    StyledFooter,
    StyledFooterLinks,
    StyledFooterBlock,
    StyledFooterLogo,
    StyledFooterSubscriptionForm,
    StyledFooterInputWithButton,
    StyledFooterInput,
    StyledFooterButton,
    StyledFooterInformation,
    StyledFooterContacts,
    StyledFooterWorkingHours
}
    from './Footer.style';


function Footer() {
    return (
        <StyledFooter>
            <GenericVectorTop />
            <StyledFooterLinks>
                <a href="https://www.google.com/" >
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.google.com/" >
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.google.com/" >
                    <img src={instagram} alt="instagram" />
                </a>
            </StyledFooterLinks>

            <StyledFooterBlock>
                <StyledFooterLogo>
                    <img src={logo} alt="logo" />
                    <p>Macaronsmania</p>
                </StyledFooterLogo>

                <StyledFooterSubscriptionForm>
                    <p>Subscribe to the newsletter and be aware of promotions</p>
                    <StyledFooterInputWithButton>
                        <StyledFooterInput type="text" placeholder="Your Email" />
                        <StyledFooterButton>Send</StyledFooterButton>
                    </StyledFooterInputWithButton>
                    <p>2023 ©Macaronsmania. All Rights Reserved.</p>
                    <p>Created by Julianna</p>
                </StyledFooterSubscriptionForm>

                <StyledFooterInformation>
                    <StyledFooterContacts>
                        <h5>Contacts</h5>
                        <p>+123456789</p>
                        <p>macaronsmania@gmail.com</p>
                    </StyledFooterContacts>
                    <StyledFooterWorkingHours>
                        <h5>Workıng hours</h5>
                        <p>Mon-Sun from 09:00 to 20:00</p>
                    </StyledFooterWorkingHours>
                </StyledFooterInformation>
            </StyledFooterBlock>
        </StyledFooter>
    );
}

export default Footer;