import React from 'react'
import bg from '/src/assets/images/bg-header-desktop.png'
import './App.css'
function Nav() {
  return (
    <div className='w-full h-[1250px] md:h-[1050px]'>
      <div className='absolute top-[00px] h-full w-full flex flex-col justify-center items-center text-center'>
      <img className='max-w-full object-fill h-full relative top-0' src={bg} alt="" />
     <div className='pb-12 absolute top-[200px]'>
     <svg className='spin' width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/></g></svg>
     </div>
      <div className='flex top-[380px] absolute flex-col text-center justify-center items-center'>
       <h1 className='h1 text-gray-600 font-bold text-6xl'> A history of everything you copy</h1>
       <p className='py-3 mt-4 px-10 md:px-0 max-w-[800px] leading-7 text-gray-400 font-medium'>Lorem ipsum dolor sit amet, Provident asperiores ratione recusandae debitis nulla consectetur nihil officia, minus tenetur fugiat ex, aliquid ipsum doloremque sequi commodi!</p>
       <div className='flex md:flex-row flex-col gap-8 w-[490px] h-full mt-10 justify-between'>
        <button className='btn2 py-4 px-12 rounded-full'>Download for IOS</button>
        <button className='btn1 py-4 px-12 rounded-full'>Download for Mac</button>
       </div>
      </div>
      <div className='flex pt-5 pb-10 px-10 flex-col absolute top-[950px] md:top-[800px] max-w-[800px]'>
        <h1 className='font-semibold text-4xl text-gray-600 mx-auto md:max-w-full max-w-[400px]'>Keep track of your snippets</h1>
        <p className='py-5 leading-8 text-gray-400 font-medium'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.elit. Odio, corporis reiciendis at non vitae illum repellat. Unde temporibus numquam omnis magni, iure at maxime voluptatibus nisi ipsam rem. Vero, assumenda.</p>
      </div>
      </div>
    </div>
  )
}

export default Nav