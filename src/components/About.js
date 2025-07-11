'use client';

import { useState } from 'react';
import { personalInfo, skills, education, certifications } from '../models/data';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const SkillCategory = ({ title, skillList = [] }) => (
    <div className="bg-white dark:bg-gray-50 rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-accent font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {skillList.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-900 dark:text-white font-secondary font-medium">{skill?.name || skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const EducationCard = ({ edu }) => (
    <div className="bg-white dark:bg-gray-50 rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-accent font-semibold text-gray-900 dark:text-white mb-2">
            {edu.degree}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-primary font-medium">{edu.institution}</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-secondary text-gray-500 dark:text-gray-400">{edu.duration}</span>
        </div>
      </div>
      
      {edu.grade && (
        <div className="mt-2">
          <span className="text-green-600 dark:text-green-400 font-primary font-medium">{edu.grade}</span>
        </div>
      )}
    </div>
  );

  const CertificationCard = ({ cert }) => (
    <div className="bg-white dark:bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-accent font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-primary font-medium">{cert.issuer}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400 font-secondary">{cert.description}</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-secondary">Issued: {cert.date}</p>
        </div>
        <div className="flex items-center text-green-500">
          <span className="text-sm font-primary">Verified</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-100 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-accent font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg font-secondary text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me to create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-50 rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-50 rounded-full overflow-hidden">
                    <img
                      src={personalInfo?.avatar || '/profile.jpg'}
                      alt={personalInfo?.name || 'MITHINVEL T'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-primary font-bold text-gray-900 dark:text-white mb-2">
                  {personalInfo?.name || 'MITHINVEL T'}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-secondary font-medium mb-4">
                  {personalInfo?.title || 'Flutter Developer'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-secondary">{personalInfo?.email || 'contact@example.com'}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-secondary">{personalInfo?.phone || '+91 9080971432'}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="font-secondary">{personalInfo?.location || 'Dharmapuri, Tamil Nadu'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-50 rounded-lg p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-accent font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-secondary">
                  Hello! I'm a passionate Flutter developer with a focus on frontend development. 
                  My journey began with a curiosity about mobile app development, and it has evolved 
                  into a career dedicated to crafting exceptional mobile experiences.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-secondary">
                  I specialize in Flutter and Dart, with experience in Firebase for backend integration 
                  and MongoDB for database operations. I believe in writing clean, maintainable code 
                  and following best practices to deliver robust mobile applications that scale.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-secondary">
                  When I'm not coding, you can find me exploring new mobile technologies, debugging 
                  complex app issues, or working on innovative Flutter projects. I'm always excited 
                  to take on new challenges and collaborate with teams to bring mobile app ideas to life.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-accent font-bold text-blue-600 dark:text-blue-400">3</div>
                  <div className="text-sm font-secondary text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-accent font-bold text-purple-600 dark:text-purple-400">1+</div>
                  <div className="text-sm font-secondary text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-accent font-bold text-green-600 dark:text-green-400">2</div>
                  <div className="text-sm font-secondary text-gray-600 dark:text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-accent font-bold text-orange-600 dark:text-orange-400">6+</div>
                  <div className="text-sm font-secondary text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white dark:bg-gray-50 rounded-lg p-1 shadow-lg border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-primary font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCategory
                title="Mobile Development"
                skillList={skills?.mobile || []}
              />
              <SkillCategory
                title="Backend"
                skillList={skills?.backend || []}
              />
              <SkillCategory
                title="Tools"
                skillList={skills?.tools || []}
              />
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {(education || []).map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(certifications || []).map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
