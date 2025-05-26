import React, { useState } from 'react';
import { projectsData as initialProjectsData } from '../data/dummy';
import { Header } from '../components';
import { FiPlus, FiX, FiCalendar, FiUser, FiDollarSign, FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
  const [projects, setProjects] = useState(initialProjectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'Active',
    progress: 0,
    teamLead: { name: '', avatar: '' },
    dueDate: '',
    budget: '',
    priority: 'Medium'
  });
  const [formErrors, setFormErrors] = useState({});
  const [teamLeads, setTeamLeads] = useState([
    { name: 'John Doe', avatar: require('../data/avatar.jpg').default },
    { name: 'Jane Smith', avatar: require('../data/avatar2.jpg').default },
    { name: 'Mike Johnson', avatar: require('../data/avatar3.png').default },
    { name: 'Sarah Williams', avatar: require('../data/avatar4.jpg').default },
    { name: 'David Brown', avatar: require('../data/avatar.jpg').default }
  ]);

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      status: 'Active',
      progress: 0,
      teamLead: { name: '', avatar: '' },
      dueDate: '',
      budget: '',
      priority: 'Medium'
    });
    setFormErrors({});
    setEditingProject(null);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Project name is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (!formData.teamLead.name) errors.teamLead = 'Please select a team lead';
    if (!formData.dueDate) errors.dueDate = 'Due date is required';
    if (!formData.budget) errors.budget = 'Budget is required';
    if (formData.progress < 0 || formData.progress > 100) errors.progress = 'Progress must be between 0 and 100';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'progress' ? parseInt(value, 10) : value
    }));
  };

  const handleTeamLeadChange = (e) => {
    const selectedLead = teamLeads.find(lead => lead.name === e.target.value);
    setFormData(prev => ({
      ...prev,
      teamLead: selectedLead || { name: '', avatar: '' }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingProject) {
      // Update existing project
      setProjects(prev => prev.map(project => 
        project.id === editingProject.id 
          ? { ...formData, id: editingProject.id } 
          : project
      ));
      toast.success('Project updated successfully!');
    } else {
      // Add new project
      const newProject = {
        ...formData,
        id: Math.max(0, ...projects.map(p => p.id)) + 1
      };
      setProjects(prev => [newProject, ...prev]);
      toast.success('Project added successfully!');
    }

    setIsModalOpen(false);
    resetForm();
  };

  const handleEditProject = (project) => {
    setFormData({
      name: project.name,
      description: project.description,
      status: project.status,
      progress: project.progress,
      teamLead: project.teamLead,
      dueDate: project.dueDate,
      budget: project.budget,
      priority: project.priority
    });
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(project => project.id !== projectId));
      toast.success('Project deleted successfully!');
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.name}</h3>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                  project.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                  project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditProject(project);
                  }}
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  title="Edit project"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteProject(project.id);
                  }}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  title="Delete project"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div 
                  className={`h-2 rounded-full ${
                    project.progress < 30 ? 'bg-red-500' : 
                    project.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
                  }`} 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <img 
                  src={project.teamLead.avatar} 
                  alt={project.teamLead.name} 
                  className="w-8 h-8 rounded-full mr-2" 
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{project.teamLead.name || 'Unassigned'}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <FiCalendar className="mr-1" />
                  {new Date(project.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <FiDollarSign className="inline mr-1" />
                {project.budget}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${
                project.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              }`}>
                {project.priority} Priority
              </span>
            </div>
          </div>
        ))}
        
        {/* Add New Project Card */}
        <div 
          className="bg-white dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center min-h-[300px]" 
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
        >
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
            <FiPlus className="text-blue-500 dark:text-blue-300 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">Add New Project</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">Click to create a new project</p>
        </div>
      </div>

      {/* Add/Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <FiX size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded-md ${
                          formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } dark:bg-gray-700 dark:text-white`}
                        placeholder="Enter project name"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="mr-1" /> {formErrors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className={`w-full p-2 border rounded-md ${
                        formErrors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } dark:bg-gray-700 dark:text-white`}
                      placeholder="Enter project description"
                    ></textarea>
                    {formErrors.description && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <FiAlertCircle className="mr-1" /> {formErrors.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Priority <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Progress <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        name="progress"
                        min="0"
                        max="100"
                        value={formData.progress}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-300 w-10 text-center">
                        {formData.progress}%
                      </span>
                    </div>
                    {formErrors.progress && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <FiAlertCircle className="mr-1" /> {formErrors.progress}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Team Lead <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="teamLead"
                        value={formData.teamLead}
                        onChange={handleTeamLeadChange}
                        className={`w-full pl-10 p-2 border rounded-md ${
                          formErrors.teamLead ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } dark:bg-gray-700 dark:text-white appearance-none`}
                      >
                        <option value="">Select Team Lead</option>
                        {teamLeads.map((lead, index) => (
                          <option key={index} value={lead.name}>
                            {lead.name}
                          </option>
                        ))}
                      </select>
                      {formErrors.teamLead && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="mr-1" /> {formErrors.teamLead}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Due Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        className={`w-full pl-10 p-2 border rounded-md ${
                          formErrors.dueDate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } dark:bg-gray-700 dark:text-white`}
                      />
                      {formErrors.dueDate && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="mr-1" /> {formErrors.dueDate}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Budget <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full pl-10 p-2 border rounded-md ${
                          formErrors.budget ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } dark:bg-gray-700 dark:text-white`}
                        placeholder="e.g. $15,000"
                      />
                      {formErrors.budget && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <FiAlertCircle className="mr-1" /> {formErrors.budget}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      resetForm();
                    }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {editingProject ? 'Update Project' : 'Add Project'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;