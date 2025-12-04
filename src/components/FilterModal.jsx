import React from 'react'

export default function FilterModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  console.log(isOpen)
  return (
     <div className="fixed  inset-0 bg-black/20 z-50 flex justify-center items-start overflow-y-auto py-10">
      <div className="bg-white rounded-md shadow-lg w-[90%] lg:w-full relative mt-12">
            <div className='flex items-center justify-between bg-secondary px-4 lg:px-16 py-4' >
                <h2 className='font-semibold'>Filters</h2>
                <button
                onClick={onClose}
                 className='text-red-500 text-xl cursor-pointer'>
                    X
                </button>
            </div>
        <div className='px-4 lg:px-16 py-6 '>
            {children}
        </div>
      </div>
    </div>
  )
}
