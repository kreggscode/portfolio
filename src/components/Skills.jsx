import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaFigma,
  FaAndroid, FaApple
} from 'react-icons/fa'
import { 
  SiKotlin, SiSwift, SiSolidity, SiEthereum, SiTypescript, SiJavascript,
  SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase, SiFlutter, SiTailwindcss
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: '📱 Mobile Development',
      skills: [
        { name: 'Android', icon: <FaAndroid />, color: '#3DDC84' },
        { name: 'iOS', icon: <FaApple />, color: '#000000' },
        { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
        { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
        { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
      ]
    },
    {
      title: '⛓️ Blockchain & Web3',
      skills: [
        { name: 'Solidity', icon: <SiSolidity />, color: '#363636' },
        { name: 'Ethereum', icon: <SiEthereum />, color: '#3C3C3D' },
        { name: 'Web3.js', icon: <SiEthereum />, color: '#F16822' },
        { name: 'Smart Contracts', icon: <SiSolidity />, color: '#00FF00' },
      ]
    },
    {
      title: '🌐 Full Stack Development',
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#007ACC' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ]
    },
    {
      title: '🗄️ Databases & Cloud',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#316192' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      ]
    },
    {
      title: '🎨 Design & Tools',
      skills: [
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning mobile, blockchain, and full-stack development
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="glass-effect p-6 rounded-xl text-center cursor-pointer group"
                  >
                    <div 
                      className="text-5xl mb-3 flex justify-center transition-all group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <p className="font-semibold text-sm">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl inline-block">
            <p className="text-xl text-gray-300 mb-4">
              <span className="text-primary font-bold">50+</span> Technologies Mastered
            </p>
            <p className="text-gray-400">
              Always learning, always growing 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
