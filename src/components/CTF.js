import React from 'react';
import gold from '../assets/gold.png';
import silver from '../assets/silver.png';
import bronze from '../assets/bronze.png';

const CTF = () => {
  return (
    <section id='4' className='px-[10rem] pt-44'>
      <h2 className='text-8xl font-semibold text-center'>SKYDAYS</h2>
      <h2 className='text-6xl font-normal text-center'>CTF</h2>
      <p className='text-5xl font-extralight mt-20'>
        22 Mart cuma günü saat 19.00'da başlayıp, 23 mart cumartesi günü saat
        19.00'da bitecektir.
      </p>
      <button className='bg-[#0075FF] hover:opacity-80 rounded-full mt-8 text-4xl font-semibold px-8 py-3'>
        Kayıt Ol
      </button>
      <p className='text-4xl font-extralight mt-8'>
        CTF sırasında küçük ödüllerin olacağı, bunların yanında ilk 3'e para
        ödülü ve diğer katılımcılara ise hatıra ödüllerinin verileceği, toplam 6
        kategori ve 18 sorudan oluşacak olan okulumuzda yapılmış ilk CTF
        yarışması olacaktır.
      </p>

      <div className='flex items-center justify-center gap-10 mt-24'>
        <div>
          <div className='flex h-40 gap-8'>
            <img src={gold} alt='gold' />
            <div>
              <h2 className='text-4xl font-extralight'>Birincilik Ödülü</h2>
              <h1 className='text-8xl font-bold'>5.000$</h1>
            </div>
          </div>
          <div className='flex h-60'></div>
          <div className='flex h-40 gap-8'>
            <img src={bronze} alt='gold' />
            <div>
              <h2 className='text-4xl font-extralight'>Üçüncülük Ödülü</h2>
              <h1 className='text-8xl font-bold'>5.000$</h1>
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          <div className='absolute rounded-[50%] mb-96 h-16 aspect-square bg-white'></div>
          <div className='absolute rounded-[50%] h-16 aspect-square bg-white'></div>
          <div className='absolute rounded-[50%] mt-96 h-16 aspect-square bg-white'></div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='792'
            viewBox='0 0 14 792'
            fill='none'
          >
            <path
              d='M6 6L8 785.029'
              stroke='url(#paint0_linear_31_12)'
              stroke-width='12'
              stroke-linecap='round'
            />
            <defs>
              <linearGradient
                id='paint0_linear_31_12'
                x1='2.99418'
                y1='-2.49996'
                x2='7.99241'
                y2='772.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='white' stop-opacity='0' />
                <stop
                  offset='0.06'
                  stop-color='white'
                  stop-opacity='0.260825'
                />
                <stop offset='0.485' stop-color='white' stop-opacity='0.575' />
                <stop
                  offset='0.93'
                  stop-color='white'
                  stop-opacity='0.396359'
                />
                <stop offset='1' stop-color='white' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <div className='flex h-40 gap-8'>
            <img src={silver} alt='gold' />
            <div>
              <h2 className='text-4xl font-extralight'>İkincilik Ödülü</h2>
              <h1 className='text-8xl font-bold'>5.000$</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='bg-[#0075FF] hover:opacity-80 rounded-full mt-8 text-4xl font-semibold px-8 py-3'>
          Kayıt Ol
        </button>
      </div>
    </section>
  );
};

export default CTF;
