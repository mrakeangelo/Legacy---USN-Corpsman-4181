import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiShield, FiTrendingUp, FiAward, FiMapPin } = FiIcons;

const timelineData = [
  {
    year: '2015',
    title: 'Boot Camp & Corps School',
    description: 'Completed Navy Boot Camp at Great Lakes and Hospital Corps School at Fort Sam Houston',
    icon: FiAnchor,
    color: 'bg-navy'
  },
  {
    year: '2016',
    title: 'First Command Assignment',
    description: 'Assigned to Naval Hospital Jacksonville, Emergency Department',
    icon: FiHeart,
    color: 'bg-redcross'
  },
  {
    year: '2017',
    title: 'Fleet Marine Force Training',
    description: 'Completed FMF training and earned the coveted Fleet Marine Force pin',
    icon: FiShield,
    color: 'bg-honor'
  },
  {
    year: '2018',
    title: 'First Deployment',
    description: 'Deployed with 2nd Marine Expeditionary Unit to the Mediterranean',
    icon: FiMapPin,
    color: 'bg-navy'
  },
  {
    year: '2019',
    title: 'Promotion to HM2',
    description: 'Advanced to Hospital Corpsman Second Class',
    icon: FiTrendingUp,
    color: 'bg-honor'
  },
  {
    year: '2021',
    title: 'Combat Deployment',
    description: 'Served with Marines in Afghanistan, providing critical medical care',
    icon: FiShield,
    color: 'bg-redcross'
  },
  {
    year: '2022',
    title: 'Promotion to HM1',
    description: 'Advanced to Hospital Corpsman First Class',
    icon: FiTrendingUp,
    color: 'bg-honor'
  },
  {
    year: '2023',
    title: 'Navy Achievement Medal',
    description: 'Awarded NAM for exceptional performance during humanitarian mission',
    icon: FiAward,
    color: 'bg-navy'
  }
];

const Timeline = () => {
  return (
    <section className="py-20 bg-healing">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Corpsman Career Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of service, sacrifice, and healing
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-serenity hidden md:block"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hidden md:flex">
                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                  <SafeIcon icon={item.icon} className="text-white text-xl" />
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 md:hidden">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center mr-4`}>
                      <SafeIcon icon={item.icon} className="text-white text-lg" />
                    </div>
                    <span className="text-honor font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-honor font-bold text-lg mb-2 block">{item.year}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;