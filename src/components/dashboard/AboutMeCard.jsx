import React from 'react'

export default function AboutMeCard({
    bio,
    location,
    zip,
    email
}) {
  return (
   <section className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="font-bold text-lg mb-3 text-primary">About Me</h2>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {bio}
      </p>

      <div className="space-y-3">
        <p className="font-bold">
          Location
          <span className="block font-medium text-gray-700">
            {location}
          </span>
        </p>

        <p className="font-bold">
          Zip Code
          <span className="block font-medium text-gray-700">
            {zip}
          </span>
        </p>

        <p className="font-bold">
          Email Address
          <span className="block font-medium text-gray-700">
            {email}
          </span>
        </p>
      </div>
    </section>
  )
}
