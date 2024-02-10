import React from 'react';
import logo from '../../../public/skylab_logo.png';

const Nav = () => {
  return (
    <div className='fixed flex'>
      <img src={logo} alt='SKYLAB' />
    </div>
  );
};

export default Nav;
