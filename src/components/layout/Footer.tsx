
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return <footer className="bg-darkgray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/a48b6946-07b3-49bd-b280-bc396f94a40e.png" 
                  alt="Infor SHIFT Logo" 
                  className="h-12 w-auto" 
                />
              </div>
              <p className="mt-2 text-slate-300">
                Soluções inteligentes para transformar a forma como as empresas lidam com seus desafios em TI e gestão.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/infor.shift/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-turquoise hover:bg-turquoise-600 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">Início</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">Sobre Nós</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-200">Serviços</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Rua Floracy da Silva Barros, 141, APTO102<br />Arapiraca - AL</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-turquoise flex-shrink-0" />
                <a href="tel:+5582988546023" className="text-slate-300 hover:text-white transition-colors duration-200">
                  (82) 98854-6023
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-turquoise flex-shrink-0" />
                <a href="mailto:suporteinforshift@gmail.com" className="text-slate-300 hover:text-white transition-colors duration-200">
                  suporteinforshift@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-darkgray-600 text-slate-400 text-sm text-center">
          <p>© {new Date().getFullYear()} Infor SHIFT - Soluções Inteligentes. Todos os direitos reservados.</p>
          <p className="mt-1">
            <a href="https://www.inforshift.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-turquoise">
              www.inforshift.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>;
};

export default Footer;
