import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-secondary/80 py-8 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 <span className="text-primary font-bold">Kreggscode</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Made with <FaHeart className="inline text-red-500" /> and lots of ☕
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/kreggscode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/kreggscode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/kreggscode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            "From smart contracts to mobile apps, from frontend to backend—I build the future."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
