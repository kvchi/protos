import React from 'react'

export default function  EmptyBusinessState() {
  return (
    
        <div className="flex flex-col items-center justify-center mt-32 text-center space-y-10">
      <p className="text-2xl font-semibold text-primary">
        No Business Found
      </p>
      <button className='bg-primary p-2 rounded-md text-white text-sm'>
                + Add New business
      </button>
    </div>
    
  )
}
