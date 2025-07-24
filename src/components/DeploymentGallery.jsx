import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiMapPin, FiUsers, FiHeart } = FiIcons;

const galleryData = {
  'Shipboard Life': [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop',
      caption: 'Medical bay aboard USS Independence',
      location: 'Mediterranean Sea',
      quote: 'Every sunrise at sea reminded me why we serve'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      caption: 'Training exercises with the medical team',
      location: 'USS Independence',
      quote: 'Teamwork saves lives'
    }
  ],
  'Field Operations': [
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      caption: 'Field medical station setup',
      location: 'Afghanistan',
      quote: 'Turning chaos into organized care'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      caption: 'Treating wounded Marines',
      location: 'Forward Operating Base',
      quote: 'In the darkest moments, we become the light'
    }
  ],
  'Humanitarian Missions': [
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      caption: 'Providing medical care to local children',
      location: 'Philippines',
      quote: 'Healing knows no borders'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      caption: 'Disaster relief efforts',
      location: 'Haiti',
      quote: 'Hope arrives with helping hands'
    }
  ],
  'Hospital Moments': [
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      caption: 'Emergency department training',
      location: 'Naval Hospital Jacksonville',
      quote: 'Every second counts'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      caption: 'Mentoring new corpsmen',
      location: 'Naval Hospital Jacksonville',
      quote: 'Passing on the sacred trust'
    }
  ]
};

const DeploymentGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Shipboard Life');

  return (
    <section className="py-20 bg-healing">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiCamera} className="text-navy text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Deployment Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moments of service, sacrifice, and healing around the world
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(galleryData).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-white text-navy hover:bg-serenity'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryData[activeCategory].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <SafeIcon icon={FiMapPin} className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">{item.caption}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <SafeIcon icon={FiMapPin} className="text-sm mr-2" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <blockquote className="text-gray-700 italic border-l-4 border-honor pl-4">
                  "{item.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeploymentGallery;