/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import { useState, useRef, useCallback } from 'react';
import { applyFilterToCanvas } from '../utils/canvas';
import { downloadImage } from '../utils/download';

const MAX_PHOTOS = 10;

export function useCapture() {
  const [photos, setPhotos] = useState([]);
  const [isFlashing, setIsFlashing] = useState(false);
  const canvasRef = useRef(null);

  const capturePhoto = useCallback((videoEl, filterCSS, filterId) => {
    if (!videoEl || !canvasRef.current) return;

    // Flash effect
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 280);

    const canvas = canvasRef.current;
    canvas.width  = videoEl.videoWidth  || 640;
    canvas.height = videoEl.videoHeight || 480;

    applyFilterToCanvas(canvas, videoEl, filterCSS);

    const dataUrl = canvas.toDataURL('image/png');
    const newPhoto = { id: Date.now(), src: dataUrl, filter: filterId };

    setPhotos((prev) => [newPhoto, ...prev].slice(0, MAX_PHOTOS));
    return newPhoto;
  }, []);

  const deletePhoto = useCallback((id) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setPhotos([]);
  }, []);

  const download = useCallback((id) => {
    const photo = photos.find((p) => p.id === id);
    if (photo) downloadImage(photo.src);
  }, [photos]);

  return { photos, isFlashing, canvasRef, capturePhoto, deletePhoto, clearAll, download };
}