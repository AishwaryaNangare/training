import React from 'react'
import CardList from './CardData'

function Promo() {

  const cardPromo = [
    {
      title: 'Surface Laptop 5',
      description: 'Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=380&hei=213&fit=crop',
    },
    {
      title: 'Surface Laptop Studio',
      description: 'Description forFlex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11. Card 2',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=380&hei=213&fit=crop',
    },
    {
      title: 'Xbox Series X',
      description: 'The fastest, most powerful Xbox ever.',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=380&hei=213&fit=crop',
    },
    {
      title: 'Maximise the everyday with Microsoft 365',
      description: 'Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop',
    },
  ];

  const cardBusiness = [
    {
      title: 'Surface For Business',
      description: 'No matter what you do, there’s a Surface to help you do it.',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop',
    },
    {
      title: 'Get Microsoft Teams for free',
      description: 'Get Microsoft Teams for free',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=380&hei=213&fit=crop',
    },
    {
      title: 'Windows 11 for business',
      description: 'Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=380&hei=213&fit=crop',
    },
    {
      title: 'Join the era of AI',
      description: 'Create, communicate, and code with the latest Microsoft AI solutions.',
      imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop',
    },
  ];
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

      <div className="promocard">
      <CardList cardData={cardPromo} />
      </div>

      <div className=" hidden md:block flex justify-center items-center h-auto mb-12 ml-16">
  <div className="w-5/6 relative">
    <div className="bg-cover bg-center flex justify-center items-center" style={{ width: '1366px', height: '514px', backgroundImage: "url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP5-1596x600')" }}>
      <div className="absolute inset-0 flex flex-col justify-center p-8 text-left">
        <h5 className="text-4xl font-semibold my-3">Xbox Series S</h5>
        <p className="my-2">Next gen Performance in the smallest Xbox ever</p>
        <div className="flex justify-start mt-4"> 
          <button className='text-white bg-[#0067b8] px-3 py-3  font-semibold '>Shop Xbox Series S</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="business">
  <h2 className='text-4xl font-semibold mx-16 mb-4'>For Business</h2>
  <CardList cardData={cardBusiness}/> 
</div>

<div className="social flex  items-center space-x-2 mt-16 mb-20 mx-14">
  <p className='mr-4'>Follow Microsoft</p>
  <span><img className='w-8' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="facebook" /></span>
  <span><img className='w-8' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-MSCOM-X-64x64?scl=1" alt="twitter" /></span>
  <span><img className='w-8' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1" alt="Youtube" /></span>
</div>

    </div>
  )
}

export default Promo
