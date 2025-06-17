import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0,
  threshold = 0.1
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={`animate-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;