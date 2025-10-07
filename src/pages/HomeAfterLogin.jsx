import React from 'react'
import Embla3 from '../components/Embla3'

export default function HomeAfterLogin() {
  return (
    <main>
        <Embla3 />
        <div className='px-24 py-10 w-full'>
          <div className=" hidden lg:block px-24 py-10 w-full">
            <h1 className="text-[#0E375F] font-semibold text-2xl">Top Business near you</h1>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium leading-tight pt-2">
            We recommend these businesses based on your current location, they
            might be exactly what you need.
          </p>
          <button className="bg-[#0e375f] py-2 px-6 rounded-xl text-white">
            View more
          </button>
        </div>
        </div>
    </main>
  )
}
