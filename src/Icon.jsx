import React from 'react'
import goo from '/src/assets/images/logo-google.png'
import ibm from '/src/assets/images/logo-ibm.png'
import mi from '/src/assets/images/logo-microsoft.png'
import hp from '/src/assets/images/logo-hp.png'
import last from '/src/assets/images/logo-vector-graphics.png'

function Icon() {
  return (
    <div className='flex flex-col md:flex-row text-center w-full md:max-w-[1190px] pt-[100px] pb-[20px] justify-center items-center mx-auto'>
      <div className='flex flex-col  md:flex-row md:gap-0 px-10 gap-10 justify-center items-center'>
      <div className='md:pr-[100px] pt-[50px] md:pt-0'>
        <img src={goo} alt="" />
        </div>
        <div className='md:pr-[100px] pt-[50px] md:pt-0'>
        <img src={ibm} alt="" />
        </div>
        <div className='md:pr-[100px] pt-[50px] md:pt-0'>
        <img src={mi} alt="" />
        </div>
        <div className='md:pr-[100px] pt-[50px] md:pt-0'>
        <img src={hp} alt="" />
        </div>
        <div className=' pt-[50px] md:pt-0'>
        <img src={last} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Icon