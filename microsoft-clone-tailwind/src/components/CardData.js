import React from 'react';
import Card from './Card';

const CardList = ({ cardData }) => {
  return (
    <div className="flex flex-wrap justify-center mb-20">
      {cardData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
};

export default CardList;
