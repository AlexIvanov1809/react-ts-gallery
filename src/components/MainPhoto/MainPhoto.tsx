import React from 'react';
import { CommonClassProps, Photo } from '../../types/galleryTypes';
import styles from './MainPhoto.module.scss';
import cn from 'classnames';

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo;
  nextPhoto?: Photo;
}

const MainPhoto: React.FC<MainPhotoProps> = ({
  className,
  prevPhoto,
  nextPhoto,
  activePhoto,
}) => {
  const MainStyle = cn(className, styles.mainPhoto);
  return (
    <div className={MainStyle}>
      {prevPhoto && (
        <img
          src={prevPhoto.src}
          alt={prevPhoto.description}
          className={styles.mainPhotoImagePrev}
        />
      )}
      <img
        src={activePhoto.src}
        alt={activePhoto.description}
        className={styles.mainPhotoImage}
      />
      {nextPhoto && (
        <img
          src={nextPhoto.src}
          alt={nextPhoto.description}
          className={styles.mainPhotoImageNext}
        />
      )}
    </div>
  );
};

export default MainPhoto;
