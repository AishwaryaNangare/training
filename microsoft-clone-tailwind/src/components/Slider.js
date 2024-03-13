import React from 'react'

function Slider() {
  return (
    <div className="container mx-auto">
<div className='slider flex flex-col md:flex-row justify-center items-center bg-[#f2f2f2]'>
    <div className="left">
        <div className="h-1/2 md:h-full">
            <img className=" h-auto md:h-full object-cover" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600" alt="surface-pro" />
        </div>
    </div>
    <div className="right flex flex-col justify-center items-center  py-20">
        <h1 className='md:text-2xl text-4xl font-medium'>Surface Pro 9</h1>
        <p className='w-3/4 mr-15 text-center'>Tablet versatility and laptop power — all in one ultra-portable device</p>
        <button className='text-white bg-blue-900 p-4 font-bold my-4'>Learn More</button>
    </div>
</div>
</div>





  )
}

export default Slider
