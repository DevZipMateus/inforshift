
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButton from '@/components/ui/FloatingButton';
import { Button } from '@/components/ui/button';

const PartnerPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <Header />
      <main>
        <section className="pt-24 pb-16 bg-gradient-to-b from-turquoise/10 to-slate-50/95">
          <div className="section-container">
            <div className="flex flex-col items-center text-center mb-10">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Nossa Parceira: <span className="text-turquoise">Premium Contábil</span>
              </motion.h1>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img 
                  src="/lovable-uploads/233495a8-71cb-4a7f-b2fc-bee5e67e8c4a.png"
                  alt="Premium Contábil" 
                  className="max-w-full h-auto max-h-60 object-contain mx-auto"
                />
              </motion.div>
            </div>
            
            <motion.div
              className="bg-white rounded-xl shadow-elevation p-6 md:p-8 max-w-4xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="text-lg mb-6">
                Na Infor SHIFT Soluções Inteligentes, acreditamos que o sucesso empresarial é construído por meio de parcerias sólidas e confiáveis. É com orgulho que apresentamos a Premium Contábil como nossa aliada estratégica na área contábil.
              </p>
              
              <p className="text-lg mb-6">
                Localizada em Arapiraca – AL, a Premium Contábil oferece serviços contábeis e paralegais realizados por profissionais treinados e qualificados para fornecer informações precisas, ágeis e confiáveis.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-turquoise">Com uma abordagem moderna e centrada no cliente, a Premium Contábil se destaca por:</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                <li>Atendimento personalizado e eficiente, adaptando-se às necessidades específicas de cada cliente.</li>
                <li>Atualização constante, mantendo-se à frente das mudanças fiscais e contábeis para oferecer as melhores soluções.</li>
                <li>Compromisso com a excelência, buscando sempre superar as expectativas e contribuir para o crescimento sustentável dos negócios.</li>
              </ul>
              
              <p className="text-lg mb-6">
                A parceria entre a Infor SHIFT e a Premium Contábil visa proporcionar aos nossos clientes uma experiência integrada, unindo tecnologia e expertise contábil para otimizar processos e impulsionar resultados.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-6 bg-slate-100 rounded-xl p-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Contato:</h3>
                <p className="text-slate-700">Premium Contábil</p>
                <p className="text-slate-700">Fone: +55 82 99622-8340</p>
              </div>
              
              <Button
                asChild
                className="bg-turquoise hover:bg-turquoise-600 text-white"
              >
                <a 
                  href="https://www.instagram.com/premiumcontabil?igsh=bzA1amQ0aHZ3N2dq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Siga no Instagram
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <FloatingButton />
      <Footer />
    </motion.div>
  );
};

export default PartnerPage;
