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
				<div className="search">Search</div>
			</div>
			<div className="logo text-center md:order-1 md:flex">
				<img
					className="w-28"
					src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
					alt=""
				/>
				<div
					className="features absolute md:static w-fit inset-0 bg-[#f2f2f2] md:w-auto md:bg-white md:flex md:items-center md:justify-center md:space-x-2 md:mx-4 hidden"
				>
					<div className="fitems">Microsoft 365</div>
					<div className="fitems">Teams</div>
					<div className="fitems">Copilot</div>
          <div className="fitems">Windows</div>
					<div className="fitems">Surface</div>
					<div className="fitems">Xbox</div>
					<div className="fitems">Support</div>
				</div>
			</div>
			<div className="secondBlock text-center flex md:order-3">
				<div className="search hidden md:block">All Microsoft</div>
				<div className="search hidden md:block">Search</div>
				<div className="cart">cart</div>
				<div className="profile">Profile</div>
			</div>
		</div>
  );
}

export default Navbar;
