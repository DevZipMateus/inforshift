import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile'; 
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Partner from '@/components/sections/Partner';
import FloatingButton from '@/components/ui/FloatingButton';
import EgestorERP from '@/components/sections/EgestorERP';
import Zork from '@/components/sections/Zork';
import { motion } from 'framer-motion';

const Index = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll function for anchor links
    const handleAnchorLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const offset = isMobile ? 60 : 80; // Smaller offset for mobile
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - offset,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorLinkClick);
    return () => {
      document.removeEventListener('click', handleAnchorLinkClick);
    };
  }, [isMobile]);

  // Handle scroll to section after navigation from other pages
  useEffect(() => {
    // Check if we have a scroll target from navigation
    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          const offset = isMobile ? 60 : 80;
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - offset,
            behavior: 'smooth',
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-darkgray-800"
    >
      <Header />
      <main className="space-y-0">
        <Hero />
        <About />
        <Services />
        <EgestorERP />
        <Zork />
        <Partner />
        <Contact />
      </main>
      <FloatingButton />
      <Footer />
    </motion.div>
  );
};

export default Index;
