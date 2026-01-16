import React from 'react'

export default function CustomLegend() {
  return (
    
  <div className="flex gap-4 text-xs text-gray-500 mb-3">
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-[#8FB6D9]" />
      Business views
    </div>

    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-[#355F7A]" />
      Business visited
    </div>

    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-[#0F2A44]" />
      Reviews
    </div>
  </div>

  )
}

