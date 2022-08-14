import React from 'react';

const New = () => {
  return (
    <>
      <form action=''>
        <label htmlFor='fullName'>Name:</label>
        <input type='type' name='fullName' />
        <br />
        <label htmlFor='email'>E-mail:</label>
        <input type='email' name='email' />
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
      </form>
    </>
  );
};

export default New;
