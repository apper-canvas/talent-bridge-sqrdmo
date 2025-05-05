import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const Jobs = () => {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    category: '',
    type: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = (jobTitle) => {
    toast.success(`Application submitted for ${jobTitle}!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const BriefcaseIcon = getIcon('Briefcase');
  const MapPinIcon = getIcon('MapPin');
  const CalendarIcon = getIcon('Calendar');
  const SearchIcon = getIcon('Search');
  const FilterIcon = getIcon('Filter');

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp International',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      description: 'We are looking for an experienced React developer to join our team and help build our next-generation web applications.',
      skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'Node.js'],
      category: 'Development'
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'CreativeHub',
      location: 'Remote',
      type: 'Contract',
      salary: '$90,000 - $110,000',
      posted: '1 week ago',
      description: 'Join our design team to create intuitive and beautiful user experiences for our clients across various industries.',
      skills: ['UI/UX', 'Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      category: 'Design'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'GrowthBoost Agency',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$85,000 - $105,000',
      posted: '3 days ago',
      description: 'Lead our marketing efforts and help develop strategies to increase brand awareness and drive customer acquisition.',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics', 'Social Media'],
      category: 'Marketing'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataInsights Corp',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      posted: '5 days ago',
      description: 'Analyze complex datasets and develop machine learning models to solve business problems and extract actionable insights.',
      skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistics'],
      category: 'Data Science'
    }
  ];

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    return (
      (filters.search === '' || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) || 
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.category === '' || job.category === filters.category) &&
      (filters.type === '' || job.type === filters.type)
    );
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Job</h1>
        <p className="text-lg mb-8">Browse through our curated list of opportunities</p>

        {/* Search and Filter Section */}
        <div className="card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon size={18} className="text-surface-400" />
              </div>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Job title or keyword"
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon size={18} className="text-surface-400" />
              </div>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Location"
                className="input-field pl-10"
              />
            </div>
            <select 
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="input-field"
            >
              <option value="">All Categories</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Data Science">Data Science</option>
              <option value="Management">Management</option>
            </select>
            <select 
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="input-field"
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <motion.div
                key={job.id}
                className="card hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                      <p className="text-lg font-medium mt-1">{job.company}</p>
                      
                      <div className="flex flex-wrap gap-3 mt-3">
                        <div className="flex items-center text-sm text-surface-600 dark:text-surface-400">
                          <MapPinIcon size={16} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-surface-600 dark:text-surface-400">
                          <BriefcaseIcon size={16} className="mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-sm text-surface-600 dark:text-surface-400">
                          <CalendarIcon size={16} className="mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                      
                      <p className="mt-4">{job.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-3">
                      <div className="text-lg font-semibold text-surface-800 dark:text-surface-200">
                        {job.salary}
                      </div>
                      <button 
                        className="btn-primary mt-2"
                        onClick={() => handleApply(job.title)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="card p-8 text-center">
              <h3 className="text-xl mb-2">No matching jobs found</h3>
              <p>Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Jobs;