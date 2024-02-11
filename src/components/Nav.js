import React from 'react';
import logo from '../assets/skylab_logo.png';

const Nav = ({ setCurrentSection }) => {
  return (
    <div className='fixed w-screen z-50 font-semibold text-2xl px-[5.5rem] mt-12'>
      <div
        id='nav-gradient'
        className='flex justify-between outline-1 backdrop-blur-md outline outline-[#789eab] px-8 py-2 rounded-3xl items-center w-full'
      >
        <a href='https://yildizskylab.com'>
          <img className='h-16' src={logo} alt='SKYLAB' />
        </a>
        <div className='flex gap-16 items-center'>
          <button
            onClick={() => setCurrentSection(0)}
            className='p-1 hover:opacity-80'
          >
            Ana Sayfa
          </button>
          <button
            onClick={() => setCurrentSection(1)}
            className='p-1 hover:opacity-80'
          >
            Hakkımızda
          </button>
          <button
            onClick={() => setCurrentSection(2)}
            className='p-1 hover:opacity-80'
          >
            Konuşmacılar
          </button>
          <button
            onClick={() => setCurrentSection(3)}
            className='p-1 hover:opacity-80'
          >
            Sponsorlar
          </button>
          <button
            onClick={() => setCurrentSection(4)}
            className='p-1 hover:opacity-80'
          >
            CTF
          </button>
        </div>
        <button
          onClick={() =>
            (window.location.href = 'https://forms.office.com/r/ZhxGnvtTHd')
          }
          className='bg-[#0075FF] hover:opacity-80 rounded-full px-6 py-1'
        >
          Kayıt OL
        </button>
      </div>
    </div>
  );
};

export default Nav;
