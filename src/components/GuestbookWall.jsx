import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit, FiHeart, FiUser, FiSend } = FiIcons;

const initialMessages = [
  {
    id: 1,
    name: 'Lieutenant Commander Sarah Johnson',
    relationship: 'Commanding Officer',
    message: 'HM1 Torres exemplified everything we hope for in a Navy Corpsman. Her dedication to her Marines and sailors was unwavering, and her compassion touched everyone she encountered.',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Maria Torres',
    relationship: 'Mother',
    message: 'My beautiful daughter always wanted to help others. Even as a little girl, she would bandage her dolls and say she was making them better. I am so proud of the woman and healer she became.',
    date: '2024-01-14'
  },
  {
    id: 3,
    name: 'Corporal James Wilson',
    relationship: 'Patient',
    message: 'Doc Torres saved my life in more ways than one. She not only treated my wounds but gave me hope when I had none. Her smile could light up the darkest day.',
    date: '2024-01-13'
  }
];

const GuestbookWall = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState({
    name: '',
    relationship: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.name || !newMessage.message) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const message = {
      id: messages.length + 1,
      ...newMessage,
      date: new Date().toISOString().split('T')[0]
    };
    
    setMessages([message, ...messages]);
    setNewMessage({ name: '', relationship: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SafeIcon icon={FiEdit} className="text-honor text-4xl mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Guestbook Wall
          </h2>
          <p className="text-lg text-serenity max-w-2xl mx-auto">
            Share your memories and messages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="font-playfair text-2xl font-bold text-navy mb-6">
              Leave a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Relationship to Sabrina
                </label>
                <input
                  type="text"
                  value={newMessage.relationship}
                  onChange={(e) => setNewMessage({...newMessage, relationship: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="e.g., Colleague, Friend, Patient..."
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-navy text-white py-3 rounded-lg font-inter font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <SafeIcon icon={FiSend} />
                    Share Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-h-[600px] overflow-y-auto"
          >
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-honor rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <SafeIcon icon={FiUser} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-navy">{message.name}</h4>
                    {message.relationship && (
                      <p className="text-gray-600 text-sm">{message.relationship}</p>
                    )}
                    <p className="text-gray-500 text-xs">{new Date(message.date).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{message.message}</p>
                
                <div className="flex items-center justify-end">
                  <SafeIcon icon={FiHeart} className="text-redcross text-lg" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuestbookWall;