import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft } from 'react-icons/fa';
import img from '../images/Widow-img.jpeg';
import SignIn from './signin';
const Home = () => {
  const [modal, setModal] = useState(false);
  const handleSubmit = () => {
    setModal(true);
  };
  const [person, setPerson] = useState({});
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url(${img})`,
        }}
        className='w-screen h-screen bg-no-repeat bg-center bg-cover reletive'
      >
        <div className={`${modal ? 'invisible' : 'w-screen h-screen grid'}`}>
          <h1 className='text-4xl font-extrabold text-center self-end'>
            Welcome To Empower
          </h1>
          <div
            className={`absolute ease-in duration-300 top-1/2 -translate-x-1/2 -translate-y-1/2 visible ' ${
              modal ? 'right-0 ' : 'right-full'
            }`}
          >
            <SignIn person={person} setPerson={setPerson}></SignIn>
          </div>
          <div>
            <p className='text-2xl text-center mt-6'>
              A web portal for the employement of women
            </p>
            <div>
              <button
                className='block text-center bg-green-400 w-40 p-6 opacity-60 rounded-full mx-auto mt-6 hover:scale-90 ease-in duration-300'
                onClick={handleSubmit}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* <div className=''>
          <FaQuoteLeft className=''></FaQuoteLeft>
          <h2 className=''>
            If you want something said, ask a man; if you want something done,
            ask a woman.
          </h2>
        </div> */}

        {/* Counter for number of widows world wide */}
      </div>
    </>
  );
};

export default Home;
