import React from 'react';
import HeroSection from './Sections/HeroSection';
import EarlyAccessSection from './Sections/EarlyAccessSection';
import AboutSection from './Sections/AboutSection';
import VideoSection from './Sections/VideoSection';
import DesignToolsSection from './Sections/DesignToolsSection';
import CourseCardSection from './Sections/CourseCardSection';
import OurCourseSection from './Sections/OurCourseSection';
import CoursesGridSection from './Sections/CoursesGridSection';
import TestimonialsSection from './Sections/TestimonialsSection';
import CertificationsSection from './Sections/CertificationsSection';
import ServicesSection from './Sections/ServicesSection';
import PortfolioSection from './Sections/PortfolioSection';
import ContactSection from './Sections/ContactSection';
import SupportSection from './Sections/SupportSection';
import InstructorAbout from './Sections/InstructorAbout';
import ScrollAnimation from '../components/ScrollAnimation/ScrollAnimation';

const Home = () => {
  return (
    <div className="w-full pt-16 md:pt-20">
      <HeroSection />
      <ScrollAnimation><EarlyAccessSection /></ScrollAnimation>
      <ScrollAnimation><AboutSection /></ScrollAnimation>
      <ScrollAnimation><VideoSection /></ScrollAnimation>
      <ScrollAnimation><DesignToolsSection /></ScrollAnimation>
      <ScrollAnimation><CourseCardSection /></ScrollAnimation>
      <ScrollAnimation><OurCourseSection /></ScrollAnimation>
      <ScrollAnimation><CoursesGridSection /></ScrollAnimation>
      <ScrollAnimation><TestimonialsSection /></ScrollAnimation>
      <ScrollAnimation><CertificationsSection /></ScrollAnimation>
      <ScrollAnimation><InstructorAbout/></ScrollAnimation>
      <ScrollAnimation><ServicesSection /></ScrollAnimation>
      <ScrollAnimation><PortfolioSection /></ScrollAnimation>
      <ScrollAnimation><ContactSection /></ScrollAnimation>
      <ScrollAnimation><SupportSection/></ScrollAnimation>
    </div>
  );
};

export default Home;

