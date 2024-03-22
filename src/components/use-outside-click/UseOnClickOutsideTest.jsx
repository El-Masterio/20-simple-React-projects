import React, { useRef, useState } from 'react';
import useOutsideClick from '.';

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false)); // this will check if the  reference of click is not inside the contnet then it will set it to false (it means simply if the user clicks outside of the div )
  return (
    <div>
      {showContent ? (
        <div ref={ref} style={{ background: '#eeee', padding: '15px' }}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close it. It won't close if you
            click inside of this element
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
