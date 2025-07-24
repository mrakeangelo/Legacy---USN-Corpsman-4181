import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiSettings, FiImage, FiMessageSquare, FiClock, FiUser } = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication for demo
    if (credentials.username === 'admin' && credentials.password === 'corpsman2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="text-navy text-4xl mx-auto mb-4" />
            <h2 className="font-playfair text-2xl font-bold text-navy">Admin Access</h2>
            <p className="text-gray-600 mt-2">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-navy text-white py-3 rounded-lg font-inter font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-serenity rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              Demo credentials: admin / corpsman2024
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-healing">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-playfair text-4xl font-bold text-navy mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage the memorial website content and settings
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { id: 'timeline', label: 'Timeline', icon: FiClock },
            { id: 'gallery', label: 'Gallery', icon: FiImage },
            { id: 'messages', label: 'Messages', icon: FiMessageSquare },
            { id: 'settings', label: 'Settings', icon: FiSettings }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-inter font-medium flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-white text-navy hover:bg-serenity'
              }`}
            >
              <SafeIcon icon={tab.icon} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {activeTab === 'timeline' && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                Timeline Management
              </h2>
              <p className="text-gray-600 mb-4">
                Add, edit, or remove timeline entries for Sabrina's career progression.
              </p>
              <div className="bg-serenity rounded-lg p-6">
                <p className="text-gray-700">
                  Timeline management interface would be implemented here with forms to add new entries,
                  edit existing ones, and manage the display order.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                Gallery Management
              </h2>
              <p className="text-gray-600 mb-4">
                Upload and organize photos for the deployment gallery.
              </p>
              <div className="bg-serenity rounded-lg p-6">
                <p className="text-gray-700">
                  Photo upload interface would be implemented here with drag-and-drop functionality,
                  category organization, and caption editing.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                Message Moderation
              </h2>
              <p className="text-gray-600 mb-4">
                Review and approve messages from the guestbook.
              </p>
              <div className="bg-serenity rounded-lg p-6">
                <p className="text-gray-700">
                  Message moderation interface would be implemented here with approval/rejection
                  capabilities and spam filtering.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
                Site Settings
              </h2>
              <p className="text-gray-600 mb-4">
                Configure site-wide settings and time capsule unlock schedules.
              </p>
              <div className="bg-serenity rounded-lg p-6">
                <p className="text-gray-700">
                  Settings interface would be implemented here with options for site configuration,
                  time capsule scheduling, and user management.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;