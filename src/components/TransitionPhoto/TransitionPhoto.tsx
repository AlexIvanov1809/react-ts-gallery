import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { CommonClassProps, Photo } from '../../types/galleryTypes';
import styles from './TransitionPhoto.module.scss';
import cn from 'classnames';
import { getPhotoByRef, hidePhoto, showPhoto } from './helpers';

interface TransitionPhotoProps extends CommonClassProps {
  photos: Photo[];
  indexActivePhoto: number;
}

const TransitionPhoto: React.FC<TransitionPhotoProps> = ({
  className,
  indexActivePhoto,
  photos,
}) => {
  const [prevActiveIndexPhoto, setPrevActiveIndexPhoto] =
    useState(indexActivePhoto);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const MainStyle = cn(className, styles.TransitionPhoto);

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const activePhoto = getPhotoByRef(containerRef, prevActiveIndexPhoto);
    const nextPhoto = getPhotoByRef(containerRef, indexActivePhoto);

    if (prevActiveIndexPhoto !== indexActivePhoto) {
      hidePhoto(activePhoto);
      showPhoto(nextPhoto);
    } else {
      showPhoto(activePhoto);
    }

    setPrevActiveIndexPhoto(indexActivePhoto);
  }, [indexActivePhoto]);

  return useMemo(
    () => (
      <div className={MainStyle} ref={containerRef}>
        {photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.src}
            data-active={index === prevActiveIndexPhoto}
            alt={photo.description}
            className={styles.TransitionPhotoImage}
            loading="lazy"
          />
        ))}
      </div>
    ),
    [photos],
  );
};

export default TransitionPhoto;
