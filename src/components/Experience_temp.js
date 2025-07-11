'use client';

import { experience } from '@/models/data';

const Experience = () => {
  const ExperienceCard = ({ exp, index }) => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
      
      <div className="ml-20 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {exp.position}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                {exp.company}
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {exp.duration}
              </span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career as a Flutter developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something amazing together!
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
