import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = ({ person, setPerson }) => {
  const [signIn, setSignIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name, email };
    setPerson(newPerson);
    console.log(person);
  };
  return (
    <div
      className='bg-red-400 opacity-60 p-6 rounded-lg border-green-900 border-8'
      style={{ width: '50vw' }}
    >
      <h1 className='text-3xl text-center '>Sign Up</h1>
      <form>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Name</label>
          <input
            className='rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30'
            type='email'
            name='email'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Password</label>
          <input
            className='rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30'
            type='password'
            name='profession'
          />
        </div>

        <div className='flex items-center justify-center pt-3'>
          <button
            onClick={handleSubmit}
            className=' text-center py-3 rounded-3xl text-sm px-14 cursor-pointer hover:scale-105 ease-in duration-200'
            type='submit'
            id='btn'
            className='block text-center text-xl bg-green-500 w-40 py-2 opacity-60 rounded-full mx-auto mt-6 hover:scale-90 ease-in duration-300'
          >
            <Link to='/landing'>Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
