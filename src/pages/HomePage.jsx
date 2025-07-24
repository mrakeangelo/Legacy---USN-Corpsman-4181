import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Timeline from '../components/Timeline';
import WhyIChoseToHeal from '../components/WhyIChoseToHeal';
import DeploymentGallery from '../components/DeploymentGallery';
import LettersFromSaved from '../components/LettersFromSaved';
import MedalsSection from '../components/MedalsSection';
import PersonalLife from '../components/PersonalLife';
import MemorialCapsule from '../components/MemorialCapsule';
import GuestbookWall from '../components/GuestbookWall';
import Footer from '../components/Footer';
import HeartbeatLine from '../components/HeartbeatLine';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <HeartbeatLine />
      <HeroSection />
      <Timeline />
      <WhyIChoseToHeal />
      <DeploymentGallery />
      <LettersFromSaved />
      <MedalsSection />
      <PersonalLife />
      <MemorialCapsule />
      <GuestbookWall />
      <Footer />
    </motion.div>
  );
};

export default HomePage;