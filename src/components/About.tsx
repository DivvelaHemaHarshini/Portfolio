import React from 'react';
import { Brain, Code, Cloud, Users, MessageCircle, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Brain, title: 'AI/ML Expertise', description: 'Specialized in NLP, sentiment analysis, and cloud-based AI deployment' },
    { icon: Code, title: 'Full-Stack Development', description: 'Proficient in MERN stack with modern web technologies' },
    { icon: Cloud, title: 'Cloud Platforms', description: 'Experience with IBM Cloud, Google Cloud, and cloud model deployment' },
    { icon: Users, title: 'Teamwork', description: 'Strong collaboration skills and adaptability in team environments' },
    { icon: MessageCircle, title: 'Communication', description: 'Excellent verbal and written communication abilities' },
    { icon: Lightbulb, title: 'Problem Solving', description: 'Creative approach to solving complex technical challenges' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate Computer Science student with a deep love for AI/ML technologies, 
            web development, and cloud platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Currently pursuing my Computer Science Engineering degree with a specialization 
              in AI & ML at NRI Institute of Technology (2022-2026). My academic journey has 
              been driven by a passion for creating innovative solutions that bridge the gap 
              between artificial intelligence and practical web applications.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in developing dynamic web applications using the MERN stack, 
              deploying machine learning models on cloud platforms, and creating NLP solutions 
              that solve real-world problems. My approach emphasizes clean, maintainable code 
              and collaborative development practices.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Education</h4>
              <p className="text-blue-800">
                <strong>B.Tech in Computer Science Engineering (AI & ML)</strong><br />
                NRI Institute of Technology<br />
                CGPA : 8.9 ,2022 - 2026
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              {/* <h4 className="text-lg font-semibold text-blue-900 mb-2">Education</h4> */}
              <p className="text-blue-800">
                <strong>Intermediate, MPC</strong><br />
               Sri Chaitanya Jr.College<br />
              Grade : 95% , 2020 - 2022 
              </p>
            </div>
             <div className="bg-blue-50 p-6 rounded-lg">
              {/* <h4 className="text-lg font-semibold text-blue-900 mb-2">Education</h4> */}
              <p className="text-blue-800">
                <strong>SSC</strong><br />
                Sri Chaitanya School<br />
                CGPA : 94% , 2020
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <skill.icon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Adaptability', 'Clean Coding', 'Teamwork', 'Innovation', 'Problem Solving', 'Communication'].map((strength) => (
              <span key={strength} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;