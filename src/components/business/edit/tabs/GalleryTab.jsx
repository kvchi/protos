import React, { useState, useEffect } from "react";
import ImageUpload from "../../../shared/ImageUpload";

export default function GalleryTab({ business }) {
  const [image, setImage] = useState(business?.image ?? null);

  useEffect(() => {
    if (business?.image) setImage(business.image);
  }, [business?.id, business?.image]);

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
