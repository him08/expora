import React, { useEffect, useRef } from 'react';

const TajMahalTour = () => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const isViewerInitialized = useRef(false); // 👈 flag to prevent double mounting

  useEffect(() => {
    if (isViewerInitialized.current) return; // ✅ prevent double mount
    isViewerInitialized.current = true;

    let viewer: any = null;
    let panorama: any = null;

    const loadPanorama = async () => {
      const PANOLENS: any = await import('panolens');

      panorama = new PANOLENS.ImagePanorama(
        'https://nix-first-bucket.s3.ap-south-1.amazonaws.com/Expora/tajmahal360.jpg'
      );

      viewer = new PANOLENS.Viewer({
        container: viewerRef.current!,
        autoRotate: true,
        autoRotateSpeed: 0.3,
      });

      viewer.add(panorama);
    };

    loadPanorama();

    return () => {
      if (viewer) {
        viewer.dispose();
      }
      if (viewerRef.current) {
        viewerRef.current.innerHTML = ''; // ✅ remove ghost viewer
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <div ref={viewerRef} className="w-full h-full" />
    </div>
  );
};

export default TajMahalTour;
