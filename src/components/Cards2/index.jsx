import React from 'react';

export default function Cards3() {
  return (
    <div className='bg-white w-52 h-72 rounded-lg hover:bg-green-500 transition-all text-center hover:shadow-2xl hover:shadow-green-500'>
      <div className='h-20 bg-green-500 rounded-b-full hover:translate-y-1 transition-all'>
        <h1 className='text-center py-5 text-xl'>03</h1>
      </div>
      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='bg-green-500 w-20 h-7 rounded-full relative top-28'>Sumbit</button>
    </div>
  )
}
