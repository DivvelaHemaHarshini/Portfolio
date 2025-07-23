import React from 'react';
import { Code, Palette, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Complete web application development using the MERN stack (MongoDB, Express.js, React, Node.js) with modern best practices, responsive design, and scalable architecture.',
      features: [
        'Custom web application development',
        'RESTful API design and implementation',
        'Database design and optimization',
        'Authentication and security implementation',
        'Performance optimization and testing'
      ]
    },
    // {
    //   icon: Palette,
    //   title: 'UI/UX Design',
    //   description: 'Modern, user-centered design solutions that combine aesthetic appeal with functional usability, ensuring excellent user experiences across all devices.',
    //   features: [
    //     'Responsive web design',
    //     'User interface prototyping',
    //     'User experience optimization',
    //     'Brand-consistent design systems',
    //     'Accessibility compliance'
    //   ]
    // },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Specialized machine learning solutions focusing on NLP applications and cloud-based AI deployment using industry-leading platforms and frameworks.',
      features: [
        'Natural Language Processing solutions',
        'Sentiment analysis and text classification',
        'Cloud AI model deployment (IBM Watson, Google Cloud)',
        'Hugging Face model integration',
        'Custom ML pipeline development'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical services combining cutting-edge web development 
            with innovative AI/ML solutions to drive your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <service.icon size={32} className="text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="mb-6 text-blue-100">
            Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;