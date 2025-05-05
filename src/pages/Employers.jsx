import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const Employers = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: '',
    salary: '',
    description: '',
    requirements: '',
    email: '',
    phone: ''
  });

  // State for modals
  const [showShortlistModal, setShowShortlistModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [shortlistData, setShortlistData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    position: '',
    requirements: '',
    timeline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fixed handleShortlistChange function
  const handleShortlistChange = (e) => {
    const { name, value } = e.target;
    setShortlistData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Job posted successfully! Our team will review it shortly.', {
      position: "bottom-right",
      autoClose: 3000,
    });
    // Reset form
    setFormData({
      jobTitle: '',
      company: '',
      location: '',
      jobType: '',
      salary: '',
      description: '',
      requirements: '',
      email: '',
      phone: ''
    });
  };

  const handleShortlistSubmit = (e) => {
    e.preventDefault();
    toast.success('Shortlisting request received! Our recruitment team will contact you soon.', {
      position: "bottom-right",
      autoClose: 3000,
    });
    setShortlistData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      position: '',
      requirements: '',
      timeline: '',
    });
    setShowShortlistModal(false);
  };

  const BuildingIcon = getIcon('Building');
  const UsersIcon = getIcon('Users');
  const CheckCircleIcon = getIcon('CheckCircle');
  const BriefcaseIcon = getIcon('Briefcase');
  const DollarSignIcon = getIcon('DollarSign');
  const FileTextIcon = getIcon('FileText');
  const XIcon = getIcon('X');
  const CalendarIcon = getIcon('Calendar');
  const UserIcon = getIcon('User');
  const PhoneIcon = getIcon('Phone');
  const MailIcon = getIcon('Mail');
  const AwardIcon = getIcon('Award');
  const TrendingUpIcon = getIcon('TrendingUp');
  const UsersRoundIcon = getIcon('UsersRound');

  return (
    <div className="bg-blue-50 dark:bg-blue-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">For Employers</h1>
          <p className="text-lg mb-12">Connect with top talent and grow your team</p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-6 bg-white/90 dark:bg-surface-800/90 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BriefcaseIcon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Post a Job</h3>
              <p className="mb-4">Reach thousands of qualified candidates by posting your job openings on our platform.</p>
              <button className="btn-outline" onClick={() => document.getElementById('post-job').scrollIntoView({ behavior: 'smooth' })}>
                Post Now
              </button>
            </div>

            <div className="card p-6 bg-white/90 dark:bg-surface-800/90 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <UsersIcon size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidate Shortlisting</h3>
              <p className="mb-4">Let our experts find the perfect candidates for your open positions based on your requirements.</p>
              <button className="btn-outline" onClick={() => document.getElementById('shortlisting').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>

            <div className="card p-6 bg-white/90 dark:bg-surface-800/90 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BuildingIcon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Employer Branding</h3>
              <p className="mb-4">Enhance your company profile and showcase your culture to attract the best talent.</p>
              <button className="btn-outline" onClick={() => document.getElementById('branding').scrollIntoView({ behavior: 'smooth' })}>
                Explore
              </button>
            </div>
          </div>

          {/* Post a Job Section */}
          <section id="post-job" className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
              <p className="text-lg">Fill out the form below to list your job opening on our platform and start receiving applications from qualified candidates.</p>
            </div>

            <div className="card p-8 bg-white/90 dark:bg-surface-800/90 backdrop-blur-sm">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium mb-2">Job Title</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="e.g. Senior Software Engineer"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="e.g. Acme Corporation"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="e.g. San Francisco, CA or Remote"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobType" className="block text-sm font-medium mb-2">Job Type</label>
                    <select
                      id="jobType"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="" disabled>Select job type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="salary" className="block text-sm font-medium mb-2">Salary Range (optional)</label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="e.g. $70,000 - $90,000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Contact Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="e.g. hiring@company.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium mb-2">Job Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="input-field resize-none"
                      placeholder="Describe the role, responsibilities, and what a typical day looks like"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="requirements" className="block text-sm font-medium mb-2">Requirements</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="input-field resize-none"
                      placeholder="List the skills, experience, and qualifications required for this position"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="submit" className="btn-primary">
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Candidate Shortlisting Section */}
          <section id="shortlisting" className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-8 mb-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Candidate Shortlisting</h2>
              <p className="text-lg">Let our experts find the perfect candidates for your positions based on your specific requirements.</p>
            </div>

            <div className="card p-8 bg-white/90 dark:bg-surface-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Submit Your Requirements</h4>
                        <p>Tell us about your company, the position, and the skills you're looking for in candidates.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Expert Matching</h4>
                        <p>Our recruitment experts search our extensive candidate database to find the perfect matches.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Candidate Shortlist</h4>
                        <p>Receive a curated list of pre-screened candidates that match your requirements.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Interview and Hire</h4>
                        <p>Connect with candidates, conduct interviews, and find your perfect hire.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button onClick={() => setShowShortlistModal(true)} className="btn-primary">
                      Request Candidate Shortlisting
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3 bg-surface-50/90 dark:bg-surface-800/90 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Save time and resources in the hiring process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Access to pre-screened, qualified candidates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Personalized matching based on your company culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Reduced hiring costs and faster time-to-hire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Support throughout the entire hiring process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Employer Branding */}
          <section id="branding" className="scroll-mt-20">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 mb-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Employer Branding</h2>
              <p className="text-lg">Showcase your company culture and stand out to attract the best talent.</p>
            </div>

            <div className="card p-8 bg-white/90 dark:bg-surface-800/90 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Enhanced Company Profile</h3>
                  <p className="mb-4">Create a compelling company profile that showcases your unique culture, benefits, and work environment to attract the right candidates.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Customizable company page with your branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Photo and video gallery of your workspace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Employee testimonials and success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Highlight your benefits, perks and company values</span>
                    </li>
                  </ul>
                  <button className="btn-secondary" onClick={() => toast.info('Coming soon! Enhanced employer profiles will be available next month.', { position: "bottom-right" })}>
                    Enhance Your Profile
                  </button>
                </div>
                <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-700 rounded-lg p-6 flex flex-col items-center justify-center backdrop-blur-sm">
                  <FileTextIcon size={64} className="text-primary mb-4" />
                  <h4 className="text-lg font-medium text-center mb-2">Featured Employer Spotlight</h4>
                  <p className="text-center mb-4">Get featured in our weekly employer spotlight and reach thousands of active job seekers.</p>
                  <button className="btn-outline" onClick={() => setShowLearnMoreModal(true)}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Shortlist Modal - Changed background color to light blue */}
          {showShortlistModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-blue-100 dark:bg-blue-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-blue-200 dark:border-blue-700 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Request Candidate Shortlisting</h3>
                  <button 
                    onClick={() => setShowShortlistModal(false)}
                    className="p-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700"
                  >
                    <XIcon size={24} />
                  </button>
                </div>
                <div className="p-6">
                  <form onSubmit={handleShortlistSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={shortlistData.companyName}
                          onChange={handleShortlistChange}
                          required
                          className="input-field"
                          placeholder="e.g. Acme Corporation"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium mb-2">Contact Person</label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          value={shortlistData.contactName}
                          onChange={handleShortlistChange}
                          required
                          className="input-field"
                          placeholder="e.g. John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={shortlistData.email}
                          onChange={handleShortlistChange}
                          required
                          className="input-field"
                          placeholder="e.g. john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={shortlistData.phone}
                          onChange={handleShortlistChange}
                          required
                          className="input-field"
                          placeholder="e.g. (555) 123-4567"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="position" className="block text-sm font-medium mb-2">Position Title</label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={shortlistData.position}
                          onChange={handleShortlistChange}
                          required
                          className="input-field"
                          placeholder="e.g. Senior Developer"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="requirements" className="block text-sm font-medium mb-2">Position Requirements</label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          value={shortlistData.requirements}
                          onChange={handleShortlistChange}
                          rows={4}
                          required
                          className="input-field resize-none"
                          placeholder="Describe the skills, experience, and qualifications you're looking for"
                        ></textarea>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="timeline" className="block text-sm font-medium mb-2">Hiring Timeline</label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={shortlistData.timeline}
                          onChange={handleShortlistChange}
                          required
                          className="input-field"
                        >
                          <option value="" disabled>Select your timeline</option>
                          <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                          <option value="Standard (2-4 weeks)">Standard (2-4 weeks)</option>
                          <option value="Relaxed (1-2 months)">Relaxed (1-2 months)</option>
                          <option value="Planning ahead (3+ months)">Planning ahead (3+ months)</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-end gap-4">
                      <button 
                        type="button" 
                        onClick={() => setShowShortlistModal(false)}
                        className="btn-ghost"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary">
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Learn More Modal - Implemented directly in the JSX to be consistent with ShortlistModal */}
          {showLearnMoreModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-surface-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-surface-200 dark:border-surface-700 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Featured Employer Spotlight</h3>
                  <button 
                    onClick={() => setShowLearnMoreModal(false)}
                    className="p-1 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700"
                  >
                    <XIcon size={24} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">What is Employer Spotlight?</h4>
                    <p className="mb-4">
                      The Featured Employer Spotlight is a premium service that highlights your company to thousands of active job seekers on our platform, increasing your visibility and attracting top talent.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Benefits Include:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <AwardIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Featured placement on our homepage and job search results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUpIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>150% more profile views compared to standard listings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <UsersRoundIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Dedicated email campaign to relevant candidates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Professional company feature article on our blog</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileTextIcon size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Enhanced company profile with multimedia capabilities</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Pricing:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Monthly Spotlight</h5>
                        <p className="text-2xl font-bold mb-2">$499</p>
                        <p className="text-sm">Featured for 4 weeks with all benefits</p>
                      </div>
                      <div className="border border-primary/30 rounded-lg p-4 bg-primary/5">
                        <h5 className="font-medium mb-2">Quarterly Spotlight</h5>
                        <p className="text-2xl font-bold mb-2">$1,299</p>
                        <p className="text-sm">Featured for 12 weeks (save over 13%)</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end gap-4">
                    <button 
                      type="button" 
                      onClick={() => setShowLearnMoreModal(false)}
                      className="btn-ghost"
                    >
                      Close
                    </button>
                    <button 
                      type="button" 
                      onClick={() => {
                        setShowLearnMoreModal(false);
                        toast.success('Request sent! Our team will contact you about the Employer Spotlight program.', {
                          position: "bottom-right",
                          autoClose: 3000,
                        });
                      }}
                      className="btn-primary"
                    >
                      Request Spotlight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Employers;