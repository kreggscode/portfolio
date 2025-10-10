import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hey 👋 I'm </span>
            <span className="gradient-text">Kreggscode</span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Full Stack Developer 💻',
                2000,
                'Blockchain Engineer ⛓️',
                2000,
                'Android Developer 📱',
                2000,
                'iOS Developer 🍎',
                2000,
                'Building The Future 🚀',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary"
              repeat={Infinity}
            />
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting innovative solutions across <span className="text-primary font-semibold">Web3</span>, 
            <span className="text-primary font-semibold"> Mobile</span>, and 
            <span className="text-primary font-semibold"> Cloud</span>. 
            From smart contracts to mobile apps, I build end-to-end solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-secondary transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500}>
            <FaArrowDown className="text-primary text-3xl animate-bounce cursor-pointer" />
          </Link>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  )
}

export default Hero
