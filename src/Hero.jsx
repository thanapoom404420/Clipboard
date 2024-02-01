import React from 'react'
import pic from '/src/assets/images/image-computer.png'
import pic1 from '/src/assets/images/image-devices.png'
function Hero() {
  return (
    <div className='w-full'>
        <div className='md:flex px-10 md:px-10'>
            <div className='md:relative static md:right-[68px]'>
            <img src={pic} className='' alt="" />
            </div>
            <div className='px-8 mt-7 md:mt-[-20px] md:none md:text-left flex items-center justify-center flex-col text-center py-10'>
                <div>
                <h1 className='text-2xl font-bold text-gray-600'>Quick Search</h1>
                <p className='mt-2 max-w-[400px] leading-8 text-gray-400 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, assumenda!</p>
                </div>
                <div className='mt-[50px]'>
                <h1 className='text-2xl font-bold text-gray-600'>iCould Sync</h1>
                <p className='mt-2 max-w-[400px] leading-8 text-gray-400 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, assumenda!</p>
                </div>
                 <div className='mt-[50px]'>
                 <h1 className='text-2xl font-bold text-gray-600'>Complete History</h1>
                <p className='mt-2 max-w-[400px] leading-8 text-gray-400 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, assumenda!</p>
                </div>
            </div>
        </div>
        <div className='flex md:p-[150px] flex-col justify-center mt-[20px] text-center items-center'>
            <h1 className='font-bold text-3xl max-w-[300px] md:max-w-full text-gray-600'>Acces Clipboard Anywhere</h1>
            <p className='max-w-[500px] md:max-w-[750px] py-5'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, odit. Lorem ipsum dolor sit amet.</p>
            <img src={pic1} className=' pt-20 pb-[80px]' alt="" />
            <h1 className='font-semibold text-4xl text-gray-600'>Superchange your workflow</h1>
            <p className='text-gray-400 font-medium pt-5 pb-20'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem, ipsum.</p>
            <div className='md:flex max-w-[1800px] mt-5 px-10 justify-center text-center gap-5'>
                <div className='flex max-w-[700px] mt-[100px] md:mt-[3px] flex-col items-center'>
                <svg  className='mb-14' width="44" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="#9EABB2" fill-rule="nonzero"><path d="M11.07 0C8.353 0 6.14 2.192 6.14 4.876l-.179 25.278 2.69.02.179-25.289c0-1.21 1.005-2.196 2.24-2.196h27.027V0H11.071z"/><path d="M38.097 0a5.115 5.115 0 00-5.11 5.11v28.37c0 2.052-1.668 3.72-3.72 3.72a3.725 3.725 0 01-3.72-3.72V30.21c0-.743-.601-1.345-1.344-1.345H1.345C.602 28.864 0 29.466 0 30.21v3.272a6.417 6.417 0 006.41 6.409V37.2a3.724 3.724 0 01-3.72-3.72v-1.927h20.168v1.928a6.417 6.417 0 006.41 6.409 6.417 6.417 0 006.409-6.41V12.46h6.185c.743 0 1.345-.602 1.345-1.345V5.11A5.115 5.115 0 0038.097 0zm2.42 9.77h-4.84V5.11a2.423 2.423 0 012.42-2.42 2.423 2.423 0 012.42 2.42v4.66z"/><path d="M6.14 37.201h22.813v2.689H6.14zM19.99 7.485h-6.947a1.345 1.345 0 100 2.69h6.947a1.345 1.345 0 100-2.69zM28.057 12.863H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69zM28.057 18.242H13.043a1.345 1.345 0 100 2.69h15.014a1.344 1.344 0 100-2.69zM28.057 23.62H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69z"/></g></svg>
                <h1 className='font-bold text-3xl text-gray-600'>Create blacklists</h1>
                <p className='text-gray-400 max-w-[700px] leading-8 mt-5 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laborum exercitationem voluptate accusantium, placeat libero!</p>
                </div>
                <div className='flex max-w-[700px] mt-[100px] md:mt-[10px] flex-col items-center'>
                <svg className='mb-14'  width="36" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z" fill="#9EABB2" fill-rule="nonzero"/></svg>
                <h1 className='font-bold text-3xl text-gray-600'>Plain text snippets</h1>
                <p className='text-gray-400 max-w-[1200px]  leading-8 mt-5 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, maxime?</p>
                </div>
                <div className='flex mt-[100px] md:mt-[10px] md:pr-20 flex-col items-center'>
                <svg className='mb-14'  width="50" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M49.059 14.072c-2.585-4.227-6.06-7.623-10.424-10.188C34.27 1.318 29.66.035 24.806.035c-4.854 0-9.464 1.283-13.829 3.849C6.612 6.449 3.137 9.845.554 14.072c-.37.646-.554 1.283-.554 1.91 0 .628.185 1.265.554 1.91 2.583 4.227 6.058 7.624 10.423 10.189 4.365 2.565 8.975 3.847 13.83 3.847 4.853 0 9.463-1.277 13.828-3.833 4.365-2.557 7.84-5.957 10.424-10.202.369-.646.553-1.283.553-1.91 0-.628-.184-1.265-.553-1.911zM18.867 6.5c1.652-1.652 3.631-2.478 5.939-2.478.369 0 .683.13.941.388.258.258.388.572.388.941 0 .37-.13.683-.387.941a1.28 1.28 0 01-.942.388c-1.587 0-2.944.563-4.07 1.689-1.126 1.126-1.688 2.482-1.688 4.07 0 .369-.13.683-.388.941a1.28 1.28 0 01-.941.388c-.37 0-.683-.13-.942-.388a1.282 1.282 0 01-.388-.942c0-2.306.827-4.286 2.478-5.938zm17.969 18.522c-3.701 2.242-7.71 3.364-12.03 3.364-4.319 0-8.329-1.121-12.03-3.364-3.7-2.243-6.777-5.256-9.232-9.04 2.805-4.356 6.321-7.614 10.548-9.773a12.099 12.099 0 00-1.689 6.23c0 3.414 1.214 6.334 3.64 8.762 2.428 2.427 5.349 3.64 8.763 3.64 3.415 0 6.335-1.213 8.762-3.64 2.428-2.427 3.641-5.348 3.641-8.763 0-2.233-.563-4.31-1.689-6.229 4.227 2.16 7.743 5.418 10.548 9.773-2.454 3.784-5.532 6.797-9.232 9.04z" fill="#9EABB2" fill-rule="nonzero"/></svg>
                <h1 className='font-bold text-3xl text-gray-600'>Sneak preview</h1>
                <p className='text-gray-400 max-w-[700px]  leading-8 mt-5 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.</p>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Hero