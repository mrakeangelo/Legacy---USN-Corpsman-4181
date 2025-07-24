import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiHeart, FiCamera, FiBook } = FiIcons;

const PersonalLife = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiHome} className="text-honor text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Beyond the Uniform
          </h2>
          <p className="text-lg text-serenity max-w-2xl mx-auto">
            The woman behind the Corpsman
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop"
                alt="Family time"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">Family First</h3>
                <p className="text-gray-600">Home on leave with her parents and younger brother</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
                alt="Hiking adventure"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">Finding Peace</h3>
                <p className="text-gray-600">Hiking in the mountains - her way of healing</p>
              </div>
            </div>
          </motion.div>

          {/* Personal Reflections */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <SafeIcon icon={FiHeart} className="text-redcross text-3xl mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                The Weight of Caring
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "People think being a Corpsman is just about the technical skills. But what they don't see 
                is how much of yourself you give to every patient. You carry their pain, their fears, 
                their hopes. Some nights, I'd sit in my rack and just feel the weight of all the lives 
                I'd held that day."
              </p>
              <p className="text-gray-700 leading-relaxed">
                "My family taught me that it's okay to feel everything deeply. That's not weakness - 
                that's what makes us human. And being human is what makes us better healers."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <SafeIcon icon={FiBook} className="text-navy text-3xl mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                Faith & Purpose
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "My faith has always been my anchor. In the chaos of combat, in the quiet moments 
                with dying patients, in the celebration of lives saved - I've felt something bigger 
                than myself guiding my hands."
              </p>
              <p className="text-gray-700 leading-relaxed">
                "I believe we're all called to serve something greater than ourselves. For me, 
                that calling led to the Corps, to healing, to holding space for others in their 
                darkest moments."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <SafeIcon icon={FiCamera} className="text-honor text-3xl mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                Capturing Moments
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Photography became my way of processing everything I experienced. Every photo 
                tells a story - of healing, of hope, of the human spirit's incredible resilience. 
                I wanted to capture not just what happened, but what it felt like to be there, 
                to witness such profound moments of vulnerability and strength."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalLife;