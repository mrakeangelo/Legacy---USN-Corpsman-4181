import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiEdit3 } = FiIcons;

const WhyIChoseToHeal = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiEdit3} className="text-honor text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Why I Chose to Heal
          </h2>
          <p className="text-lg text-serenity max-w-2xl mx-auto">
            In her own words, reflections from the field
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-2xl p-8 md:p-12 relative"
        >
          {/* Journal Style Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-healing to-serenity rounded-lg opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <SafeIcon icon={FiHeart} className="text-redcross text-3xl mr-4" />
              <h3 className="font-playfair text-2xl font-bold text-navy">
                Field Journal Entry - October 15, 2021
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <em>"Today I held a Marine's hand as he fought for his life. Twenty years old, 
                same age as my little brother back home. In that moment, I wasn't thinking about 
                protocols or procedures - I was thinking about getting him home to his family."</em>
              </p>

              <p>
                People ask me why I chose to be a Corpsman instead of something 'safer.' 
                The truth is, I didn't choose this path for safety. I chose it because 
                when everything falls apart, when chaos reigns, someone has to be the 
                calm in the storm.
              </p>

              <p>
                Every Marine I've treated has taught me something different. Some taught me 
                about courage - joking even while wounded. Others taught me about sacrifice - 
                more worried about their brothers than themselves. All of them taught me 
                about the sacred trust between a Corpsman and those we serve.
              </p>

              <p>
                The fear never goes away. But neither does the focus. When someone's life 
                is in your hands, everything else fades away. There's just you, your training, 
                and an unbreakable promise: "I will never leave a fallen comrade."
              </p>

              <p className="italic text-navy font-medium">
                "We don't just patch wounds - we hold hope together when everything else 
                is falling apart. That's why I chose to heal."
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-serenity">
              <p className="text-sm text-gray-500 italic">
                - Written during deployment, Combat Outpost Bravo
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIChoseToHeal;