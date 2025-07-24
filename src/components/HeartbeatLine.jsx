import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeartbeatLine = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-redcross via-honor to-navy z-50"
      style={{
        scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight),
        transformOrigin: '0%'
      }}
    />
  );
};

export default HeartbeatLine;