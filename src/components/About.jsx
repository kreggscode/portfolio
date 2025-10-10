import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaPalette, FaHeart } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Full Stack Developer',
      description: 'Building scalable web applications with modern frameworks'
    },
    {
      icon: <FaRocket />,
      title: 'Blockchain Engineer',
      description: 'Developing smart contracts and DApps on Ethereum & Solana'
    },
    {
      icon: <FaPalette />,
      title: 'Mobile Developer',
      description: 'Creating native Android & iOS apps with beautiful UIs'
    },
    {
      icon: <FaHeart />,
      title: 'Tech Enthusiast',
      description: 'Exploring AI, Web3, and cutting-edge technologies'
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate developer with expertise spanning across <span className="text-primary font-semibold">Full Stack Development</span>, 
                <span className="text-primary font-semibold"> Blockchain Technology</span>, and 
                <span className="text-primary font-semibold"> Mobile Development</span>.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                From smart contracts to mobile apps, from frontend to backend - I build end-to-end solutions that make a difference. 
                My journey started with Java, but I've fully embraced modern technologies like Kotlin, Swift, Solidity, and TypeScript.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I love crafting pixel-perfect, performant applications that users adore. Whether it's a DeFi protocol, 
                a mobile app, or a full-stack web application, I bring the same level of dedication and expertise to every project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-4xl text-primary mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Developer Philosophy</h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-3xl mb-2">🌟</p>
              <p className="text-sm text-gray-300">Quality over quantity</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🚀</p>
              <p className="text-sm text-gray-300">Innovation over imitation</p>
            </div>
            <div>
              <p className="text-3xl mb-2">🤝</p>
              <p className="text-sm text-gray-300">Collaboration over competition</p>
            </div>
            <div>
              <p className="text-3xl mb-2">📚</p>
              <p className="text-sm text-gray-300">Learning never stops</p>
            </div>
            <div>
              <p className="text-3xl mb-2">💡</p>
              <p className="text-sm text-gray-300">User experience is everything</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
