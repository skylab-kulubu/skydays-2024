import React, { useEffect } from 'react';
import logo from '../assets/skylab_logo.png';

const Nav = ({ setCurrentSection }) => {
  const [menuOpened, setMenuOpened] = React.useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMenuOpened(false);
    });
  }, []);

  return (
    <>
      {/* BACKGROUND FOR MOBILE */}
      <div
        onClick={() => setMenuOpened(false)}
        className={`${
          menuOpened ? null : 'hidden'
        } overflow-hidden fixed transition-all w-screen h-[100dvh] z-40 bg-[#100c2b]/30`}
      ></div>

      {/* NAV FOR MOBILE */}
      <div
        id='nav-gradient'
        className={`${
          menuOpened ? null : '-translate-y-full'
        } bg-red-400 flex flex-col gap-6 border-b border-[#789eab] items-center justify-center w-screen h-96 z-50 transition-transform duration-300 fixed`}
      >
        <button
          onClick={() => {
            setMenuOpened(false);
            setCurrentSection(0);
          }}
          className='p-1 hover:opacity-80'
        >
          Ana Sayfa
        </button>
        <button
          onClick={() => {
            setMenuOpened(false);
            setCurrentSection(1);
          }}
          className='p-1 hover:opacity-80'
        >
          Hakkımızda
        </button>
        <button
          onClick={() => {
            setMenuOpened(false);
            setCurrentSection(2);
          }}
          className='p-1 hover:opacity-80'
        >
          Konuşmacılar
        </button>
        <button
          onClick={() => {
            setMenuOpened(false);
            setCurrentSection(3);
          }}
          className='p-1 hover:opacity-80'
        >
          Sponsorlar
        </button>
        <button
          onClick={() => {
            setMenuOpened(false);
            setCurrentSection(4);
          }}
          className='p-1 hover:opacity-80'
        >
          CTF
        </button>
        <button onClick={() => setMenuOpened(false)}>
          <svg
            className='h-12'
            viewBox='0 -0.5 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                d='M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z'
                fill='#FFF'
              ></path>{' '}
            </g>
          </svg>
        </button>
      </div>

      <div className='fixed w-screen z-40 font-semibold text-lg lg:text-2xl px-8 lg:px-[5.5rem] mt-6 md:mt-12'>
        <div
          id='nav-gradient'
          className='flex justify-between outline-1 backdrop-blur-md outline outline-[#789eab] px-6 py-2 rounded-3xl items-center w-full'
        >
          <a href='https://yildizskylab.com'>
            <img className='h-10 md:h-16' src={logo} alt='SKYLAB' />
          </a>
          <div className='hidden md:flex gap-2 lg:gap-8 text-xl items-center'>
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
            className='bg-[#0075FF] hidden md:block hover:opacity-80 rounded-full px-4 py-1'
          >
            Kayıt OL
          </button>
          <button className='md:hidden' onClick={() => setMenuOpened(true)}>
            <svg
              className='overflow-visible'
              width='28'
              height='16'
              viewBox='0 0 28 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                className='origin-left duration-500 transition-all'
                y1='1'
                x2='28'
                y2='1'
                stroke='#EADAFF'
                strokeWidth='2'
              />
              <line
                className='duration-300 transition-all'
                y1='8'
                x2='28'
                y2='8'
                stroke='#EADAFF'
                strokeWidth='2'
              />
              <line
                className='origin-left duration-500 transition-all'
                y1='15'
                x2='28'
                y2='15'
                stroke='#EADAFF'
                strokeWidth='2'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
