import React from 'react';
import useWindowResize from '.';
import './style.css';
const UseWindowResizeTest = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div className="windowResize__parent">
      <div className="windowResize__container">
        <h1>Use Window resize Hook</h1>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
      </div>
    </div>
  );
};

export default UseWindowResizeTest;
