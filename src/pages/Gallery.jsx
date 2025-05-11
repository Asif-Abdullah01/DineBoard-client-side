
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import f1 from '../assets/food1.jpg'
import f2 from '../assets/food2.jpg'
import f3 from '../assets/food3.jpg'
import f4 from '../assets/food4.jpg'
import f5 from '../assets/food5.jpg'
import f6 from '../assets/food6.jpg'
import f7 from '../assets/food7.jpg'
import f8 from '../assets/food8.jpg'
import f9 from '../assets/food9.jpg'
import f10 from '../assets/food10.jpg'
import f11 from '../assets/food11.jpg'
import f12 from '../assets/food12.jpg'
import { Helmet } from 'react-helmet';
const GalleryPage = () => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
       
        { src: f1 },
        { src: f2 },
        { src: f3 },
        { src: f4 },
        { src: f5 },
        { src: f6 },
        { src: f7 },
        { src: f8 },
        { src: f9 },
        { src: f10 },
        { src: f11 },
        { src: f12 },

    ];

    const handleOpen = (index) => {
        setCurrentImage(index);
        setOpen(true);
    };

    return (
        <>
            <Helmet>
                <title>DineBoard | Gallery</title>
            </Helmet>

            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1 className='text-3xl font-bold my-2 mb-2 text-yellow-600'>Foods Gallery</h1>
                <p className='text-yellow-600'>Take a glance at the kingdom of flavors in just one look.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-60 m-2 cursor-pointer rounded-md"
                            onClick={() => handleOpen(index)}
                        />
                    ))}
                </div>
                {open && (
                    <Lightbox
                        open={open}
                        index={currentImage}
                        close={() => setOpen(false)}
                        slides={images}
                    />
                )}
            </div>
        </>

    );
};

export default GalleryPage;
