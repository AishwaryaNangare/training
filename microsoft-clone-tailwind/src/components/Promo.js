import React from 'react'

function Promo() {
  return (
    <div className='promo'>
      <div className="items flex flex-col md:flex-row items-center justify-center space-x-8 my-8 p-4">

        <div className='flex flex-col items-center'>
        <img  className='w-10 h-10 'src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="1" />
        <div className='my-6'>Choose your Microsoft 365</div>
        </div>

        <div className="flex flex-col items-center">
        <img  className='w-10 h-10'src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" alt="2" />
        <div className='my-6'>Shop Xbox games and consoles</div>
        </div>

        <div className="flex flex-col items-center">
        <img  className='w-10 h-10'src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="3" />
        <div className='my-6'>Get Windows 11</div>
        </div>

        <div className="flex flex-col items-center">
        <img  className='w-10 h-10'src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40" alt="4" />
        <div className='my-6'>Explore Surface devices</div>
        </div>
      </div>

    <div className="flex justify-center items-center h-auto mb-10">
  <div className="w-5/6 relative">
    <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP5-1596x600')" }}>
      <div className="absolute inset-0 flex flex-col justify-center p-8 text-left">
        <h5 className="text-4xl font-semibold my-3">Xbox Series S</h5>
        <p className="my-2">Next gen Performance in the smallest Xbox ever</p>
        <div className="flex justify-start mt-4"> {/* Aligns content to the bottom */}
          <button className='text-white bg-blue-900 px-6 py-3 rounded-lg font-bold'>Shop Xbox Series S</button>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Promo
