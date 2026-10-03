import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-18'>
        <h4 className='bg-black text-white uppercase rounded-full px-6 py-2 font-bold text'>Target Audience</h4>
        <button className='bg-white text-blue-900 uppercase px-6 py-2 rounded-full font-bold hover:bg-gray-200 tracking-wider text-sm'>
            Digital Banking Platform
        </button>
    </div>
  )
}

export default Navbar
