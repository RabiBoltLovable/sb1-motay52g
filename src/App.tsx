import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import Programs from './components/Programs/Programs';
import SubjectList from './components/Academics/SubjectList';
import Stats from './components/Stats';
import Facilities from './components/Facilities/Facilities';
import NewsSection from './components/News/NewsSection';
import PhotoGallery from './components/Gallery/PhotoGallery';
import AcademicCalendar from './components/Calendar/AcademicCalendar';
import LocalEvents from './components/LocalEvents/LocalEvents';
import VirtualTourSection from './components/VirtualTour/VirtualTourSection';
import AlumniSection from './components/Alumni/AlumniSection';
import AchievementsSection from './components/Achievements/AchievementsSection';
import FacultySection from './components/Faculty/FacultySection';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter/Newsletter';
import StudentPortal from './components/Portal/StudentPortal';
import AdmissionSection from './components/Admission/AdmissionSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <SubjectList />
      <Stats />
      <FacultySection />
      <Facilities />
      <StudentPortal />
      <AdmissionSection />
      <VirtualTourSection />
      <AchievementsSection />
      <NewsSection />
      <PhotoGallery />
      <AlumniSection />
      <AcademicCalendar />
      <LocalEvents />
      <Testimonials />
      <Contact />
      <Newsletter />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Ashokam International School, Gaur, Nepal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;