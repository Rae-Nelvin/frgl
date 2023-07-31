import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, itemName, itemPrice }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300"
      style={{ opacity: isOpen ? 1 : 0 }}
    >
      <div className="bg-white p-4 2xl:p-10 rounded-lg shadow-md">
        <img src={imageSrc} alt={itemName} className="w-[300px] 2xl:w-[450px] 3xl:w-[680px] mb-3" />
        <h2 className="font-bold text-lg 2xl:text-2xl 3xl:text-3xl mb-1">{itemName}</h2>
        <h3 className="font-normal text-md 2xl:text-xl 3xl:text-2xl">${itemPrice}</h3>
        <button onClick={onClose} className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
