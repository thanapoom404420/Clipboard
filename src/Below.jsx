import React from 'react'

function Below() {
  return (
    <div className='w-full flex flex-col justify-center items-center mx-auto px-10  text-center py-[150px]'>
   <div className='flex flex-col justify-center items-center'>
   <h1 className='font-semibold md:max-w-[600px] max-w-[400px] text-4xl text-gray-600'>Clipboard for IOS and Mac OS</h1>
    <p className='py-7 text-gray-400 max-w-[800px] font-medium leading-8'>Lorem ipsum, dolor sit  Minus provident enim quaerat quis, at repellat aspernatur porro eos fuga quam deserunt ea nemo dolore dolor perspiciatis quod, cumque, atque tempore.</p>
    <div className='md:max-w-[950px] md:w-[550px] w-[490px] mt-6 md:mt-5 mx-auto flex-col md:flex-row gap-8 md:gap-10 flex justify-evenly'>
        <button className='btn2 rounded-full py-4 px-[40px]'>Downloads for IOS</button>
        <button className='btn1 rounded-full py-4 px-[40px]'>Downloads for Mac</button>
    </div>
   </div>
</div>
  )
}

export default Below