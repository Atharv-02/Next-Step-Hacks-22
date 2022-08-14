import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Slide } from 'react-slideshow-image';
import { useLocation } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';

const Landing = () => {
  const slideImages = [
    {
      url: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg',
      caption: 'Slide 1',
    },
    {
      url: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg',
      caption: 'Slide 2',
    },
    {
      url: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg',
      caption: 'Slide 3',
    },
  ];
  return (
    <>
      <Navbar />
      <div className='z-10'>
        <div className='my-10'>
          <div className='slide-container'>
            <Slide autoplayInterval={3000}>
              {slideImages.map((slideImage, index) => (
                <div className='each-slide' key={index}>
                  <div
                    style={{ backgroundImage: `url(${slideImage.url})` }}
                    className='team-img rounded-xl shadow-xl h-[70vh] bg-cover bg-center mt-10 mx-2 '
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <div>
        <h1>Our Vision</h1>
      </div>
      <div className=' bg-blue-200 w-1/2 rounded-md mx-auto p-10'>
        <h2>Name: Atharv Gulati</h2>
        <h2>Email:ssevathebest22@gmail.com</h2>
        <h2>Location:Maharahtra, India</h2>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
