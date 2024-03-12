import React, { useRef } from 'react';

const TextInput = () => {
  // Create a ref to store the input element
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Access the current value of the input element using inputRef.current
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default TextInput;
