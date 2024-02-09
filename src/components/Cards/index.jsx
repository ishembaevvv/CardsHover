import React from 'react';

export default function Cards2() {
  return (
    <div className='bg-white w-52 h-72 rounded-lg hover:bg-blue-500 transition-all text-center hover:shadow-2xl hover:shadow-blue-500'>
      <div className='h-20 bg-blue-500 rounded-b-full hover:translate-y-1 transition-all'>
        <h1 className='text-center py-5 text-xl'>01</h1>
      </div>
      <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='bg-blue-500 w-20 h-7 rounded-full relative top-28'>Sumbit</button>
    </div>
  )
}
