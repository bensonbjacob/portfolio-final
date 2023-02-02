import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center px-5'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#4f6d7a]'>Jacob.</span>
          </h1>
          <h2 className='py-2 text-gray-700'>
            I&#39;m a front end developer based in Auburn, AL.
          </h2>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Previously a carpenter and builder with experience
            managing and growing small businesses. Now I build things
            with code.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <SocialIcon
              url='https://www.linkedin.com/in/jacob-benson-885004240/'
              target='_blank'
              rel='noreferrer'
              bgColor='transparent'
              fgColor='gray'
              className='shadow-lg rounded-full cursor-pointer hover:scale-110 ease-in duration-300'
            />
            <SocialIcon
              url='https://github.com/bensonbjacob'
              target='_blank'
              rel='noreferrer'
              bgColor='transparent'
              fgColor='gray'
              className='shadow-lg rounded-full cursor-pointer hover:scale-110 ease-in duration-300'
            />
            <SocialIcon
              url='#contact'
              network='email'
              bgColor='transparent'
              fgColor='gray'
              className='shadow-lg rounded-full cursor-pointer hover:scale-110 ease-in duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
