import React from 'react'

import heroimg from './assets/images/illustration-article.svg';
import menimg from './assets/images/image-avatar.webp'

export const Blogpreviewcardmain = () => {
  return (
            <div className='h-screen w-screen bg-yellow flex justify-center items-center '>
            <div className='bg-white w-[327px] h-[501px] md:w-[384px] md:h-[522px] rounded-2xl shadow-lg border border-black border-solid border-1'>
{/* Image Part */}
            <div className='w-[279px] md:w-[336px] h-[200px]'>
                <img src={heroimg} className='m-6 rounded-2xl' alt="" />
            </div>
{/* text Part */}
            <div className='mx-4 md:mx-6 md:my-8'>
            <a href="" className='px-3 py-2 rounded font-bold bg-yellow'>Learning</a>
            <p className='mt-4'>Published 21 Dec 2023</p>
            <h1 className='text-bold hover:text-yellow font-bold text-2xl mt-2'>HTML & CSS foundations</h1>
            <p className='text-gray my-2'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            </div>
{/* Profile  part */}
            <div className='flex mx-6 my-8'>
                <img src={menimg} alt="menimg" className='w-8 h-8' />
                <h4 className='font-bold mx-2'>Greg Hooper</h4>
            </div>
            </div>
            </div>
 
  )
}
