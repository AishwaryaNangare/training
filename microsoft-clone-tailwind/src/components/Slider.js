import React from 'react'

function Slider() {
  return (
<div className='slider flex flex-col md:flex-row h-'>
    <div className="w-full md:w-1/2 md:h-full overflow-hidden">
        <div className="bg-[url('../public/Highlight-Surface.avif')] bg-cover h-[430px] bg-no-repeat " >
        </div>
    </div>
    <div className="right w-full leading-6 md:w-1/2 md:text-left md:pl-8 flex flex-col justify-center bg-[#f2f2f2]">
        <h1 className='text-4xl font-bold mb-5'>Surface Pro 9</h1>
        <p>Tablet versatility and laptop power — all in one ultra-portable<br/> device</p>
        <button class="bg-[rgba(0,103,184,1)] w-[120px] hover:bg-blue-900 text-white font-bold mt-5 py-2 px-4 rounded-sm text-center">
 Learn more
</button>

    </div>
</div>





  )
}

export default Slider