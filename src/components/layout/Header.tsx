import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'Início',
    href: '#home'
  }, {
    name: 'Sobre',
    href: '#about'
  }, {
    name: 'Serviços',
    href: '#services'
  }, {
    name: 'Contato',
    href: '#contact'
  }];
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate there first
    if (!isHomePage) {
      navigate('/', {
        state: {
          scrollTo: href
        }
      });
    } else {
      // Handle "Início" link specially to scroll to top
      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={cn('fixed w-full z-50 transition-all duration-300 ease-in-out py-4', isScrolled ? 'bg-darkgray-800/95 backdrop-blur-sm shadow-subtle' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="block">
              <img src="/lovable-uploads/19635b6a-83e2-4dcc-9bb0-89e19d03b96b.png" alt="Infor SHIFT Logo" className="h-32 w-auto" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2 items-center">
            {navLinks.map(link => <a key={link.name} href={link.href} className="nav-link text-gray-300 hover:text-turquoise" onClick={e => scrollToSection(e, link.href)}>
                {link.name}
              </a>)}
            <a href="https://wa.me/5582988546023?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Infor%20SHIFT." target="_blank" rel="noopener noreferrer" className="ml-4 btn-primary">
              Fale Conosco
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-turquoise hover:bg-darkgray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-turquoise" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="sr-only">Abrir menu</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden transition-all duration-300 ease-bounce-ease overflow-hidden', isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
        <div className="px-4 py-3 space-y-1 bg-darkgray-800/95 backdrop-blur-sm border-t border-darkgray-700">
          {navLinks.map(link => <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-turquoise hover:bg-darkgray-700" onClick={e => scrollToSection(e, link.href)}>
              {link.name}
            </a>)}
          <div className="pt-2">
            <a href="https://wa.me/5582988546023?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Infor%20SHIFT." target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-3 font-medium rounded-md text-white bg-turquoise hover:bg-turquoise-600">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;