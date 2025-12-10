import React from 'react'

export default function PlaceOrder({ isOpen, onClose, title = "Modal", children }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center modal-overlay'>
      <div className='bg-white rounded-lg w-[90%] md:w-[40%] relative'>
  
        <div className="flex justify-between items-center p-2 bg-[#E0E0E0] mb-4 rounded-t-md">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className='text-tetiary cursor-pointer text-2xl' onClick={onClose}>
            x
          </button>
        </div>

        <div className='p-4'>
          {children}
        </div>
      </div>
    </div>
  );
}

