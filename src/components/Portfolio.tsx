import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'Comprehensive MERN stack application with JWT authentication, responsive UI, and real-time dashboard for managing employee data and operations.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/DivvelaHemaHarshini/EmployeeMangementSystem',
      demo: null,
      category: 'Full-Stack',
      featured: true,
      // status: 'Production Ready'
    },
    {
      title: 'Spotify Clone',
      description: 'Responsive music streaming application with intuitive music controls, playlist management, and modern user interface design.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
      github: 'https://github.com/DivvelaHemaHarshini/Spotify_clone',
      // demo: 'https://spotify-clone-demo.netlify.app',
      category: 'Frontend',
      featured: false,
      // status: 'Live Demo'
    },
    {
      title: 'Cafe Inquiry System',
      description: 'Customer data management system with responsive forms, order tracking, and administrative dashboard for cafe operations.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
      github: 'https://github.com/DivvelaHemaHarshini/cafe-website',
      demo: null,
      category: 'Backend',
      featured: false,
      // status: 'Completed'
    },
    {
      title: 'AI Resume Screening App',
      description: 'NLP-powered application for automated resume screening and ranking using advanced text analysis and machine learning algorithms.',
      technologies: ['Python', 'Streamlit', 'NLP', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/DivvelaHemaHarshini/AI_RESUME_SCREENING_AND_RANKING',
      // demo: 'https://resume-screening-app.streamlit.app',
      category: 'AI/ML',
      featured: true,
      // status: 'Live Demo'
    },
    {
      title: 'Mood-Based Quote Generator',
      description: 'Intelligent motivational quote generator using sentiment analysis and Hugging Face API to provide personalized inspirational content.',
      technologies: ['Node.js', 'Express', 'Hugging Face API', 'NLP', 'React'],
      github: 'https://github.com/DivvelaHemaHarshini/mood-quote-app',
      // demo: 'https://mood-quotes-generator.vercel.app',
      category: 'AI/ML',
      featured: false,
      // status: 'Live Demo'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Full-Stack': 'bg-gradient-to-r from-slate-700 to-slate-800 text-white',
      'Frontend': 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white',
      'Backend': 'bg-gradient-to-r from-amber-600 to-amber-700 text-white',
      'AI/ML': 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-slate-100 text-slate-700';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Production Ready': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      // 'Live Demo': 'bg-amber-50 text-amber-700 border-amber-200',
      'Completed': 'bg-slate-50 text-slate-700 border-slate-200'
    };
    return colors[status as keyof typeof colors] || 'bg-slate-50 text-slate-700 border-slate-200';
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="mr-2" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that bridge cutting-edge AI/ML technologies 
            with robust full-stack development expertise.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg shadow-slate-700/25'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Header */}
              <div className="relative p-8 pb-6">
                {project.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full">
                      <Sparkles size={12} className="mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className={`px-4 py-2 text-xs font-bold rounded-lg ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    {/* <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}> */}
                      {/* {project.status} */}
                    {/* </span> */}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-700 hover:text-white transition-all duration-300 group/icon"
                      >
                        <Github size={20} className="group-hover/icon:scale-110 transition-transform duration-300" />
                      </a>
                    )}
                    {/* {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 group/icon"
                      >
                        <ExternalLink size={20} className="group-hover/icon:scale-110 transition-transform duration-300" />
                      </a>
                    )} */}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-emerald-600 to-amber-600 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-slate-200 mb-6 text-lg">
                Let's collaborate on your next innovative project and bring your vision to life.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start a Conversation
                <ArrowUpRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;