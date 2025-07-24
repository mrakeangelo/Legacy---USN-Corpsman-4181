import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiStar, FiTarget } = FiIcons;

const medals = [
  {
    name: 'Navy Achievement Medal',
    description: 'For exceptional performance during humanitarian mission in Philippines',
    icon: FiAward,
    color: 'bg-honor'
  },
  {
    name: 'Navy Commendation Medal',
    description: 'For meritorious service while serving with 2nd Marine Expeditionary Unit',
    icon: FiStar,
    color: 'bg-navy'
  },
  {
    name: 'Combat Action Ribbon',
    description: 'For engaging in combat operations in Afghanistan',
    icon: FiTarget,
    color: 'bg-redcross'
  },
  {
    name: 'Fleet Marine Force Pin',
    description: 'Earned through rigorous training with Marine Corps units',
    icon: FiShield,
    color: 'bg-honor'
  }
];

const qualifications = [
  'Emergency Medical Technician (EMT)',
  'Tactical Combat Casualty Care (TCCC)',
  'Basic Life Support (BLS)',
  'Advanced Cardiac Life Support (ACLS)',
  'Pediatric Advanced Life Support (PALS)',
  'Field Medical Service Technician (FMST)',
  'Surface Warfare Medical Specialist',
  'Combat Lifesaver Course'
];

const MedalsSection = () => {
  return (
    <section className="py-20 bg-healing">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiAward} className="text-navy text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Medals & Qualifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for excellence in service and medical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Medals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-bold text-navy mb-8 text-center">
              Military Decorations
            </h3>
            <div className="space-y-6">
              {medals.map((medal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 rounded-full ${medal.color} flex items-center justify-center mr-6 flex-shrink-0`}>
                    <SafeIcon icon={medal.icon} className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-navy mb-2">{medal.name}</h4>
                    <p className="text-gray-600">{medal.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-bold text-navy mb-8 text-center">
              Medical Certifications
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 gap-4">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-serenity bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
                  >
                    <SafeIcon icon={FiShield} className="text-navy text-lg mr-4 flex-shrink-0" />
                    <span className="font-inter text-navy font-medium">{qual}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rank Progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="font-playfair text-3xl font-bold text-navy mb-8 text-center">
            Rank Progression
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['HR', 'HN', 'HM3', 'HM2', 'HM1'].map((rank, index) => (
              <motion.div
                key={rank}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                  index === 4 ? 'bg-honor' : 'bg-navy'
                }`}>
                  <span className="text-white font-bold text-lg">{rank}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {index === 0 ? '2015' : index === 1 ? '2016' : index === 2 ? '2017' : index === 3 ? '2019' : '2022'}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MedalsSection;