import React from 'react';
import gold from '../assets/gold.png';
import silver from '../assets/silver.png';
import bronze from '../assets/bronze.png';

const CTF = () => {
  return (
    <section id='4' className='pt-32 md:pt-44'>
      <div className='px-8 sm:px-24 md:px-[10rem]'>
        <h2 className='text-3xl sm:text-6xl lg:text-8xl font-semibold text-center'>
          SKYDAYS
        </h2>
        <h2 className='text-2xl sm:text-4xl lg:text-6xl font-normal text-center'>
          CTF
        </h2>
        <h2 className='text-4xl lg:text-6xl mt-12 lg:mt-20'>CTF nedir?</h2>
        <p className='text-xl sm:text-3xl lg:text-4xl font-extralight mt-4'>
          CTF (Capture The Flag), bilgisayar güvenliği ve bilgi güvenliği
          becerilerini geliştirmek için düzenlenen rekabetçi bir etkinliktir.
          Katılımcılar, çeşitli bilgi güvenliği sorunlarını çözmek için yarışır
          ve bayrak adı verilen gizli verileri (flag) ele geçirmeye çalışırlar.
          Bu bayraklar genellikle bir sunucuda saklanır ve katılımcılar,
          sunucudaki güvenlik açıklarını ve zayıflıkları kullanarak bayrakları
          ele geçirmeye çalışırlar.
        </p>
        <button className='bg-[#0075FF] hover:opacity-80 rounded-full mt-6 sm:mt-8 text-2xl md:text-4xl font-semibold px-8 py-3'>
          Kayıt Ol
        </button>
        <p className='text-xl sm:text-3xl lg:text-4xl font-extralight mt-6 sm:mt-8'>
          CTF sırasında küçük ödüllerin olacağı, bunların yanında ilk 3'e para
          ödülü ve diğer katılımcılara ise hatıra ödüllerinin verileceği, toplam
          6 kategori ve 18 sorudan oluşacak olan okulumuzda yapılmış ilk CTF
          yarışması olacaktır.
        </p>
      </div>

      <div className='flex items-center justify-center gap-6 mt-4 lg:mt-24'>
        <div>
          <div className='mb-16 sm:mb-0 flex h-24 lg:h-40 gap-8'>
            <img src={gold} alt='gold' />
            <div>
              <h2 className='text-2xl lg:text-4xl font-extralight'>
                Birincilik Ödülü
              </h2>
              <h1 className='text-6xl lg:text-8xl font-bold'>5.000$</h1>
            </div>
          </div>
          <div className='block sm:hidden'>
            <div className='flex h-24 lg:h-40 gap-8'>
              <img src={silver} alt='gold' />
              <div>
                <h2 className='text-2xl lg:text-4xl font-extralight'>
                  İkincilik Ödülü
                </h2>
                <h1 className='text-6xl lg:text-8xl font-bold'>5.000$</h1>
              </div>
            </div>
          </div>
          <div className='hidden sm:flex h-60'></div>
          <div className='mt-16 sm:mt-0 flex h-24 lg:h-40 gap-8'>
            <img src={bronze} alt='gold' />
            <div>
              <h2 className='text-2xl lg:text-4xl font-extralight'>
                Üçüncülük Ödülü
              </h2>
              <h1 className='text-6xl lg:text-8xl font-bold'>5.000$</h1>
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          <div className='absolute rounded-[50%] mb-80 lg:mb-96 h-10 lg:h-16 aspect-square bg-white'></div>
          <div className='absolute rounded-[50%] h-10 lg:h-16 aspect-square bg-white'></div>
          <div className='absolute rounded-[50%] mt-80 lg:mt-96 h-10 lg:h-16 aspect-square bg-white'></div>
          <svg
            className='w-[0.6rem] lg:w-3 h-[32rem] lg:h-auto'
            xmlns='http://www.w3.org/2000/svg'
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
        <div className='hidden sm:block'>
          <div className='flex h-24 lg:h-40 gap-8'>
            <img src={silver} alt='gold' />
            <div>
              <h2 className='text-2xl lg:text-4xl font-extralight'>
                İkincilik Ödülü
              </h2>
              <h1 className='text-6xl lg:text-8xl font-bold'>5.000$</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='bg-[#0075FF] hover:opacity-80 rounded-full mt-4 lg:mt-10 text-2xl lg:text-4xl font-semibold px-8 py-3'>
          Kayıt Ol
        </button>
      </div>
    </section>
  );
};

export default CTF;
