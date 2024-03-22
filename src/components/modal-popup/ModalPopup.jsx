import React, { useState } from 'react';
import Modal from './Modal';

const ModalPopup = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          id={'custom-id'}
          header={<h2>Customized Header</h2>}
          body={<div>Customized body</div>}
          footer={<h2>Customized Footer</h2>}
        />
      )}
    </div>
  );
};

export default ModalPopup;
