/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import styles from './Camera.module.css';

export function CameraView({ videoRef, filterCSS, isFlashing }) {
  return (
    <>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        playsInline
        muted
        style={{ filter: filterCSS !== 'none' ? filterCSS : undefined }}
      />
      {isFlashing && <div className={styles.flashOverlay} />}
    </>
  );
}