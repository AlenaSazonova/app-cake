import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';
import ellipse from '../icons/gallery/Ellipse 10.png';
import img1 from '../icons/gallery/img-1.png';
import img2 from '../icons/gallery/img-2.png';
import img3 from '../icons/gallery/img-3.png';
import {
    TopEllipse,
    GallerySection,
    Image,
    ButtomEllipse
}
    from './Gallery.style';


function Gallery() {
    return (
        <GallerySection>
            <GenericTitle
                title="Our Gallery"
                subtitle="Here you can get acquainted with our work"
                marginBottom="31px"
            />
            <TopEllipse>
                <img src={ellipse} alt="ellipse" />
            </TopEllipse>
            <Image>
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
            </Image>
            <ButtomEllipse>
                <img src={ellipse} alt="ellipse" />
            </ButtomEllipse>
        </GallerySection>
    );
}

export default Gallery;