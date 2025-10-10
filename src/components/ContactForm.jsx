import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // Using Web3Forms - Free service, no signup needed for basic use
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // You'll need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          to_email: 'kreg9da@gmail.com'
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' })
          setStatus('')
        }, 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass-effect p-8 rounded-2xl"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaPaperPlane className="text-primary" />
        Send Me a Message
      </h3>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6 flex items-center gap-2"
        >
          <FaCheckCircle />
          <span>Message sent successfully! I'll get back to you soon! 🎉</span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-6 flex items-center gap-2"
        >
          <FaExclamationTriangle />
          <span>Oops! Something went wrong. Please try again or email me directly.</span>
        </motion.div>
      )}

      {status === 'sending' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-500/20 border border-blue-500 text-blue-400 p-4 rounded-lg mb-6 flex items-center gap-2"
        >
          <FaSpinner className="animate-spin" />
          <span>Sending your message...</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
            placeholder="Project Inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 bg-secondary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
          whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
          className={`w-full font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group ${
            status === 'sending' 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary/80 text-secondary'
          }`}
        >
          {status === 'sending' ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </>
          )}
        </motion.button>
      </form>

      <p className="text-sm text-gray-400 mt-4 text-center">
        Your message will be sent directly to my inbox 📧
      </p>
    </motion.div>
  )
}

export default ContactForm
