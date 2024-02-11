import React from 'react';

const About = () => {
  return (
    <section
      id='1'
      className='h-[100dvh] snap-start px-4 sm:px-10 md:px-24 lg:px-[10rem] pt-32 sm:pt-64'
    >
      <div
        id='nav-gradient'
        className='outline-1 outline backdrop-blur-md outline-[#789eab] px-4 sm:px-10 lg:px-16 py-6 rounded-3xl items-center w-full'
      >
        <h2 className='text-3xl sm:text-6xl lg:text-[5.5rem] font-bold'>
          Hakkımızda
        </h2>
        <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extralight'>
          Bu yıl 5. kez düzenlenecek olan SKYDAYS, 22-23 Mart tarihlerinde
          gerçekleşecek bir siber güvenlik etkinliğidir. Etkinlik 2 gün sürecek
          olup seminer ve CTF’ten oluşacaktır
          <br />
          <br />
          Etkinliğimizin ilk gününde katılımcılarımız;birbirinden değerli
          isimlerin bu alandakisunumlarını dinleyecek, fuaye alanlarıylanetwork
          elde edecek ve çeşitli yarışmalar ilede hediyeler kazanabilecek.
          Etkinlik ikincigününde ise CTF yarışması ile sonlanacaktır.
        </p>
      </div>
    </section>
  );
};

export default About;
