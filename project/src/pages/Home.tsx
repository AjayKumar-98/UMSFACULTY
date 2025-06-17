import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AcademicsSection from '../components/AcademicsSection';
import EventsSection from '../components/EventsSection';
import NewsSection from '../components/NewsSection';
import FeaturesSection from '../components/FeaturesSection';
import AdmissionsSection from '../components/AdmissionsSection';
import CampusLifeSection from '../components/CampusLifeSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Hero />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AboutSection />
            <FeaturesSection />
            <AcademicsSection />
            <CampusLifeSection />
            <AdmissionsSection />
            <EventsSection />
            <NewsSection />
            <ContactSection />
          </div>
        </main>
      </Suspense>
    </div>
  );
};

export default Home;