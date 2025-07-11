'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../models/data';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const texts = [

      'Mobile App Developer',

    ];
    
    const handleTyping = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, speed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-100 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-accent font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo?.name || 'MITHINVEL T'}
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl font-primary text-gray-600 dark:text-gray-300">
                I&apos;m a{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className="text-base sm:text-lg font-secondary text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {personalInfo?.description || 'Passionate developer creating amazing digital experiences.'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-primary font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                View My Work
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-primary font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:text-white transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {Object.entries(personalInfo?.social || {}).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200 font-secondary font-medium capitalize"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <img
                  src={personalInfo?.avatar || '/profile.jpg'}
                  alt={personalInfo?.name || 'MITHINVEL T'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full relative">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto mt-2 animate-ping"></div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
