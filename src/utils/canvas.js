/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

/**
 * Draws a mirrored video frame onto the canvas and applies a CSS filter.
 * The video element itself is CSS-mirrored (scaleX -1), so we mirror
 * the canvas draw as well so the captured image is not flipped.
 */
export function applyFilterToCanvas(canvas, videoEl, filterCSS) {
  const ctx = canvas.getContext('2d');
  const { width, height } = canvas;

  ctx.clearRect(0, 0, width, height);

  // Save, mirror, draw
  ctx.save();
  ctx.translate(width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(videoEl, 0, 0, width, height);
  ctx.restore();

  // Apply filter via CSS filter trick on a temp canvas
  if (filterCSS && filterCSS !== 'none') {
    const tmp = document.createElement('canvas');
    tmp.width  = width;
    tmp.height = height;
    const tmpCtx = tmp.getContext('2d');
    tmpCtx.filter = filterCSS;
    tmpCtx.drawImage(canvas, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(tmp, 0, 0);
  }
}