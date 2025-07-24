import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiClock, FiHeart, FiMail } = FiIcons;

const timeCapsules = [
  {
    id: 1,
    title: 'To Future Corpsmen',
    description: 'A letter of guidance for those entering Hospital Corps School',
    unlockDate: '2025-01-01',
    icon: FiHeart,
    isLocked: true,
    preview: 'To those who will carry the caduceus after me...'
  },
  {
    id: 2,
    title: 'To My Marines',
    description: 'A message to the Marines she served alongside',
    unlockDate: '2024-11-10',
    icon: FiMail,
    isLocked: false,
    content: `My Dear Marines,

If you're reading this, then perhaps I'm no longer able to tell you in person what you've meant to me. You called me "Doc," but you were so much more than patients to me. You were my brothers, my purpose, my reason for being.

I want you to know that every time I patched you up, every time I held your hand during a medevac, every time I stayed up all night monitoring your vitals - it wasn't just duty. It was love. The kind of love that exists between people who've shared the unthinkable, who've trusted each other with their lives.

You taught me about courage. Not the Hollywood kind, but the real kind - the kind that gets up every morning despite being scared, the kind that jokes even when wounded, the kind that worries more about your brothers than yourself.

I hope I gave you even a fraction of what you gave me. You made me a better Corpsman, a better person, a better human being. In your darkest moments, you let me be your light. In mine, you were mine.

Stay safe. Stay strong. Stay together.

Semper Fi,
Doc Torres`
  },
  {
    id: 3,
    title: 'To My Family',
    description: 'Personal reflections for her loved ones',
    unlockDate: '2024-12-25',
    icon: FiHeart,
    isLocked: true,
    preview: 'To Mom, Dad, and little brother Miguel...'
  }
];

const MemorialCapsule = () => {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const isUnlocked = (unlockDate) => {
    return new Date() >= new Date(unlockDate);
  };

  return (
    <section className="py-20 bg-healing">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiClock} className="text-navy text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Memorial Time Capsule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Letters and messages to be opened at meaningful times
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timeCapsules.map((capsule) => {
            const unlocked = isUnlocked(capsule.unlockDate);
            
            return (
              <motion.div
                key={capsule.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: capsule.id * 0.1 }}
                className={`bg-white rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-300 ${
                  unlocked ? 'hover:shadow-xl hover:scale-105' : 'opacity-75'
                }`}
                onClick={() => unlocked && setSelectedCapsule(capsule)}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${
                    unlocked ? 'bg-honor' : 'bg-gray-400'
                  }`}>
                    <SafeIcon icon={unlocked ? FiUnlock : FiLock} className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-navy mb-4">{capsule.title}</h3>
                  <p className="text-gray-600 mb-6">{capsule.description}</p>
                  
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <SafeIcon icon={FiClock} className="mr-2" />
                    <span>
                      {unlocked ? 'Unlocked' : `Unlocks ${new Date(capsule.unlockDate).toLocaleDateString()}`}
                    </span>
                  </div>
                  
                  {unlocked && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-navy text-white px-6 py-2 rounded-full font-inter font-medium"
                    >
                      Read Letter
                    </motion.button>
                  )}
                  
                  {!unlocked && (
                    <div className="bg-serenity rounded-lg p-4">
                      <p className="text-gray-600 italic text-sm">"{capsule.preview}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for reading letters */}
        {selectedCapsule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCapsule(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-navy">{selectedCapsule.title}</h3>
                  <button
                    onClick={() => setSelectedCapsule(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <SafeIcon icon={FiLock} className="text-xl" />
                  </button>
                </div>
                
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-inter text-gray-700 leading-relaxed">
                    {selectedCapsule.content}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MemorialCapsule;