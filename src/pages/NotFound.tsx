import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-light text-bcg-dark tracking-tighter mb-4">404</h1>
        <p className="text-2xl text-gray-600 font-light mb-12">The page you are looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-bcg-dark text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-bcg-forest transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
