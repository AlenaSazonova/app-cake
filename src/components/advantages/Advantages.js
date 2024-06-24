import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import icon1 from '../icons/advantagesImg/Icon1.png';
import icon2 from '../icons/advantagesImg/Icon2.png';
import icon3 from '../icons/advantagesImg/Icon3.png';
import AdvantagesCards from '../advantagesCards/AdvantagesCards';
import {
    AdvantagesSection,
    AdvantagesContainer
}
    from './Advantages.style';


function Advantages() {
    return (
        <AdvantagesSection>
            <GenericTitle
                title="Why choose us?"
                subtitle="You will choose us because we know how to surprise you, we always have high quality "
                additionalSubtitle="products."
                marginBottom="75px"
            />
            <AdvantagesContainer>
                <AdvantagesCards 
                    img={icon1}
                    titleBlock="High Quality"
                    subtitleBlock="All our products are of high quality. We purchase products only from verified suppliers."
                />
                <AdvantagesCards 
                    img={icon2}
                    titleBlock="Variety"
                    subtitleBlock="We have about 25 different flavors of macarons. Every day we come up with different flavors so that you can enjoy macarons."
                />
                <AdvantagesCards 
                    img={icon3}
                    titleBlock="Delivery"
                    subtitleBlock="If you want to try our macarons outside our pastry shop, we can deliver them to you in a short time."
                />
            </AdvantagesContainer>
        </AdvantagesSection>
    );
}

export default Advantages;