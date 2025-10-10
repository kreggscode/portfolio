import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'kreggscode@gmail.com',
      link: 'mailto:kreggscode@gmail.com',
      color: '#D14836'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'kreggscode',
      link: 'https://linkedin.com/in/kreggscode',
      color: '#0077B5'
    },
    {
      icon: <FaTwitter />,
      title: 'Twitter',
      value: '@kreggscode',
      link: 'https://twitter.com/kreggscode',
      color: '#1DA1F2'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'kreggscode',
      link: 'https://github.com/kreggscode',
      color: '#181717'
    },
    {
      icon: <FaTelegram />,
      title: 'Telegram',
      value: '@kreggscode',
      link: 'https://t.me/kreggscode',
      color: '#2CA5E0'
    },
    {
      icon: <FaDiscord />,
      title: 'Discord',
      value: 'kreggscode',
      link: 'https://discord.gg/kreggscode',
      color: '#5865F2'
    }
  ]

  const opportunities = [
    '🚀 Blockchain & Web3 projects',
    '📱 Mobile app development (Android/iOS)',
    '🌐 Full-stack web applications',
    '🤝 Freelance opportunities',
    '💼 Full-time positions'
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">💬 Open to:</h3>
            <div className="space-y-4 mb-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-lg"
                >
                  <p className="text-gray-300">{opportunity}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 text-primary">Let's Build Together!</h4>
              <p className="text-gray-300 leading-relaxed">
                Whether you have a project in mind, need a developer for your team, 
                or just want to connect, I'm always open to discussing new opportunities 
                and innovative ideas. Let's create something extraordinary!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">📞 Connect With Me:</h3>
            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-xl text-center group cursor-pointer"
                >
                  <div 
                    className="text-4xl mb-3 flex justify-center transition-all group-hover:scale-110"
                    style={{ color: method.color }}
                  >
                    {method.icon}
                  </div>
                  <h4 className="font-bold mb-1">{method.title}</h4>
                  <p className="text-sm text-gray-400 break-all">{method.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 glass-effect p-6 rounded-2xl text-center"
            >
              <p className="text-gray-300 mb-4">
                Prefer email? Drop me a message at:
              </p>
              <a 
                href="mailto:kreggscode@gmail.com"
                className="text-primary font-bold text-xl hover:underline"
              >
                kreggscode@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-primary mb-2">
            "Code is not just about solving problems—it's about creating possibilities."
          </p>
          <p className="text-gray-400">Let's create something amazing together! 🚀</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
