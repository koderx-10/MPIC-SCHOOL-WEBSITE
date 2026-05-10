import React, { useState, useEffect } from 'react';

import {
  Menu,
  X,
  GraduationCap,
  LogIn,
  Award,
} from 'lucide-react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import Certificate from './CertificateSearch';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-blue-950/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-3'
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2"
            >

              <div className="bg-white p-1.5 rounded-full shadow-md">

                <GraduationCap className="h-5 w-5 text-blue-900" />

              </div>

              <span className="font-bold text-base md:text-xl tracking-tight text-white">

                MPIC

                <span className="hidden sm:inline text-amber-400">
                  {' '}| Chauri Chaura
                </span>

              </span>

            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-100 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.name}
                </a>

              ))}

              {/* Certificate */}
              <button
                onClick={() => setShowCertificate(true)}
                className="flex items-center gap-1.5 border border-blue-400 text-blue-200 hover:text-white hover:border-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >

                <Award className="h-4 w-4" />

                View Certificate

              </button>

              {/* Sign In */}
              <a
                href="/signin"
                className="flex items-center gap-1.5 bg-white text-blue-900 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md"
              >

                <LogIn className="h-4 w-4" />

                Sign In

              </a>

              {/* Apply */}
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md"
              >
                Admissions
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >

              {isOpen
                ? <X className="h-6 w-6" />
                : <Menu className="h-6 w-6" />
              }

            </button>

          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>

          {isOpen && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-blue-950 border-t border-blue-800 overflow-hidden"
            >

              <div className="px-4 pt-3 pb-5 space-y-1">

                {navLinks.map((link) => (

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-gray-100 hover:text-amber-400 hover:bg-white/5 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                  >
                    {link.name}
                  </a>

                ))}

                {/* Certificate Mobile */}
                <button
                  onClick={() => {
                    setShowCertificate(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-blue-200 hover:text-white hover:bg-white/5 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                >

                  <Award className="h-5 w-5" />

                  View Certificate

                </button>

                {/* Sign In Mobile */}
                <a
                  href="/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-gray-100 hover:text-amber-400 hover:bg-white/5 px-3 py-3 rounded-lg text-base font-medium transition-colors"
                >

                  <LogIn className="h-5 w-5" />

                  Sign In

                </a>

                {/* Apply Mobile */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white mt-3 px-4 py-3.5 rounded-xl font-bold text-base transition-colors"
                >
                  Apply Now
                </a>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </nav>

      {/* Certificate Modal */}
      <AnimatePresence>

        {showCertificate && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCertificate(false)}
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-auto max-h-[90vh]"
            >

              {/* Close Button */}
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-3 right-3 z-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-1.5 transition-colors"
              >

                <X className="h-5 w-5" />

              </button>

              {/* Certificate Component */}
              <Certificate />

            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;