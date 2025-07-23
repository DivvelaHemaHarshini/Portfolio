import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshini.divvela07@gmail.com',
      href: 'mailto:harshini.divvela07@gmail.com'
    },
    // {
    //   icon: Phone,
    //   label: 'Phone',
    //   value: '+91 9121049826',
    //   href: 'tel:+91 9121049826'
    // },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/divvelahemaharshini07',
      href: 'https://linkedin.com/in/divvelahemaharshini07/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/DivvelaHemaHarshini',
      href: 'https://github.com/DivvelaHemaHarshini'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on 
                exciting projects, or simply having a conversation about technology and innovation. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                    <info.icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{info.label}</p>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-2">Available for Opportunities</h4>
              <p className="text-blue-100 text-sm">
                Open to internships, freelance projects, and full-time positions in 
                AI/ML, full-stack development, and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;