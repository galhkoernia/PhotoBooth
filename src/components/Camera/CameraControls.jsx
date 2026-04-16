/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import styles from './Camera.module.css';

const CameraIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

export function CameraControls({ onCapture, disabled }) {
  return (
    <button
      className={styles.captureBtn}
      onClick={onCapture}
      disabled={disabled}
    >
      <CameraIcon />
      Capture Photo
    </button>
  );
}