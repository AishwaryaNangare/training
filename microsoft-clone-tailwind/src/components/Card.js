// Card.js
import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col mx-4 my-4" style={{ width: '324px', height: '518px' }}>
      <div>
        {data.imageUrl && <img src={data.imageUrl} alt="Card" className="w-323 h-181 mb-4" />}
        <h2 className="text-lg lg:text-3xl font-semibold my-2 p-2">{data.title}</h2>
        <p className="text-sm lg:text-base text-gray-700 my-4 p-2">{data.description}</p>
      </div>
      <div className="mt-auto mb-4 mx-4">
        <button className="bg-[#0067b8] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
