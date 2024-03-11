import React from "react";

export default function Stories() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <p className="text-5xl lg:text-6xl leading-none font-extrabold text-gray-900">
        Tailwind Stories
      </p>

      <ul className="flex space-x-6">
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-200 to-fuchsia-600 p-1 rounded-full">
            <a href="#" className="block bg-white p-1 rounded-full hover:-rotate-6">
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://source.unsplash.com/random/200x200" 
                  alt="img"
                />
                <button className="create-story">+</button>
              </div>
            </a>
          </div>

          <span>You</span>
        </li>

        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-200 to-fuchsia-600 p-1 rounded-full">
            <a href="#" className="block bg-white p-1 rounded-full  hover:-rotate-6">
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://source.unsplash.com/user/erondu/200x200"
                  alt="img"
                />
              </div>
            </a>
          </div>

          <span>John</span>
        </li>

        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-200 to-fuchsia-600 p-1 rounded-full">
            <a href="#" className="block bg-white p-1 rounded-full  hover:-rotate-6">
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://source.unsplash.com/collection/190727/200x200"
                  alt="img"
                />
              </div>
            </a>
          </div>

          <span>red_ocean</span>
        </li>

        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-200 to-fuchsia-600 p-1 rounded-full">
            <a href="#" className="block bg-white p-1 rounded-full  hover:-rotate-6">
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://source.unsplash.com/TCpfPxKPOvk/200x200"
                  alt="img"
                />
              </div>
            </a>
          </div>
          <span>sweety</span>
        </li>

        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-200 to-fuchsia-600 p-1 rounded-full">
            <a href="#" className="block bg-white p-1 rounded-full  hover:-rotate-6">
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="https://source.unsplash.com/200x200/?nature,water"
                  alt="img"
                />
              </div>
            </a>
          </div>

          <span>snugless22</span>
        </li>
      </ul>
    </div>
  );
}
