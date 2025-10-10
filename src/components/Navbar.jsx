import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold gradient-text font-mono">
            {'<Kreggscode />'}
          </h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-primary transition-colors cursor-pointer font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com/kreggscode" target="_blank" rel="noopener noreferrer" 
             className="text-gray-300 hover:text-primary transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/kreggscode" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-primary transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/kreggscode" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-primary transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
