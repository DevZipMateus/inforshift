
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, HeartHandshake, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const features = [
    {
      icon: <Target className="h-8 w-8 text-turquoise" />,
      title: 'Missão',
      description:
        'Oferecer sistemas robustos, consultoria personalizada e suporte ágil, contribuindo para o crescimento e eficiência dos nossos clientes.',
    },
    {
      icon: <Brain className="h-8 w-8 text-turquoise" />,
      title: 'Visão',
      description:
        'Ser referência em soluções inteligentes, que transformam a tecnologia em resultados reais para empresas em todo o Brasil.',
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-turquoise" />,
      title: 'Valores',
      description: 'Compromisso com o resultado • Atendimento humanizado e ágil • Inovação com simplicidade • Ética e responsabilidade • Foco na excelência do serviço',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="py-16 bg-darkgray-800">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-turquoise bg-turquoise/10 rounded-full">
            Sobre Nós
          </div>
          <h2 className="section-title text-white">Quem Somos</h2>
          <p className="section-subtitle text-gray-300">
            Fundada em 2014 e consolidada como Pessoa Jurídica em 2020, a Infor SHIFT Soluções Inteligentes nasceu com o propósito de oferecer tecnologia acessível, robusta e eficaz para empresas que desejam evoluir.
          </p>
          <p className="section-subtitle text-gray-300 mt-4">
            Atuamos com sistemas personalizados, consultoria em TI, desenvolvimento de soluções e apoio contábil, sempre com foco em agilidade, inovação e atendimento humanizado.
          </p>
          <p className="section-subtitle text-gray-300 mt-4">
            Com sede em Arapiraca – AL e atendimento remoto em todo o Brasil, somos movidos por um compromisso simples: entregar soluções que fazem a diferença na rotina dos nossos clientes.
          </p>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button 
              onClick={() => window.open('https://www.instagram.com/infor.shift/', '_blank')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Siga-nos no Instagram
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-darkgray-700 rounded-xl p-6 shadow-subtle card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-darkgray-600 w-16 h-16 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
