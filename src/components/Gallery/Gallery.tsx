import React, { useState } from 'react';
import { Photo } from '../../types/galleryTypes';
import styles from './Gallery.module.scss';
import { TransitionPhoto, PreviewGallery, Navigation } from '../';

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState<number>(0);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <TransitionPhoto photos={photos} indexActivePhoto={indexActivePhoto} />
        <Navigation
          className={styles.galleryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => setIndexActivePhoto(indexActivePhoto - 1)}
          onNextClick={() => setIndexActivePhoto(indexActivePhoto + 1)}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={styles.galleryPreviewList}
        setNewPhoto={setIndexActivePhoto}
      />
    </div>
  );
};

export default Gallery;
