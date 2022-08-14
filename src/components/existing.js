import React from 'react';

const Existing = () => {
  return (
    <>
      <div>
        <form action='' className='flex flex-col space-y-12  '>
          <div className=' flex flex-row '>
            <label
              htmlFor='email'
              className='w-1/4 inline-block justify-items-center'
            >
              E-mail:
            </label>
            <input type='email' name='email' className='w-full h-6' />
          </div>
          <br />
          <div className=' flex flex-row'>
            <label htmlFor='password' className='w-1/2'>
              Password:
            </label>
            <input type='password' name='password' className='w-1/2' />
          </div>
        </form>
      </div>
    </>
  );
};

export default Existing;
