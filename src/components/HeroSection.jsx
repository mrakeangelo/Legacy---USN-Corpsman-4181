import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronRight, FiHeart } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop"
          alt="Hospital Corpsman in uniform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <SafeIcon icon={FiHeart} className="text-honor text-6xl mx-auto mb-6 animate-heartbeat" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-playfair text-4xl md:text-6xl font-bold mb-4"
        >
          HM1 Sabrina Torres
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-2xl mb-6 text-serenity"
        >
          U.S. Navy Hospital Corpsman
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl italic mb-8 max-w-2xl mx-auto font-inter"
        >
          "She didn't carry a rifle. She carried lives."
        </motion.blockquote>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="bg-honor text-navy px-8 py-4 rounded-full font-inter font-semibold text-lg inline-flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300"
        >
          Enter Her Healing Legacy
          <SafeIcon icon={FiChevronRight} className="text-xl" />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;