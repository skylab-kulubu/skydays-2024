import React from 'react';
import img1 from '../assets/image1.png';

const Landing = () => {
  return (
    <section
      id='0'
      className='snap-start pt-72 h-[100dvh] flex justify-between'
    >
      <div>
        <div className='pl-[5.5rem]'>
          <h2 className='text-3xl tracking-wider'>
            SKY LAB KULÜBÜ'nden <br />
            <span className='text-[6rem] font-extrabold leading-[5.5rem]'>
              5.SKYDAYS :
            </span>
            <br />
            Türkiye’nin En büyük siber güvenlik etkinliği
          </h2>
        </div>

        <div className='mt-12 text-4xl font-extralight py-4 bg-gradient-to-r from-[#035A81] to-transparent px-[5.5rem]'>
          <h2>
            22-23 Mart 2024 <br /> YTU Davutpaşa tarihi Hamam
          </h2>
        </div>
      </div>
      <img className='h-96 mr-[5.5rem]' src={img1} alt='img1' />
    </section>
  );
};

export default Landing;
