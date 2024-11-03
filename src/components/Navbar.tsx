import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for menu

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const shouldAnimate = useOneTimeAnimation();

  const menuItems = [
    { title: 'Program', href: '#program' },
    { title: 'Fitur', href: '#features' },
    { title: 'Testimoni', href: '#testimonials' },
    { title: 'FAQ', href: '#faq' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    const navbarHeight = isScrolled ? 60 : 76;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = menuItems.map(item => item.href.slice(1));
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const navbarHeight = isScrolled ? 60 : 76;
          if (rect.top <= navbarHeight + 100 && rect.bottom >= navbarHeight) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={shouldAnimate ? { y: -100 } : false}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      } ${isScrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-xl font-bold text-primary-500 hover:text-primary-400 transition-colors"
            onClick={(e) => handleClick(e, '#')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DevCourse
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary-500'
                    : 'text-light hover:text-primary-500'
                }`}
              >
                {item.title}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Daftar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-light p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className={`md:hidden overflow-hidden fixed left-0 right-0 bg-dark/95 backdrop-blur-sm shadow-lg ${isOpen ? 'border-t border-gray-800' : ''}`}
          style={{
            top: isScrolled ? '60px' : '76px'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  whileTap={{ scale: 0.98 }}
                  className={`block mx-4 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-light hover:text-primary-500 hover:bg-gray-800/50'
                  }`}
                >
                  {item.title}
                </motion.a>
              ))}
              <div className="px-8 pt-2 pb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Daftar Sekarang
                </motion.button>
              </div>
              <div className="px-8 pt-2 pb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;