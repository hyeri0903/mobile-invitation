'use client';

import Script from 'next/script';

export default function Home() {
  const clientId = process.env.NEXT_PUBLIC_MAP_CLIENT_ID;

  const handleLoad = () => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer || typeof window.naver === 'undefined') return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.4979, 127.0276), // 강남역 좌표
      zoom: 16,
      zoomControl: true,
    };

    const map = new window.naver.maps.Map('map', mapOptions);

    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.4979, 127.0276),
      map,
      title: '강남역',
    });
  };

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`}
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
      <div id="map" style={{ width: '100%', height: '400px' }} />
    </>
  );
}
