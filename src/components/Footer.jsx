import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiAnchor } = FiIcons;

const quotes = [
  "She patched up wounds — and held hearts together.",
  "In her hands, healing was both science and art.",
  "A Corpsman's greatest tool isn't medical equipment — it's compassion.",
  "She carried hope in her medical bag.",
  "Every life she touched was forever changed."
];

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <SafeIcon icon={FiHeart} className="text-honor text-4xl mx-auto mb-6 animate-heartbeat" />
          
          <motion.div
            key={quotes[0]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mb-8"
          >
            <blockquote className="text-xl md:text-2xl text-white italic font-playfair max-w-3xl mx-auto">
              "{quotes[0]}"
            </blockquote>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <SafeIcon icon={FiAnchor} className="text-honor text-2xl mr-3" />
              <p className="text-serenity">
                In memory of HM1 Sabrina Torres
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                "I will never leave a fallen comrade"
              </p>
              <p className="text-gray-500 text-xs">
                Created with love by <span className="text-honor">Mrake Agency</span>
              </p>
            </div>
          </div>
        </div>

        {/* Caduceus Watermark */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <div className="w-16 h-16 bg-honor rounded-full flex items-center justify-center">
            <SafeIcon icon={FiHeart} className="text-navy text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;