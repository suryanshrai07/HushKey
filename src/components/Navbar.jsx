import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 text-green-500 min-h-[8vh]'>
      <div className='flex justify-between mx-auto items-center md:w-3/5 w-[95%] min-h-[8vh]  '>
        <div className='font-bold text-2xl '>
            <span>&lt;</span>
            <span className='text-white'>Hush</span>
            <span>Key</span>
            <span>&#47; &gt;</span> 
        </div>
        <div className='bg-green-500 py-1 px-5 rounded-full border border-white'> 
            <a href='https://github.com/suryanshrai07/HushKey.git ' target="_blank" ><img src="/github.svg" alt="Github" className='invert w-10 '/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
