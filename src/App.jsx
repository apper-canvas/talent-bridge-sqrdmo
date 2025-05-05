import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import getIcon from './utils/iconUtils';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const MoonIcon = getIcon('Moon');
  const SunIcon = getIcon('Sun');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.info(`Switched to ${!darkMode ? 'dark' : 'light'} mode`, {
      icon: !darkMode ? '🌙' : '☀️',
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="min-h-screen transition-colors duration-200">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-surface-200 dark:border-surface-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TB</span>
            </div>
            <h1 className="text-xl font-bold text-surface-900 dark:text-white">TalentBridge</h1>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#jobs" className="text-surface-600 hover:text-primary dark:text-surface-300 dark:hover:text-white font-medium">Find Jobs</a>
            <a href="#employers" className="text-surface-600 hover:text-primary dark:text-surface-300 dark:hover:text-white font-medium">For Employers</a>
            <a href="#about" className="text-surface-600 hover:text-primary dark:text-surface-300 dark:hover:text-white font-medium">About Us</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:text-primary dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="bg-surface-100 dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TalentBridge</h3>
              <p className="text-sm">Connecting talented professionals with innovative employers since 2024.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#jobs" className="hover:underline">Browse Jobs</a></li>
                <li><a href="#employers" className="hover:underline">Post a Job</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">Email: contact@talentbridge.com</p>
              <p className="text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-surface-200 dark:border-surface-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} TalentBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        toastClassName="!bg-surface-50 dark:!bg-surface-800 !text-surface-800 dark:!text-surface-100 shadow-card"
      />
    </div>
  );
}

export default App;