import React from 'react';

const About = () => {
  return (
    <section
      id='1'
      className='h-[100dvh] flex flex-col justify-center sm:block snap-start px-4 sm:px-10 md:px-24 lg:px-[10rem] pt-32 sm:pt-52'
    >
      <div
        id='nav-gradient'
        className='outline-1 outline backdrop-blur-md outline-[#789eab] px-4 sm:px-10 lg:px-16 py-6 rounded-3xl items-center w-full'
      >
        <h2 className='text-3xl sm:text-6xl lg:text-[5.5rem] font-bold'>
          SKYDAYS NEDİR?
        </h2>
        <p className='text-lg sm:text-2xl lg:text-3xl font-extralight'>
          SKYLAB: Bilgisayar Bilimleri Kulübü tarafından bu yıl beşincisi
          gerçekleştirilecek olan SKYDAYS, bir öğrenci kulübü tarafından
          düzenlenen en büyük siber güvenlik etkinliğidir.
          <br />
          <br />
          Etkinlik, ilk gün katılımcıları sektörün önde gelen isimleri ve
          şirketleriyle buluşturacak olan zirveyle başlayarak ikinci gün CTF
          yarışması ile devam edecektir.
        </p>
      </div>
    </section>
  );
};

export default About;
