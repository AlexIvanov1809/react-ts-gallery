import React from 'react';
import { CommonClassProps } from '../../types/galleryTypes';
import styles from './Navigation.module.scss';
import cn from 'classnames';

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  className,
  disabledNext,
  disabledPrev,
  onNextClick,
  onPrevClick,
}) => {
  const navStyle = cn(className, styles.navigation);
  const leftBtnStyle = cn(styles.navigationBtn, styles.navigationBtnLeft);
  const rightBtnStyle = cn(styles.navigationBtn, styles.navigationBtnRight);
  return (
    <div className={navStyle}>
      <button
        disabled={disabledPrev}
        className={leftBtnStyle}
        onClick={onPrevClick}
        type="button"
      >
        Show previous photo
      </button>
      <button
        disabled={disabledNext}
        className={rightBtnStyle}
        onClick={onNextClick}
        type="button"
      >
        Show next photo
      </button>
    </div>
  );
};

export default Navigation;
