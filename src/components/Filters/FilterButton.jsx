/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import styles from './Filters.module.css';

export function FilterButton({ filter, isActive, onClick }) {
  return (
    <button
      className={`${styles.filterBtn} ${isActive ? styles.active : ''}`}
      onClick={() => onClick(filter.id)}
    >
      {filter.label}
    </button>
  );
}