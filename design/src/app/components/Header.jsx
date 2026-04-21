import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import logo from '@/assets/e067c019f0a49821135e11a5c1935858a9fcfec6.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'services', 'solutions', 'industries', 'process', 'case-studies', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Industries', id: 'industries' },
    { label: 'Process', id: 'process' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-md border-b border-[var(--neutral-200)]' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center cursor-pointer relative z-10 py-4 mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={logo} 
              alt="CodeInQ - Where Code Meets Intelligence" 
              className={`transition-all duration-300 ${scrolled ? 'h-18' : 'h-20'}`}
            />
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-[var(--primary-700)]'
                    : scrolled 
                      ? 'text-[var(--neutral-700)] hover:text-[var(--primary-600)]' 
                      : 'text-[var(--neutral-800)] hover:text-[var(--primary-600)]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--secondary-600)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-700)] text-white font-medium hover:shadow-lg transition-all"
            >
              Get Started
            </motion.button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--neutral-100)] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--neutral-700)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--neutral-700)]" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
      >
        <nav className="flex flex-col p-6 gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-[var(--primary-50)] text-[var(--primary-700)] border-l-4 border-[var(--secondary-600)]'
                  : 'text-[var(--neutral-700)] hover:bg-[var(--neutral-50)]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-700)] text-white font-medium">
            Get Started
          </button>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
}