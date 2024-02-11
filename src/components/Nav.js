import React from 'react';
import logo from '../assets/skylab_logo.png';

const Nav = () => {
  return (
    <div className='fixed  w-screen font-semibold text-2xl px-[5.5rem] mt-12'>
      <div
        id='nav-gradient'
        className='flex justify-between outline-1 outline outline-[#789eab] px-8 py-2 rounded-3xl items-center w-full'
      >
        <img className='h-16' src={logo} alt='SKYLAB' />
        <div className='flex gap-16 items-center'>
          <h2>Ana Sayfa</h2>
          <h2>Hakkımızda</h2>
          <h2>Konuşmacılar</h2>
          <h2>CTF</h2>
        </div>
        <button className='bg-[#0075FF] rounded-full px-6 py-1'>
          Kayıt OL
        </button>
      </div>
    </div>
  );
};

export default Nav;
