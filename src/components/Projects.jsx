import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Voltaire Insights',
      description: 'A stunning Android app showcasing 1000+ Voltaire quotes with beautiful Jetpack Compose UI',
      image: 'https://raw.githubusercontent.com/kreggscode/Voltaire-Insights/main/screenshots/Screenshot_20251010_163009.png',
      tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Material Design 3'],
      github: 'https://github.com/kreggscode/Voltaire-Insights',
      live: null,
      features: [
        '1000+ quotes in 20+ categories',
        'French translations & TTS',
        'iOS-inspired glassmorphism design',
        'Offline-first architecture'
      ]
    },
    {
      title: 'DeFi Dashboard',
      description: 'Web3 analytics platform for tracking DeFi protocols and portfolio management',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      tags: ['Solidity', 'React', 'Web3.js', 'Ethereum'],
      github: null,
      live: null,
      features: [
        'Real-time DeFi analytics',
        'Multi-chain support',
        'Portfolio tracking',
        'Smart contract integration'
      ],
      comingSoon: true
    },
    {
      title: 'Crypto Wallet',
      description: 'Secure mobile wallet for managing cryptocurrencies and NFTs',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800',
      tags: ['React Native', 'Blockchain', 'Web3', 'TypeScript'],
      github: null,
      live: null,
      features: [
        'Multi-currency support',
        'NFT gallery',
        'Biometric security',
        'DApp browser'
      ],
      comingSoon: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with modern UI and seamless checkout experience',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: null,
      live: null,
      features: [
        'Product management',
        'Payment integration',
        'Admin dashboard',
        'Real-time inventory'
      ],
      comingSoon: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions across mobile, blockchain, and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group relative"
            >
              {project.comingSoon && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-bold">
                  Coming Soon
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors ml-auto"
                    >
                      <FaStar /> Star
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/kreggscode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-secondary transition-all"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
