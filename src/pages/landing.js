import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Slide } from 'react-slideshow-image';
import { useLocation } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import img1 from '../images/Widow-hero-img-1.jpeg';
import img2 from '../images/Women-with-disability.jpeg';
import img3 from '../images/Widow-hero-img-1.jpeg';
const Landing = () => {
  const slideImages = [
    {
      url: img1,
      caption: 'Slide 1',
    },
    {
      url: img2,
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
                    className='team-img rounded-xl shadow-xl h-[90vh] bg-cover bg-top mt-10 mx-2 border-2 border-blue-300 '
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <div></div>
      <div className=' bg-blue-200 w-1/2 rounded-md mx-auto p-10'>
        <h2>Name: Atharv Gulati</h2>
        <h2>Email:ssevathebest22@gmail.com</h2>
        <h2>Location:Maharahtra, India</h2>
      </div>
      <div className='relative w-80 h-80 bg-yellow-400 rounded-full p-10 mx-auto mt-10'>
        <FaQuoteLeft className='absolute text-4xl opacity-40 top-24 -translate-x-full -translate-y-2'></FaQuoteLeft>
        <h2 className=' mt-10 absolute top-1/2 -translate-y-20 max-w-sm  -translate-x-5 text-center'>
          If you want something said, ask a man; if you want something done, ask
          a woman.
        </h2>
        <FaQuoteRight className='absolute text-4xl opacity-40 bottom-1/2 right-1/4 translate-y-12 -translate-x-4'></FaQuoteRight>
      </div>
    </>
  );
};

export default Landing;
