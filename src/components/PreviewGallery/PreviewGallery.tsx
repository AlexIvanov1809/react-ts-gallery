import React, { useEffect, useMemo, useRef } from 'react';
import { CommonClassProps, Photo } from '../../types/galleryTypes';
import styles from './PreviewGallery.module.scss';
import cn from 'classnames';

interface PreviewGalleryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Photo[];
  setNewPhoto: React.Dispatch<React.SetStateAction<number>>;
}

const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  activePhotoIndex,
  photos,
  className,
  setNewPhoto,
}) => {
  if (!photos.length) {
    return null;
  }
  const previewContainer = useRef<HTMLUListElement>(null);
  const previewStyle = cn(className, styles.previewGallery);

  useEffect(() => {
    if (!previewContainer.current) {
      return;
    }
    previewContainer.current.style.transform = `translate3d(-${
      activePhotoIndex * 164
    }px, 0, 0)`;
  }, [activePhotoIndex]);

  return (
    <div className={previewStyle}>
      {useMemo(
        () => (
          <ul ref={previewContainer} className={styles.previewGalleryTrack}>
            {photos.map((photo, index) => (
              <li key={photo.id}>
                <button
                  className={styles.previewGalleryPreview}
                  onClick={() => setNewPhoto(index)}
                >
                  <img
                    src={photo.preview}
                    alt={photo.description}
                    className={styles.previewGalleryImage}
                  />
                </button>
              </li>
            ))}
          </ul>
        ),
        [photos],
      )}
      <div className={styles.previewGalleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PreviewGallery;
