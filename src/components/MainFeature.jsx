import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

export default function MainFeature({ userType = 'jobseekers' }) {
  // Icon declarations
  const SearchIcon = getIcon('Search');
  const BriefcaseIcon = getIcon('Briefcase');
  const MapPinIcon = getIcon('MapPin');
  const DollarSignIcon = getIcon('DollarSign');
  const BuildingIcon = getIcon('Building');
  const ClockIcon = getIcon('Clock');
  const CheckCircleIcon = getIcon('CheckCircle');
  const FilterIcon = getIcon('Filter');
  const XIcon = getIcon('X');
  const ChevronDownIcon = getIcon('ChevronDown');
  const PlusIcon = getIcon('Plus');
  const SaveIcon = getIcon('Save');
  const UploadIcon = getIcon('Upload');
  const SendIcon = getIcon('Send');
  const BookmarkIcon = getIcon('Bookmark');

  // Sample job data (would come from API in a real app)
  const sampleJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "New York, NY (Remote)",
      salary: "$120,000 - $150,000",
      jobType: "Full-time",
      posted: "2 days ago",
      description: "We're looking for an experienced Frontend Developer with React expertise to join our growing team. You'll be working on our flagship product, collaborating with designers and backend engineers.",
      requirements: [
        "5+ years of frontend development experience",
        "Strong proficiency with React, Redux, and modern JavaScript",
        "Experience with responsive design and mobile-first approach",
        "Bachelor's degree in Computer Science or related field"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Design Studio",
      location: "San Francisco, CA",
      salary: "$90,000 - $120,000",
      jobType: "Full-time",
      posted: "1 week ago",
      description: "Join our creative team to design beautiful, intuitive interfaces for web and mobile applications. Work closely with product managers and developers to create seamless user experiences.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency with Figma, Sketch, and Adobe Creative Suite",
        "Portfolio demonstrating strong visual design skills",
        "Experience conducting user research and usability testing"
      ]
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateX",
      location: "Austin, TX (Hybrid)",
      salary: "$110,000 - $140,000",
      jobType: "Full-time",
      posted: "3 days ago",
      description: "Lead product development for our SaaS platform. Define product vision, collaborate with cross-functional teams, and ensure successful product launches and iterations.",
      requirements: [
        "4+ years of product management experience in tech",
        "Strong analytical and problem-solving skills",
        "Experience with agile methodologies",
        "Excellent communication and stakeholder management"
      ]
    }
  ];

  // State for job seekers
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(sampleJobs);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  // State for employers
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [jobType, setJobType] = useState('Full-time');
  const [jobDescription, setJobDescription] = useState('');
  const [showPostSuccess, setShowPostSuccess] = useState(false);
  
  // For resume upload (job seekers)
  const [resumeFile, setResumeFile] = useState(null);
  
  // Filter states
  const [jobTypeFilter, setJobTypeFilter] = useState('All');
  const [salaryFilter, setSalaryFilter] = useState('All');
  const [datePostedFilter, setDatePostedFilter] = useState('All');

  // Filters for job listings
  useEffect(() => {
    let results = sampleJobs;
    
    // Text search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
      );
    }
    
    // Location filter
    if (locationQuery) {
      const location = locationQuery.toLowerCase();
      results = results.filter(job => 
        job.location.toLowerCase().includes(location)
      );
    }
    
    // Job type filter
    if (jobTypeFilter !== 'All') {
      results = results.filter(job => job.jobType === jobTypeFilter);
    }
    
    // Date posted filter (simplified for demo)
    if (datePostedFilter !== 'All') {
      if (datePostedFilter === 'Last 24 hours') {
        results = results.filter(job => job.posted.includes('day'));
      } else if (datePostedFilter === 'Last week') {
        results = results.filter(job => 
          job.posted.includes('day') || job.posted.includes('week')
        );
      }
    }
    
    setFilteredJobs(results);
  }, [searchQuery, locationQuery, jobTypeFilter, salaryFilter, datePostedFilter]);

  // Handle job search
  const handleSearch = (e) => {
    e.preventDefault();
    // Filters are already applied via useEffect
    toast.success("Search results updated!", {
      icon: "🔍",
    });
  };

  // Handle job save
  const handleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
      toast.info("Job removed from saved jobs", {
        icon: "📝",
      });
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast.success("Job saved successfully!", {
        icon: "💼",
      });
    }
  };

  // Handle job application
  const handleApplyJob = () => {
    if (!resumeFile) {
      toast.error("Please upload your resume first", {
        icon: "❌",
      });
      return;
    }
    
    toast.success("Application submitted successfully!", {
      icon: "🎉",
    });
    setSelectedJob(null);
    setResumeFile(null);
  };

  // Handle job posting
  const handlePostJob = (e) => {
    e.preventDefault();
    if (!jobTitle || !company || !jobLocation || !jobDescription) {
      toast.error("Please fill all required fields", {
        icon: "❌",
      });
      return;
    }
    
    setShowPostSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setJobTitle('');
      setCompany('');
      setJobLocation('');
      setSalary('');
      setJobType('Full-time');
      setJobDescription('');
      setShowPostSuccess(false);
    }, 3000);
  };

  // Handle resume upload
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      toast.info(`Resume uploaded: ${file.name}`, {
        icon: "📄",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {userType === 'jobseekers' ? (
        <div>
          {/* Job Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-6 mb-8">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="text"
                      className="input-field pl-10"
                      placeholder="Job title, keywords, or company"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPinIcon className="h-5 w-5 text-surface-400" />
                    </div>
                    <input
                      type="text"
                      className="input-field pl-10"
                      placeholder="City, state, or remote"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <button type="submit" className="btn-primary flex-grow">
                      Search Jobs
                    </button>
                    <button 
                      type="button"
                      className="btn-ghost p-2"
                      onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                      aria-label="Toggle filters"
                    >
                      <FilterIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Filters */}
                <AnimatePresence>
                  {isFiltersOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-surface-200 dark:border-surface-700">
                        <div>
                          <label className="block text-sm font-medium mb-2">Job Type</label>
                          <select 
                            className="input-field"
                            value={jobTypeFilter}
                            onChange={(e) => setJobTypeFilter(e.target.value)}
                          >
                            <option value="All">All Types</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Salary Range</label>
                          <select 
                            className="input-field"
                            value={salaryFilter}
                            onChange={(e) => setSalaryFilter(e.target.value)}
                          >
                            <option value="All">Any Salary</option>
                            <option value="0-50000">Under $50,000</option>
                            <option value="50000-100000">$50,000 - $100,000</option>
                            <option value="100000-150000">$100,000 - $150,000</option>
                            <option value="150000+">$150,000+</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Date Posted</label>
                          <select 
                            className="input-field"
                            value={datePostedFilter}
                            onChange={(e) => setDatePostedFilter(e.target.value)}
                          >
                            <option value="All">Any Time</option>
                            <option value="Last 24 hours">Last 24 hours</option>
                            <option value="Last week">Last week</option>
                            <option value="Last month">Last month</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
            
            {/* Results */}
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              </h3>
              <div className="text-sm text-surface-500 dark:text-surface-400">
                Showing {Math.min(filteredJobs.length, 10)} of {filteredJobs.length} results
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="space-y-6">
              <AnimatePresence>
                {selectedJob && (
                  <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedJob(null)}
                  >
                    <motion.div 
                      className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{selectedJob.title}</h3>
                          <p className="text-surface-600 dark:text-surface-300">{selectedJob.company}</p>
                        </div>
                        <button
                          onClick={() => setSelectedJob(null)}
                          className="p-1 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700"
                          aria-label="Close"
                        >
                          <XIcon className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-2 text-surface-500" />
                          <span className="text-sm">{selectedJob.location}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSignIcon className="w-4 h-4 mr-2 text-surface-500" />
                          <span className="text-sm">{selectedJob.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <BriefcaseIcon className="w-4 h-4 mr-2 text-surface-500" />
                          <span className="text-sm">{selectedJob.jobType}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Job Description</h4>
                        <p className="text-surface-700 dark:text-surface-300 mb-4">
                          {selectedJob.description}
                        </p>
                        
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="list-disc pl-5 space-y-1 text-surface-700 dark:text-surface-300">
                          {selectedJob.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-surface-200 dark:border-surface-700 pt-6">
                        <h4 className="font-semibold mb-4">Apply for this position</h4>
                        
                        <div className="mb-6">
                          <div className="flex items-center justify-center border-2 border-dashed border-surface-300 dark:border-surface-600 rounded-lg p-6 text-center">
                            <label className="cursor-pointer w-full">
                              <input 
                                type="file" 
                                className="hidden" 
                                accept=".pdf,.doc,.docx" 
                                onChange={handleResumeUpload}
                              />
                              <div className="flex flex-col items-center">
                                <UploadIcon className="w-10 h-10 text-surface-400 mb-2" />
                                <p className="font-medium mb-1">
                                  {resumeFile ? resumeFile.name : "Upload your resume"}
                                </p>
                                <p className="text-sm text-surface-500 dark:text-surface-400">
                                  {resumeFile ? "Click to change file" : "PDF, DOC or DOCX up to 5MB"}
                                </p>
                              </div>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button 
                            onClick={handleApplyJob}
                            className="btn-primary flex-grow flex items-center justify-center gap-2"
                          >
                            <SendIcon className="w-4 h-4" />
                            Apply Now
                          </button>
                          <button 
                            onClick={() => handleSaveJob(selectedJob.id)}
                            className={`btn-outline flex items-center justify-center gap-2 ${
                              savedJobs.includes(selectedJob.id) ? 'bg-primary/10' : ''
                            }`}
                          >
                            <BookmarkIcon className="w-4 h-4" />
                            {savedJobs.includes(selectedJob.id) ? 'Saved' : 'Save Job'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    className="card p-6 hover:shadow-soft cursor-pointer transition-all duration-200"
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                        <p className="text-surface-600 dark:text-surface-400 mb-3">{job.company}</p>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="inline-flex items-center text-sm text-surface-500 dark:text-surface-400">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="inline-flex items-center text-sm text-surface-500 dark:text-surface-400">
                            <DollarSignIcon className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="inline-flex items-center text-sm text-surface-500 dark:text-surface-400">
                            <BriefcaseIcon className="w-4 h-4 mr-1" />
                            {job.jobType}
                          </div>
                          <div className="inline-flex items-center text-sm text-surface-500 dark:text-surface-400">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {job.posted}
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className={`p-2 h-10 rounded-full ${
                          savedJobs.includes(job.id) 
                            ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                            : 'text-surface-400 hover:text-primary hover:bg-surface-100 dark:hover:bg-surface-700'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveJob(job.id);
                        }}
                        aria-label={savedJobs.includes(job.id) ? 'Unsave job' : 'Save job'}
                      >
                        <BookmarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <p className="text-surface-600 dark:text-surface-300 line-clamp-2 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="flex justify-end">
                      <button 
                        className="btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJob(job);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="card p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <SearchIcon className="w-16 h-16 text-surface-300 dark:text-surface-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                  <p className="text-surface-600 dark:text-surface-400 mb-4">
                    Try adjusting your search criteria or filters to find more opportunities.
                  </p>
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setSearchQuery('');
                      setLocationQuery('');
                      setJobTypeFilter('All');
                      setSalaryFilter('All');
                      setDatePostedFilter('All');
                    }}
                  >
                    Reset Search
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : (
        /* Employer Interface */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card p-6 md:p-8">
            <AnimatePresence mode="wait">
              {showPostSuccess ? (
                <motion.div 
                  className="text-center p-8"
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Job Posted Successfully!</h3>
                  <p className="text-surface-600 dark:text-surface-300 mb-6">
                    Your job listing has been submitted and is now visible to potential candidates.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-xl font-bold mb-6">Post a New Job</h3>
                  
                  <form onSubmit={handlePostJob} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Job Title *</label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="e.g. Senior Frontend Developer"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name *</label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="e.g. Acme Inc."
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Location *</label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="e.g. New York, NY or Remote"
                          value={jobLocation}
                          onChange={(e) => setJobLocation(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Salary Range</label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="e.g. $80,000 - $100,000"
                          value={salary}
                          onChange={(e) => setSalary(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Job Type</label>
                        <select
                          className="input-field"
                          value={jobType}
                          onChange={(e) => setJobType(e.target.value)}
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Internship">Internship</option>
                          <option value="Temporary">Temporary</option>
                        </select>
                      </div>
                      
                      <div className="flex items-end gap-4">
                        <button
                          type="button"
                          className="btn-ghost p-2.5"
                          aria-label="Add job benefits"
                        >
                          <PlusIcon className="w-5 h-5" />
                        </button>
                        
                        <p className="text-sm text-surface-500 dark:text-surface-400">
                          Add benefits, skills, and more details (optional)
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Description *</label>
                      <textarea
                        className="input-field min-h-[150px]"
                        placeholder="Describe the role, responsibilities, and ideal candidate..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        className="btn-outline flex items-center gap-2"
                      >
                        <SaveIcon className="w-4 h-4" />
                        Save Draft
                      </button>
                      
                      <button
                        type="submit"
                        className="btn-primary flex items-center gap-2"
                      >
                        <SendIcon className="w-4 h-4" />
                        Post Job
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Your Active Job Listings</h3>
              <button className="btn-ghost text-sm flex items-center gap-1">
                <FilterIcon className="w-4 h-4" />
                Filter
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </div>
            
            <div className="card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <BriefcaseIcon className="w-16 h-16 text-surface-300 dark:text-surface-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">No active job listings</h3>
              <p className="text-surface-500 dark:text-surface-400 mb-6">
                Your posted jobs will appear here. Start by creating your first job listing.
              </p>
              <button className="btn-primary flex items-center gap-2 mx-auto">
                <PlusIcon className="w-4 h-4" />
                Create New Job
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}