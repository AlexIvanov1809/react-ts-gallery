import React, { useState } from 'react';
import { Photo } from '../../types/galleryTypes';
import styles from './Gallery.module.scss';
import { PHOTOS } from '../../constants/photoConstants';
import { MainPhoto, PreviewGallery, Navigation } from '../';

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState<number>(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          className={styles.galleryMainPhoto}
        />
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
        photos={PHOTOS}
        className={styles.galleryPreviewList}
      />
    </div>
  );
};

export default Gallery;
