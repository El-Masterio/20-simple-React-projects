import React, { useState } from 'react';
import './style.css';

const RandomColor = () => {
  const [typeOffColor, setTypeOffColor] = useState('hex');
  const [color, setColor] = useState('#fff');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHex() {
    //#123123
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgb() {
    // rgb(0 -> 255 , 0 -> 255 , 0 -> 255)
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      className="container"
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <div className="container-btns">
        <button onClick={() => setTypeOffColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOffColor('rgb')}>Create RGB Color</button>
        <button
          onClick={
            typeOffColor === 'hex'
              ? handleCreateRandomHex
              : handleCreateRandomRgb
          }
        >
          Generate Random Color
        </button>
      </div>

      <div className="color__content">
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
