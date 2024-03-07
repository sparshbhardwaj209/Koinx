import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='flex bg-[#eff2f5] justify-center'>
      <div className='w-full lg:w-3/4'>
        <MainContainer />
      </div>
      <div className='hidden lg:block lg:w-1/4'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Body