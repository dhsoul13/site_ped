import React, { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

export default function useWindowDimension() {
  const [windowDimensions, setWindowDimension] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
