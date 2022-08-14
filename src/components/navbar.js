import React from 'react';

const Navbar = () => {
  return (
    <nav class='reletive  bg-red-300 mx-auto p-6'>
      <div class='flex items-center justify-between'>
        <div class='pt-2'>
          <img src='./img/logo.svg' alt='' />
        </div>
        <div class='hidden md:flex space-x-8'>
          <a href='#' class='hover:text-gray-400'>
            Pricing
          </a>
          <a href='#' class='hover:text-gray-400'>
            About
          </a>
          <a href='#' class='hover:text-gray-400'>
            Products
          </a>
          <a href='#' class='hover:text-gray-400'>
            Careers
          </a>
          <a href='#' class='hover:text-gray-400'>
            Community
          </a>
        </div>
        <a
          href='#'
          class='hidden md:block p-3 px-6 pt-2 text-white bg-red-800 rounded-full baseline'
        >
          Update Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
