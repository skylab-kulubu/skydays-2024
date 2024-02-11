import React from 'react';
import img1 from '../assets/image1.png';

const Landing = () => {
  return (
    <section
      id='0'
      className='snap-start pt-32 md:pt-36 lg:pt-0 h-[100dvh] flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-12 md:gap-0 md:justify-between'
    >
      <div>
        <div className='pl-4 sm:pl-8 lg:pl-[5.5rem]'>
          <h2 className='text-lg sm:text-2xl lg:text-3xl tracking-wider'>
            SKY LAB KULÜBÜ'nden <br />
            <span className='text-6xl sm:text-7xl lg:text-[6rem] font-extrabold sm:leading-[5.5rem]'>
              5.SKYDAYS:
            </span>
            <br />
            Türkiye’nin En büyük siber güvenlik etkinliği
          </h2>
        </div>

        <div className='mt-4 sm:mt-12 text-2xl sm:text-4xl font-extralight py-4 bg-gradient-to-r from-[#035A81] to-transparent px-4 sm:px-8 lg:px-[5.5rem]'>
          <h2>
            22-23 Mart 2024 <br /> YTU Davutpaşa tarihi Hamam
          </h2>
        </div>
      </div>
      <img
        className='h-64 md:h-80 mr-89 lg:mr-[5.5rem]'
        src={img1}
        alt='img1'
      />
    </section>
  );
};

export default Landing;
