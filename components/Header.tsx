import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#introduction', label: 'Giới thiệu' },
    { href: '#classes', label: 'Giai cấp' },
    { href: '#alliance', label: 'Liên minh' },
    { href: '#puzzle', label: 'Thống nhất' },
    { href: '#timeline', label: 'Dòng thời gian' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-navy/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className={`text-xl font-bold font-serif transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
          Con đường của Việt Nam
        </a>
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-sans font-bold uppercase tracking-wider transition-colors ${
                  isScrolled ? 'text-beige hover:text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;