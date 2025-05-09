
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

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

  const handleWhatsAppClick = () => {
    // Open WhatsApp with predefined message
    window.open('https://wa.me/5582988546023?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Infor%20SHIFT.', '_blank');
    
    // Show toast notification
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será conectado com nossa equipe."
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-turquoise" />,
      title: 'Telefone',
      details: '(82) 98854-6023',
      action: 'tel:+5582988546023',
      actionText: 'Contato via Telefone'
    },
    {
      icon: <Mail className="h-6 w-6 text-turquoise" />,
      title: 'Email',
      details: 'suporteinforshift@gmail.com',
      action: 'mailto:suporteinforshift@gmail.com',
      actionText: 'Contato via Email'
    },
    {
      icon: <Instagram className="h-6 w-6 text-turquoise" />,
      title: 'Instagram',
      details: '@infor.shift',
      action: 'https://www.instagram.com/infor.shift/',
      actionText: 'Siga-nos no Instagram'
    },
    {
      icon: <MapPin className="h-6 w-6 text-turquoise" />,
      title: 'Endereço',
      details: 'Rua Floracy da Silva Barros, 141, Arapiraca - AL',
      action: 'https://maps.google.com',
      actionText: 'Ver no Mapa'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-darkgray-900 py-16">
      <div className="section-container px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-turquoise bg-turquoise/10 rounded-full">
            Contato
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Entre em Contato Conosco</h2>
          <p className="section-subtitle text-gray-300">
            Estamos prontos para atender às suas necessidades. Entre em contato 
            através de um dos nossos canais de atendimento ou nos envie uma mensagem pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* WhatsApp Contact Card */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full p-8 rounded-xl shadow-lg bg-darkgray-700 border border-darkgray-600">
              <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
              <p className="text-gray-300 mb-8">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp com nossa equipe de atendimento.
              </p>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full py-6 text-lg gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                Conversar no WhatsApp
              </Button>
              
              <div className="mt-8 text-center text-gray-400 text-sm">
                Horário de atendimento: Segunda a Sexta, das 9h às 18h
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="order-1 lg:order-2" 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start hover:bg-darkgray-800 p-4 rounded-lg transition-colors duration-200">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-darkgray-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                    <p className="mt-1 text-gray-300">{item.details}</p>
                    <a 
                      href={item.action} 
                      className="mt-2 inline-block text-sm font-medium text-turquoise hover:text-turquoise-400 hover:underline"
                    >
                      {item.actionText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-darkgray-600 h-64 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2960758544593!2d-43.19234492359807!3d-22.903458836872207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bff%3A0x99447fc2399718e9!2sAv.%20Pres.%20Vargas%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1718121266831!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Mapa de localização"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
