import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiHeart, FiUser } = FiIcons;

const letters = [
  {
    id: 1,
    author: 'Lance Corporal Marcus Johnson',
    unit: '2nd Battalion, 8th Marines',
    date: 'March 15, 2022',
    content: 'Doc Torres, I don\'t know if you remember me - I was the Marine with the shrapnel wound from the IED blast. You stayed with me for 6 hours during that medevac. Your voice kept me calm when I was scared I\'d never see my family again. I\'m home now, married my high school sweetheart, and we named our daughter Sabrina after you. Thank you for bringing me home.',
    type: 'Marine'
  },
  {
    id: 2,
    author: 'Petty Officer Sarah Mitchell',
    unit: 'Naval Hospital Jacksonville',
    date: 'July 8, 2023',
    content: 'Sabrina was my mentor when I first arrived at the hospital. She taught me that being a Corpsman isn\'t just about medical procedures - it\'s about being present for people in their most vulnerable moments. She showed me how to hold space for both healing and hope. Every patient I treat carries a piece of her compassion.',
    type: 'Corpsman'
  },
  {
    id: 3,
    author: 'Staff Sergeant David Rodriguez',
    unit: '3rd Marine Expeditionary Unit',
    date: 'September 22, 2021',
    content: 'Doc saved my life twice - once from a gunshot wound, and once from giving up on myself. After my injury, I was ready to quit everything. She sat with me every day, reminded me that warriors heal too. She didn\'t just fix my body, she helped me find my purpose again. Now I work with wounded veterans. Her healing continues through me.',
    type: 'Marine'
  },
  {
    id: 4,
    author: 'Commander Lisa Park, MD',
    unit: 'Naval Hospital Jacksonville',
    date: 'November 3, 2023',
    content: 'In 20 years of military medicine, I\'ve never seen a Corpsman with Sabrina\'s combination of technical skill and emotional intelligence. She could start an IV on the most difficult patient while simultaneously calming a panicked family member. She taught our entire staff that healing happens in the space between medical excellence and human connection.',
    type: 'Doctor'
  }
];

const LettersFromSaved = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiMail} className="text-honor text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Letters from the Saved
          </h2>
          <p className="text-lg text-serenity max-w-2xl mx-auto">
            Testimonies from those whose lives she touched
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden"
            >
              {/* Letter Paper Effect */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-redcross to-honor"></div>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    letter.type === 'Marine' ? 'bg-redcross' : 
                    letter.type === 'Corpsman' ? 'bg-navy' : 'bg-honor'
                  }`}>
                    <SafeIcon icon={FiUser} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-navy">{letter.author}</h3>
                    <p className="text-gray-600 text-sm">{letter.unit}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">{letter.date}</p>
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
                <SafeIcon icon={FiHeart} className="text-honor text-2xl mb-4" />
                <p className="italic">{letter.content}</p>
              </blockquote>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  letter.type === 'Marine' ? 'bg-redcross bg-opacity-10 text-redcross' : 
                  letter.type === 'Corpsman' ? 'bg-navy bg-opacity-10 text-navy' : 'bg-honor bg-opacity-10 text-honor'
                }`}>
                  {letter.type}
                </span>
                <div className="text-honor text-2xl">"</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LettersFromSaved;