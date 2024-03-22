import React, { useRef } from 'react';

const ScrollToSection = () => {
  const sectionRef = useRef();

  const customDummyData = [
    {
      label: 'First Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'red',
      },
    },
    {
      label: 'First Second',
      style: {
        width: '100%',
        height: '600px',
        background: 'purple',
      },
    },
    {
      label: 'First Third',
      style: {
        width: '100%',
        height: '600px',
        background: 'brown',
      },
    },
    {
      label: 'First Forth',
      style: {
        width: '100%',
        height: '600px',
        background: 'yellow',
      },
    },
    {
      label: 'First Fifth',
      style: {
        width: '100%',
        height: '600px',
        background: 'green',
      },
    },
  ];

  function handleScrollToSection() {
    let pos = sectionRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {customDummyData.map((dataItem, index) => (
        <div
          ref={index === 4 ? sectionRef : null}
          key={dataItem.label}
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
