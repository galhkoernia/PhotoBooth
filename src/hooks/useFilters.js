/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import { useState } from 'react';

export const FILTERS = [
  { id: 'none',         label: 'None',          css: 'none' },
  { id: 'grayscale',    label: 'Grayscale',      css: 'grayscale(1)' },
  { id: 'sepia',        label: 'Sepia',          css: 'sepia(1)' },
  { id: 'vintage',      label: 'Vintage',        css: 'contrast(120%) sepia(0.5) brightness(0.95)' },
  { id: 'cool',         label: 'Cool',           css: 'hue-rotate(180deg) saturate(1.2)' },
  { id: 'warm',         label: 'Warm',           css: 'hue-rotate(-20deg) saturate(1.3) brightness(1.05)' },
  { id: 'blur',         label: 'Blur',           css: 'blur(4px)' },
  { id: 'invert',       label: 'Invert',         css: 'invert(1)' },
  { id: 'highcontrast', label: 'High Contrast',  css: 'contrast(200%) brightness(1.1)' },
  { id: 'bright',       label: 'Bright',         css: 'brightness(1.5) saturate(1.2)' },
  { id: 'dark',         label: 'Dark',           css: 'brightness(0.5) contrast(1.3)' },
  { id: 'neon',         label: 'Neon',           css: 'brightness(1.4) contrast(2) saturate(2)' },
];

export function useFilters() {
  const [selectedFilter, setSelectedFilter] = useState('none');

  const currentFilterCSS = FILTERS.find((f) => f.id === selectedFilter)?.css ?? 'none';

  return { selectedFilter, setSelectedFilter, currentFilterCSS, filters: FILTERS };
}