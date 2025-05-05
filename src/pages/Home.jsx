import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import MainFeature from '../components/MainFeature';
import getIcon from '../utils/iconUtils';

export default function Home() {
  const [activeTab, setActiveTab] = useState('jobseekers');
  
  const BriefcaseIcon = getIcon('Briefcase');
  const BuildingIcon = getIcon('Building');
  const SearchIcon = getIcon('Search');
  const FileTextIcon = getIcon('FileText');
  const UsersIcon = getIcon('Users');
  const AwardIcon = getIcon('Award');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // This would normally connect to a backend
    toast.success("Thanks for subscribing! We'll keep you updated.", {
      icon: "📬",
    });
    e.target.reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Connecting Talent with Opportunity
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-surface-600 dark:text-surface-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              TalentBridge helps job seekers find their dream jobs and employers discover the perfect candidates. Start your journey today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="#feature" className="btn-primary">
                Find Jobs
              </a>
              <a href="#feature" className="btn-outline">
                For Employers
              </a>
            </motion.div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
              alt="Team collaboration" 
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-100 dark:bg-surface-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card p-6 text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BriefcaseIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p>Active Job Listings</p>
            </motion.div>
            
            <motion.div 
              className="card p-6 text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingIcon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">2,500+</h3>
              <p>Partner Companies</p>
            </motion.div>
            
            <motion.div 
              className="card p-6 text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500,000+</h3>
              <p>Successful Placements</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section id="feature" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Match</h2>
            <p className="text-lg text-surface-600 dark:text-surface-300">
              Whether you're a job seeker looking for new opportunities or an employer searching for talent,
              we've got you covered.
            </p>
          </div>
          
          <div className="mb-10 flex justify-center">
            <div className="inline-flex p-1 bg-surface-100 dark:bg-surface-800 rounded-lg">
              <button 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'jobseekers' 
                    ? 'bg-white dark:bg-surface-700 shadow-sm' 
                    : 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveTab('jobseekers')}
              >
                For Job Seekers
              </button>
              <button 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'employers' 
                    ? 'bg-white dark:bg-surface-700 shadow-sm' 
                    : 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveTab('employers')}
              >
                For Employers
              </button>
            </div>
          </div>
          
          {/* Main Feature Component */}
          <MainFeature userType={activeTab} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-surface-50 dark:bg-surface-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How TalentBridge Works</h2>
            <p className="text-lg text-surface-600 dark:text-surface-300">
              Our streamlined process makes it easy to connect talent with opportunity
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchIcon className="w-10 h-10 text-primary" />
                </div>
                <div className="hidden md:block absolute top-10 left-full w-24 border-t-2 border-dashed border-primary/30 dark:border-primary/20"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Search & Discover</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Job seekers browse listings while employers search for candidates based on skills and experience.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileTextIcon className="w-10 h-10 text-secondary" />
                </div>
                <div className="hidden md:block absolute top-10 left-full w-24 border-t-2 border-dashed border-secondary/30 dark:border-secondary/20"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Apply & Review</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Candidates submit applications while employers review and shortlist potential matches.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-20 h-20 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AwardIcon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Connect & Succeed</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Schedule interviews, make offers, and build successful employment relationships.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-surface-600 dark:text-surface-300">
              Hear from the job seekers and employers who've found success with TalentBridge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card-glass p-8"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                  alt="Testimonial author" 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-surface-500 dark:text-surface-400">Software Developer</p>
                </div>
              </div>
              <p className="italic text-surface-700 dark:text-surface-300">
                "TalentBridge helped me find my dream job at a tech startup within two weeks of creating my profile. The platform was intuitive and the job recommendations were spot-on for my skills and experience."
              </p>
            </motion.div>
            
            <motion.div 
              className="card-glass p-8"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                  alt="Testimonial author" 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-surface-500 dark:text-surface-400">HR Manager, Tech Innovations Inc.</p>
                </div>
              </div>
              <p className="italic text-surface-700 dark:text-surface-300">
                "As a hiring manager, TalentBridge has revolutionized our recruitment process. We've cut our time-to-hire by 40% and found candidates who are not just qualified but also perfect cultural fits for our company."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-surface-100 dark:bg-surface-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 text-surface-600 dark:text-surface-300">
              Subscribe to our newsletter for the latest job opportunities and career tips.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="input-field flex-grow"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}