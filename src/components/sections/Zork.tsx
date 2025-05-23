
import React from 'react';
import { Button } from '@/components/ui/button';

const Zork = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5582988546023?text=Quero%20saber%20mais%20da%20zork', '_blank');
  };

  const features = [
    'Centralização de canais: Reúne mensagens de diferentes plataformas em uma única interface, facilitando o gerenciamento e a resposta rápida aos clientes.',
    'Integrações com redes sociais e mensageiros: Suporta integração com WhatsApp, Instagram, Facebook, Telegram, SMS e e-mail, permitindo uma comunicação abrangente com os clientes.',
    <span key="highlight" className="font-bold text-turquoise">O atendimento pode ser feito de duas maneiras: via ChatBot e Inteligência Artificial!</span>,
    'Agilidade e segurança: Oferece ferramentas que garantem respostas rápidas e seguras, com recursos de auditoria para monitoramento das interações.',
    'Aumento de produtividade: Automatiza processos de atendimento, reduzindo o tempo de resposta e melhorando a eficiência das equipes.',
    'Foco no sucesso do cliente: Visa proporcionar uma experiência de atendimento satisfatória, com respostas ágeis e dedicadas.'
  ];

  return (
    <section className="py-16 bg-darkgray-800">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Header with logo and description */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-12">
          {/* Left column - Logo */}
          <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
            <a href="https://zork.chat/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="https://framerusercontent.com/images/vKrcotagzNoOBVXHyIJYohfvGM.png?scale-down-to=512" 
                alt="Zork Logo" 
                className="max-w-full h-auto mx-auto lg:mx-0"
                style={{ maxHeight: '200px' }}
              />
            </a>
          </div>
          
          {/* Right column - Description */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">
              Zork - Plataforma de Atendimento ao Cliente
            </h2>
            <p className="text-lg text-gray-300 mb-6 text-center lg:text-left">
              Zork é uma plataforma brasileira de atendimento ao cliente que centraliza a comunicação de empresas com seus clientes em um único lugar. Ele integra diversos canais de mensagens, como WhatsApp Business, Instagram Direct, Facebook Messenger, Telegram, SMS e e-mail, permitindo que as equipes de atendimento gerenciem todas as interações de forma unificada e eficiente.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Principais funcionalidades da Zork
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-darkgray-700 rounded-lg p-6 border border-darkgray-600">
                <p className="text-gray-300 leading-relaxed">
                  {index === 2 ? feature : `• ${feature}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom description and CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            A Zork é ideal para empresas que buscam otimizar o atendimento ao cliente, centralizando as comunicações e melhorando a eficiência operacional.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg gap-3 transition-all duration-300 transform hover:scale-105"
          >
            <img 
              src="/lovable-uploads/097a7f34-6632-412c-b133-978b260d795b.png" 
              alt="WhatsApp" 
              className="w-6 h-6"
            />
            Para saber mais clique aqui
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Zork;
