'use client'

import Head from 'next/head'
import { useEffect, useRef } from 'react';
<Head>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ll2fjdhq8m"></script>
</Head>

export default function MapInfo() {

  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initializeMap = () => {
      if (!window.naver || !mapRef.current) return;

      const mapOptions = {
        center: new naver.maps.LatLng(37.4979, 127.0276), // 강남역 좌표
        zoom: 16,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.4979, 127.0276),
        map,
        title: '강남역',
      });
    };

    // 이미 로드되어 있다면 바로 실행
    if (window.naver) {
      initializeMap();
    } else {
      // 스크립트 로드
      const script = document.createElement('script');
      const clientId = process.env.NEXT_PUBLIC_MAP_CLIENT_ID;
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
  );
}