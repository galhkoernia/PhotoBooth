/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import { GalleryItem } from './GalleryItem';
import styles from './Gallery.module.css';

const EmptyIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

export function GalleryPanel({ photos, onDownload, onDelete, onClearAll }) {
  const isEmpty = photos.length === 0;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Gallery
          <span className={styles.badge}>{photos.length}</span>
        </h2>
        {!isEmpty && (
          <button className={styles.clearBtn} onClick={onClearAll}>
            Clear all
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className={styles.empty}>
          <EmptyIcon />
          <p>No photos yet</p>
          <span>Capture your first photo!</span>
        </div>
      ) : (
        <div className={styles.grid}>
          {photos.map((photo) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              onDownload={onDownload}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}