import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

export default function NotFound() {
  const navigate = useNavigate();
  const AlertCircleIcon = getIcon('AlertCircle');
  const ArrowLeftIcon = getIcon('ArrowLeft');
  const HomeIcon = getIcon('Home');

  useEffect(() => {
    document.title = 'Page Not Found | TalentBridge';
    return () => {
      document.title = 'TalentBridge | Connect Job Seekers with Employers';
    };
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-surface-100 dark:bg-surface-800 rounded-full flex items-center justify-center">
            <AlertCircleIcon className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        
        <p className="text-surface-600 dark:text-surface-300 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="btn-outline flex items-center justify-center gap-2"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go Back
          </button>
          
          <button 
            onClick={() => navigate('/')} 
            className="btn-primary flex items-center justify-center gap-2"
          >
            <HomeIcon className="w-4 h-4" />
            Return Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}