/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

export function downloadImage(dataUrl, filename) {
  const ts = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  const name = filename ?? `photobooth_${ts}.png`;
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = name;
  link.click();
}