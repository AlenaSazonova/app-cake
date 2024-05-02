import React from 'react';
import GenericTitle from '../generic/genericTitle/GenericTitle';

import ellipse from '../../assets/gallery/Ellipse 10.png';
import img1 from '../../assets/gallery/img-1.png';
import img2 from '../../assets/gallery/img-2.png';
import img3 from '../../assets/gallery/img-3.png';

import {
    StyledGalleryEllipseTop,
    StyledSectionGallery,
    StyledGallery,
    StyledGalleryEllipseButton
}
    from './Gallery.style';




function Gallery() {
    return (
        <StyledSectionGallery>
            <GenericTitle
                title="Our Gallery"
                subtitle="Here you can get acquainted with our work"
                marginBottom="31px"
            />
            <StyledGalleryEllipseTop>
                <img src={ellipse} alt="ellipse" />
            </StyledGalleryEllipseTop>
            <StyledGallery>
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
            </StyledGallery>
            <StyledGalleryEllipseButton>
                <img src={ellipse} alt="ellipse" />
            </StyledGalleryEllipseButton>
        </StyledSectionGallery>
    );
}

export default Gallery;