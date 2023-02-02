import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jacobImg from '../public/assets/jacob.png';

const About = () => {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 px-5 flex items-center py-16'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#4f6d7a]'>
            About
          </p>
          <h2 className='py-4'>I love to build.</h2>
          <p className='py-2 text-gray-600'>
            I started coding in the 90s with by making HTML pages and
            simple QBASIC apps. That experience led to creating IRC
            bots and managing a local BBS. I moved to the Caribbean
            shortly after finishing high school and I didn&#39;t find
            many opportunities to use my computer skills there. I then
            began honing my skills as a carpenter and electrician in
            order to support myself. I&#39;ve spent the past ~20 years
            building and remodeling homes, restaurants and retail
            buildings all across the US and Caribbean. Now I build
            with code.
          </p>

          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Below you&#39;ll find some of my most recent work.
            </p>
          </Link>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='w-10/12 sm:4/12 px-4'>
            <Image
              src={jacobImg}
              className='shadow shadow-gray-400 rounded-full h-auto max-w-full align-middle border-none'
              alt='/'
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
