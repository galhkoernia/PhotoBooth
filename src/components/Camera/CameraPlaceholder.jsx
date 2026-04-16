/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import styles from './Camera.module.css';

export function CameraPlaceholder({ onEnable }) {
  return (
    <div className={styles.placeholder}>
      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
      <h3>Ready to Start?</h3>
      <p>Click the button below to enable your camera and start taking photos with amazing filters</p>
      <button className={styles.enableBtn} onClick={onEnable}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
        Enable Camera
      </button>
    </div>
  );
}