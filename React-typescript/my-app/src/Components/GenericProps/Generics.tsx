import React from 'react';

type ListProps<T extends React.ReactNode> = {
  items: T[];
  onClick: (value: T) => void;
};

function Generics<T extends React.ReactNode>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List Of Items</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default Generics;