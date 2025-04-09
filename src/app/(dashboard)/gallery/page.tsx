
import { getImages } from '@/app/actions/image-acations';
import GalleryComponent from '@/components/gallery/GalleryComponent';

import React from 'react'
// import GalleryComponent from '@/components/gallery/GalleryComponent';

const Gallery = async () => {

  const {data: images} = await getImages;
  return (
    <section className='container mx-auto'>
      <h1 className='text-3xl font-semibold mb-2'>My Images</h1>
      <p className='text-muted-foreground mb-6'>
        Here you can see all the images you have generated. Click on an image to view details. 
        Adding more images in it so can make it better
      </p>
      <GalleryComponent images={images || []} />
    </section>
  )
}

export default Gallery