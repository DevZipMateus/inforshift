
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-darkgray-900 overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-turquoise/5 to-darkgray-900/95"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-turquoise bg-turquoise/10 rounded-full">
            Sistemas e Consultoria TI
          </div>
        </motion.div>

        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="/lovable-uploads/3efc66c6-3e03-4899-a967-63ba0eb4f50c.png" 
            alt="Infor SHIFT Brain Logo" 
            className="h-32 w-auto mx-auto mb-4"
          />
          <img 
            src="/lovable-uploads/19635b6a-83e2-4dcc-9bb0-89e19d03b96b.png" 
            alt="Infor SHIFT Text Logo" 
            className="h-16 w-auto mx-auto"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transformando negócios com{' '}
          <span className="text-turquoise">Soluções Inteligentes</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Na Infor SHIFT, unimos tecnologia, experiência e atenção ao cliente para transformar a forma como as empresas lidam com seus desafios em TI e gestão.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://wa.me/5582988546023?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Infor%20SHIFT."
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Entre em Contato
          </a>
          <a href="#services" className="btn-secondary">
            Conheça Nossos Serviços
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
          <span className="text-sm text-gray-400 mt-2">Role para baixo</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
