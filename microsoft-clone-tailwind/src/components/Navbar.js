import React from "react";

function Navbar() {
  return (
    <div className="navbar flex bg-[#ffffff] p-4 items-center justify-between">
			<div className="firstblock flex justify-center items-center md:hidden">
				<div className="hamburger inline-block p-4 cursor-pointer">
					<div className="line bg-black w-6 h-0.5 my-1"></div>
					<div className="line bg-black w-6 h-0.5 my-1"></div>
					<div className="line bg-black w-6 h-0.5 my-1"></div>
				</div>
				<div className="search MX-2">Search</div>
			</div>
			<div className="logo text-center md:order-1 md:flex">
				<img
					className="w-28"
					src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
					alt="logo"
				/>
				<div
					className="features absolute md:static w-fit inset-0 bg-[#f2f2f2] md:w-auto md:bg-white md:flex md:items-center md:justify-center md:space-x-6 md:mx-4 hidden"
				>
					<div className="fitems text-xs ">Microsoft 365</div>
					<div className="fitems text-xs ">Teams</div>
					<div className="fitems text-xs ">Copilot</div>
          <div className="fitems text-xs ">Windows</div>
					<div className="fitems text-xs ">Surface</div>
					<div className="fitems text-xs ">Xbox</div>
					<div className="fitems text-xs ">Support</div>
				</div>
			</div>
			<div className="secondBlock text-center flex md:order-3 items-center">
				<div className="search hidden md:block mr-6 text-xs">All Microsoft</div>

				<div className="relative">
  <input type="text" id="search-bar" placeholder="Search" className="pl-1 py-1 w-24 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-sm" />
  <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
    <img className="w-6 h-6" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="Search Icon" />
  </div>
</div>

<div className="flex items-center mx-3">
  <div className="mr-1 text-xs">cart</div>
  <div className="w-6 h-6"><img src="shopping-cart.png" alt=""/></div>
</div>
<div className="flex items-center mx-3">
  <div className="mr-1 text-xs">Sign In</div>
  <div className="w-6 h-6"><img src="user.png" alt=""/></div>
</div>

			</div>
		</div>
  );
}

export default Navbar;
