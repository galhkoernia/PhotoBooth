/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import { FilterButton } from './FilterButton';
import styles from './Filters.module.css';

export function FilterList({ filters, selectedFilter, onSelect }) {
  return (
    <div className={styles.section}>
      <span className={styles.label}>Filters</span>
      <div className={styles.grid}>
        {filters.map((f) => (
          <FilterButton
            key={f.id}
            filter={f}
            isActive={selectedFilter === f.id}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}