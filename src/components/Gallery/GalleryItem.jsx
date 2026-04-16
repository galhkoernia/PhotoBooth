/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import styles from './Gallery.module.css';

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14H6L5 6"/>
    <path d="M10 11v6"/><path d="M14 11v6"/>
    <path d="M9 6V4h6v2"/>
  </svg>
);

export function GalleryItem({ photo, onDownload, onDelete }) {
  return (
    <div className={styles.item}>
      <img src={photo.src} alt={`Photo with ${photo.filter} filter`} />
      <div className={styles.actions}>
        <button
          className={`${styles.actionBtn} ${styles.btnDownload}`}
          onClick={() => onDownload(photo.id)}
          title="Download"
        >
          <DownloadIcon />
        </button>
        <button
          className={`${styles.actionBtn} ${styles.btnDelete}`}
          onClick={() => onDelete(photo.id)}
          title="Delete"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}