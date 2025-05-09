
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Laptop, FileSearch, Building } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-turquoise" />,
      title: 'Sistema para Varejo',
      description: 'Soluções completas para o gerenciamento do seu negócio no varejo, com controle de estoque, vendas, financeiro e muito mais.'
    }, 
    {
      icon: <Building className="h-8 w-8 text-turquoise" />,
      title: 'Sistema para Atacadista',
      description: 'Ferramentas robustas para gestão de atacado, com recursos de precificação por quantidade, controle de pedidos em grande volume e logística.'
    },
    {
      icon: <Laptop className="h-8 w-8 text-turquoise" />,
      title: 'Consultoria TI',
      description: 'Assessoria profissional para otimizar sua infraestrutura de TI, garantir segurança e implementar as melhores soluções tecnológicas.'
    },
    {
      icon: <FileSearch className="h-8 w-8 text-turquoise" />,
      title: 'Desenvolvimento Personalizado',
      description: 'Criação de sistemas sob medida para atender às necessidades específicas do seu negócio, garantindo eficiência e produtividade.'
    }
  ];
  
  return (
    <section ref={sectionRef} id="services" className="bg-slate-50 py-[23px]">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-turquoise bg-turquoise/10 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="section-title">Soluções Completas para sua Empresa</h2>
          <p className="section-subtitle">
            Oferecemos sistemas robustos e intuitivos, consultoria especializada em TI e desenvolvimentos 
            personalizados para otimizar a rotina da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-subtle card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-turquoise/10 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-darkgray-700">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a 
            href="https://wa.me/5582988546023?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Infor%20SHIFT."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
