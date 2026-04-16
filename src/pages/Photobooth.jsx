/*
 * Created on Thu Apr 16 2026
 *
 * Copyright (c) 2026 Your Company
 */

import { useCamera }  from '../hooks/useCamera';
import { useFilters } from '../hooks/useFilters';
import { useCapture } from '../hooks/useCapture';

import { CameraPlaceholder } from '../components/Camera/CameraPlaceholder';
import { CameraView }        from '../components/Camera/CameraView';
import { CameraControls }    from '../components/Camera/CameraControls';
import { FilterList }        from '../components/Filters/FilterList';
import { GalleryPanel }      from '../components/Gallery/GalleryPanel';
import { Toast }             from '../components/UI/Toast';
import { useToast }            from '../hooks/useToast';

import styles from './Photobooth.module.css';

export default function Photobooth() {
  const { cameraEnabled, error, videoRef, enableCamera } = useCamera();
  const { selectedFilter, setSelectedFilter, currentFilterCSS, filters } = useFilters();
  const { photos, isFlashing, canvasRef, capturePhoto, deletePhoto, clearAll, download } = useCapture();
  const { message, visible, showToast } = useToast();

  async function handleEnableCamera() {
    await enableCamera();
    showToast('Camera enabled!');
  }

  function handleCapture() {
    if (!videoRef.current) return;
    capturePhoto(videoRef.current, currentFilterCSS, selectedFilter);
    showToast('Photo captured!');
  }

  function handleDownload(id) {
    download(id);
    showToast('Downloading…');
  }

  function handleDelete(id) {
    deletePhoto(id);
    showToast('Photo deleted.');
  }

  function handleClearAll() {
    clearAll();
    showToast('Gallery cleared.');
  }

  return (
    <div className={styles.page}>

      {/* Header */}
      <header className={styles.header}>
        <h1>Photo Booth</h1>
        <p>Capture amazing photos with creative filters</p>
      </header>

      {/* Layout */}
      <main className={styles.layout}>

        {/* Left: camera + filters + capture */}
        <div className={styles.mainPanel}>

          {/* Camera area */}
          <div className={styles.cameraWrap}>
            {cameraEnabled ? (
              <CameraView
                videoRef={videoRef}
                filterCSS={currentFilterCSS}
                isFlashing={isFlashing}
              />
            ) : (
              <CameraPlaceholder onEnable={handleEnableCamera} />
            )}
          </div>

          {/* Error message */}
          {error && <p className={styles.errorMsg}>{error}</p>}

          {/* Filters */}
          <FilterList
            filters={filters}
            selectedFilter={selectedFilter}
            onSelect={setSelectedFilter}
          />

          {/* Capture btn */}
          <CameraControls
            onCapture={handleCapture}
            disabled={!cameraEnabled}
          />
        </div>

        {/* Right: gallery */}
        <GalleryPanel
          photos={photos}
          onDownload={handleDownload}
          onDelete={handleDelete}
          onClearAll={handleClearAll}
        />
      </main>

      {/* Hidden canvas for capture */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Toast */}
      <Toast message={message} visible={visible} />
    </div>
  );
}