import React from 'react';

const Accordion = ({ item, currentChoice, setCurrentChoice }) => {
  if (item.id === 0) {
    return (
      <div
        id='nav-gradient'
        className='border h-min w-[90%] md:w-4/5 border-[#789eab]'
      >
        <div
          onClick={() => {
            currentChoice === item.id
              ? setCurrentChoice(null)
              : setCurrentChoice(item.id);
          }}
          className='flex justify-between cursor-pointer p-4 items-center'
        >
          <h2 className='text-lg sm:text-2xl font-medium'>{item.question}</h2>
          <svg
            className='h-10'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                className={`${
                  currentChoice === item.id ? 'opacity-0' : 'opacity-100'
                } transition-opacity`}
                d='M12 6V18'
                stroke='#FFF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>{' '}
              <path
                d='M6 12H18'
                stroke='#FFF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>{' '}
            </g>
          </svg>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            currentChoice === item.id
              ? 'grid-rows-[1fr] opacity-100 p-4'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <p className='overflow-hidden text-lg md:text-xl text-white/80'>
            <a
              className='underline'
              href='https://forms.office.com/r/ZhxGnvtTHd'
            >
              Zirve formu
            </a>
            <br />
            <a
              className='underline'
              href='https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbiW71iuprpdGm4fb9lyf0dFUM0s4TzlPU0ROSUtGVlJHNDRZSDZPSjVMUy4u'
            >
              Yarışma formu
            </a>
          </p>
        </div>
      </div>
    );
  } else
    return (
      <div
        id='nav-gradient'
        className='border h-min w-[90%] md:w-4/5 border-[#789eab]'
      >
        <div
          onClick={() => {
            currentChoice === item.id
              ? setCurrentChoice(null)
              : setCurrentChoice(item.id);
          }}
          className='flex justify-between cursor-pointer p-4 items-center'
        >
          <h2 className='text-lg sm:text-2xl font-medium'>{item.question}</h2>
          <svg
            className='h-10'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                className={`${
                  currentChoice === item.id ? 'opacity-0' : 'opacity-100'
                } transition-opacity`}
                d='M12 6V18'
                stroke='#FFF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>{' '}
              <path
                d='M6 12H18'
                stroke='#FFF'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>{' '}
            </g>
          </svg>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            currentChoice === item.id
              ? 'grid-rows-[1fr] opacity-100 p-4'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <p className='overflow-hidden text-lg md:text-xl text-white/80'>
            {item.answer}
          </p>
        </div>
      </div>
    );
};

export default Accordion;
