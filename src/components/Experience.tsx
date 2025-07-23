import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   title: 'Self-Project Developer',
    //   company: 'Independent Project',
    //   location: 'Remote',
    //   period: '2024 - Present',
    //   type: 'Project',
    //   description: 'Developed a comprehensive Employee Management System using the MERN stack with advanced features including JWT authentication, role-based access control, and real-time dashboard.',
    //   achievements: [
    //     'Built responsive UI with React and Tailwind CSS',
    //     'Implemented secure authentication system with JWT',
    //     'Designed efficient MongoDB database schema',
    //     'Created real-time dashboard with data visualization',
    //     'Deployed application with CI/CD pipeline'
    //   ],
    //   technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS']
    // },
    {
  title: 'Cybersecurity Intern- Steganography',
  company: 'NRI Institute of Technology',
  location: 'Remote',
  period: '2024',
  type: 'Internship',
  description: 'Developed a steganography-based system to embed secret messages in images using pixel manipulation, enabling secure and discreet communication with minimal visual distortion.',
  achievements: [
    'Designed and implemented image-based steganography using Python and OpenCV',
    'Developed passcode-protected decryption for authorized data access',
    'Ensured minimal image distortion for undetectable message hiding',
    'Applied ASCII encoding and pixel-level manipulation for secure embedding',
    'Created cross-platform compatibility for Windows, Linux, and macOS'
  ],
  technologies: ['Python', 'OpenCV', 'Steganography', 'ASCII Encoding', 'Image Processing']
},

    {
      title: 'Machine Learning Intern',
      company: 'TechSaksham Initiative',
      location: 'Remote',
      period: '2024',
      type: 'Internship',
      description: 'Specialized in developing NLP solutions for spam mail classification with deployment on Streamlit platform, contributing to email security systems.',
      achievements: [
        'Developed spam mail classification model with 94% accuracy',
        'Implemented advanced NLP preprocessing techniques',
        'Created interactive Streamlit web application',
        'Optimized model performance and reduced false positives',
        'Documented comprehensive project methodology'
      ],
      technologies: ['Python', 'Scikit-learn', 'NLP', 'Streamlit', 'Pandas', 'NumPy']
    },
    {
      title: 'AI-Cloud Intern',
      company: 'Edunet Foundation',
      location: 'Remote',
      period: '2024',
      type: 'Internship',
      description: 'Focused on sentiment analysis using IBM Watson AutoAI with cloud deployment, gaining expertise in enterprise-grade AI solutions and cloud platforms.',
      achievements: [
        'Built sentiment analysis model using IBM Watson AutoAI',
        'Successfully deployed AI models on IBM Cloud platform',
        'Integrated cloud-based AI services with web applications',
        'Achieved high accuracy in sentiment classification tasks',
        'Learned enterprise AI deployment best practices'
      ],
      technologies: ['IBM Watson', 'IBM Cloud', 'AutoAI', 'Python', 'Cloud APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey through hands-on projects and internships, building expertise 
            in AI/ML, cloud technologies, and full-stack development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'Internship' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm actively seeking opportunities to apply my skills in AI/ML and full-stack development 
              in challenging, innovative environments. Ready to contribute to cutting-edge projects 
              and continue growing as a technology professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;