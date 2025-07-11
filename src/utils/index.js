// Utility functions for the portfolio

// Smooth scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Format date
export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Validate email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate required fields
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

// Copy text to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};

// Get scroll percentage
export const getScrollPercentage = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  return (scrollTop / scrollHeight) * 100;
};

// Animate counter
export const animateCounter = (element, start, end, duration = 2000) => {
  const startTime = performance.now();
  const difference = end - start;
  
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = start + (difference * progress);
    element.textContent = Math.floor(current);
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  
  requestAnimationFrame(step);
};

// Local storage utilities
export const localStorage = {
  set: (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  
  get: (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  remove: (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

// Theme utilities
export const theme = {
  get: () => {
    return localStorage.get('theme') || 'light';
  },
  
  set: (newTheme) => {
    localStorage.set('theme', newTheme);
    document.documentElement.className = newTheme;
  },
  
  toggle: () => {
    const currentTheme = theme.get();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    theme.set(newTheme);
    return newTheme;
  }
};

// URL utilities
export const getQueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

export const setQueryParam = (param, value) => {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url);
};

// Device detection
export const device = {
  isMobile: () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  
  isTablet: () => {
    return /iPad|Android|Tablet/i.test(navigator.userAgent) && !device.isMobile();
  },
  
  isDesktop: () => {
    return !device.isMobile() && !device.isTablet();
  }
};

// Performance utilities
export const performance = {
  measure: (name, fn) => {
    const start = Date.now();
    const result = fn();
    const end = Date.now();
    console.log(`${name} took ${end - start}ms`);
    return result;
  },
  
  debounce: debounce,
  throttle: throttle
};

// Animation utilities
export const animation = {
  fadeIn: (element, duration = 300) => {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    const start = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = progress;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  },
  
  fadeOut: (element, duration = 300) => {
    const start = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = 1 - progress;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
      }
    };
    
    requestAnimationFrame(animate);
  },
  
  slideIn: (element, direction = 'left', duration = 300) => {
    const transforms = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      top: 'translateY(-100%)',
      bottom: 'translateY(100%)'
    };
    
    element.style.transform = transforms[direction];
    element.style.display = 'block';
    
    const start = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      if (direction === 'left' || direction === 'right') {
        const translateX = direction === 'left' ? -100 + (100 * easeOut) : 100 - (100 * easeOut);
        element.style.transform = `translateX(${translateX}%)`;
      } else {
        const translateY = direction === 'top' ? -100 + (100 * easeOut) : 100 - (100 * easeOut);
        element.style.transform = `translateY(${translateY}%)`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.transform = 'none';
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// Form utilities
export const form = {
  validate: (formData, rules) => {
    const errors = {};
    
    Object.keys(rules).forEach(field => {
      const value = formData[field];
      const fieldRules = rules[field];
      
      if (fieldRules.required && !validateRequired(value)) {
        errors[field] = `${field} is required`;
      } else if (fieldRules.email && !validateEmail(value)) {
        errors[field] = 'Please enter a valid email address';
      } else if (fieldRules.minLength && value.length < fieldRules.minLength) {
        errors[field] = `${field} must be at least ${fieldRules.minLength} characters`;
      } else if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
        errors[field] = `${field} must be no more than ${fieldRules.maxLength} characters`;
      }
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },
  
  serialize: (formElement) => {
    const formData = new FormData(formElement);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    return data;
  }
};

// Export all utilities
export default {
  scrollToElement,
  formatDate,
  debounce,
  throttle,
  isInViewport,
  generateId,
  validateEmail,
  validateRequired,
  copyToClipboard,
  getScrollPercentage,
  animateCounter,
  localStorage,
  theme,
  getQueryParam,
  setQueryParam,
  device,
  performance,
  animation,
  form
};
