import React from 'react';

const Speakers = () => {
  return (
    <section id='2' className='h-[100dvh] pt-44 snap-start'>
      <h1 className='text-center text-8xl font-semibold'>Konuşmacılar</h1>
      <div className='grid grid-cols-3 gap-16 mt-24 px-40'>
        {Array(6)
          .fill('')
          .map((_, i) => (
            <div key={i} className='flex justify-center items-center'>
              <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
                <img
                  src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
                  alt='speaker'
                />
              </div>
            </div>
          ))}
        {/* <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
            <img
              src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
              alt='speaker'
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
            <img
              src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
              alt='speaker'
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
            <img
              src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
              alt='speaker'
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
            <img
              src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
              alt='speaker'
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
            <img
              src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
              alt='speaker'
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='overflow-hidden shadow-2xl shadow-[#2f2342] rounded-[50%] flex justify-center items-center h-44 aspect-square'>
            <img
              src='https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1'
              alt='speaker'
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Speakers;
