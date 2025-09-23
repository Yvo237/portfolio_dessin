// src/components/SiteNavbar.tsx
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'Galerie', href: '#portfolio' },
    { name: 'Processus', href: '#process' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex items-center space-x-2">
            <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" strokeWidth="2">
                <path d="M3 21l3.5-.9 11-11a2.5 2.5 0 10-3.5-3.5l-11 11L3 21z" stroke="#111111" />
                <path d="M12.5 5.5l6 6" stroke="#2563eb" />
              </svg>
            </span>
            <span className="text-xl font-bold text-blue-500">Atelier Dessin</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-blue-400">
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-3 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default SiteNavbar


