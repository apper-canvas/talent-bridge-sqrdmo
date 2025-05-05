import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

const About = () => {
  const BriefcaseIcon = getIcon('Briefcase');
  const UsersIcon = getIcon('Users');
  const AwardIcon = getIcon('Award');
  const TargetIcon = getIcon('Target');
  const HeartIcon = getIcon('Heart');
  const TrendingUpIcon = getIcon('TrendingUp');
  const CheckIcon = getIcon('Check');
  const StarIcon = getIcon('Star');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">About TalentBridge</h1>
        <p className="text-lg mb-12">Connecting talent with opportunity since 2024</p>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="card-glass overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6">
                  At TalentBridge, we're on a mission to transform how companies find talent and how job seekers find meaningful work. 
                  We believe the right match between employer and employee creates powerful opportunities for innovation and growth.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <BriefcaseIcon size={20} />
                  <span>Thousands of successful placements each month</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary h-full min-h-[300px] flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Building Bridges Between Talent and Opportunity</h3>
                  <p className="text-white/90">Our platform connects skilled professionals with innovative companies looking to grow their teams.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="card p-6" variants={itemVariants}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HeartIcon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p>We understand that the job search process can be stressful, and we strive to make it as smooth and supportive as possible.</p>
            </motion.div>
            
            <motion.div className="card p-6" variants={itemVariants}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <TargetIcon size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision</h3>
              <p>We believe in quality over quantity, focusing on making the right matches rather than overwhelming with options.</p>
            </motion.div>
            
            <motion.div className="card p-6" variants={itemVariants}>
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUpIcon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p>We're committed to helping both candidates and companies grow and reach their full potential through meaningful work relationships.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          </div>
          
          <div className="card p-8">
            <div className="space-y-6">
              <p>
                TalentBridge was founded in 2024 by a team of recruitment industry veterans who saw a need for a more human-centered approach to employment services. 
                After years of witnessing the limitations of traditional job boards and recruitment agencies, our founders envisioned a platform that would truly bridge the gap between talented professionals and the companies that need them.
              </p>
              
              <p>
                Starting with just a small team working out of a co-working space, TalentBridge has grown into a thriving platform used by thousands of companies and job seekers across the globe. 
                Our success is built on our commitment to understanding both the technical requirements of roles and the human elements that make for successful long-term placements.
              </p>
              
              <p>
                Today, we continue to innovate and expand our services while staying true to our original vision: creating meaningful connections between talent and opportunity that benefit both sides of the employment equation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="card-neu p-6 text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <p>Companies</p>
            </motion.div>
            
            <motion.div 
              className="card-neu p-6 text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-secondary mb-2">100,000+</div>
              <p>Active Job Seekers</p>
            </motion.div>
            
            <motion.div 
              className="card-neu p-6 text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-accent mb-2">25,000+</div>
              <p>Successful Placements</p>
            </motion.div>
            
            <motion.div 
              className="card-neu p-6 text-center"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p>Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Leadership Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="h-64 bg-surface-200 dark:bg-surface-700 flex items-center justify-center">
                <UsersIcon size={64} className="text-surface-400 dark:text-surface-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-primary mb-3">CEO & Founder</p>
                <p className="text-sm">Former head of talent acquisition at a Fortune 500 company with over 15 years of experience in the recruitment industry.</p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-surface-200 dark:bg-surface-700 flex items-center justify-center">
                <UsersIcon size={64} className="text-surface-400 dark:text-surface-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                <p className="text-primary mb-3">CTO</p>
                <p className="text-sm">Tech leader with a background in AI and machine learning, focused on building intelligent matching algorithms.</p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="h-64 bg-surface-200 dark:bg-surface-700 flex items-center justify-center">
                <UsersIcon size={64} className="text-surface-400 dark:text-surface-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Aisha Patel</h3>
                <p className="text-primary mb-3">COO</p>
                <p className="text-sm">Operations expert with experience scaling recruitment platforms across international markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
              </div>
              <p className="italic mb-6">"TalentBridge completely transformed our hiring process. We found qualified candidates in half the time compared to other platforms, and the quality of matches was exceptional."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center">
                  <AwardIcon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">HR Director, TechFusion Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
                <StarIcon size={20} className="text-yellow-400" />
              </div>
              <p className="italic mb-6">"After months of searching through other job platforms, I found my dream job through TalentBridge in just two weeks. The matching algorithm really understands what skills matter for specific roles."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center">
                  <AwardIcon size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Jennifer Martinez</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">UX Designer, InnovateCorp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;