import React, { useEffect, useRef } from 'react';

const EiffelTowerTour = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: any;

    const loadPanorama = async () => {
      const PANOLENS: any = await import('panolens'); // 👈 Cast to `any` to silence TS errors

      const panorama = new PANOLENS.ImagePanorama(
        'https://nix-first-bucket.s3.ap-south-1.amazonaws.com/Expora/eiffel_tower360.jpg'
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
      if (viewer && viewer.container) {
        viewerRef.current?.removeChild(viewer.container);
      }
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <div ref={viewerRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default EiffelTowerTour;
