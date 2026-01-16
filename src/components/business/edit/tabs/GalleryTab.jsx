import React, { useState } from 'react'
import ImageUpload from '../../../shared/ImageUpload'

export default function GalleryTab() {
    const [image, setImage] = useState(null)
  return (
    <div className='space-y-4 text-primary'>
        <h1 className='font-semibold'>Gallery</h1>
        <p>Uploaded Images</p>
        <div className="max-w-md">
            <ImageUpload
        variant="gallery"
        value={image}
        onChange={setImage}
      />
        </div>

    </div>
  )
}
