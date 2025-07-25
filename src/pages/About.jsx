import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Passionate developer with a love for creating innovative solutions and beautiful user experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl">
                <img
                  src="./assets/1.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              My Journey
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
            I'm a dedicated machine learning developer with over 2 years of hands-on experience crafting 
            impactful digital solutions. My journey began with a deep curiosity about how technology works, 
            which naturally led me to the world of programming.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in building modern web applications using the latest technologies, with a strong 
            focus on both functionality and user experience. I believe that exceptional software combines 
            clean code with thoughtful design to create memorable experiences.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Outside of development, I'm constantly exploring new tech trends, contributing to open-source 
            projects, and engaging with the developer community to share knowledge and grow together.
          </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: Code,
              title: 'Clean Code',
              description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
            },
            {
              icon: Heart,
              title: 'User-Centric',
              description: 'Putting users first in every design decision and development choice.'
            },
            {
              icon: Coffee,
              title: 'Continuous Learning',
              description: 'Always staying updated with the latest technologies and best practices.'
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              description: 'Finding creative solutions to complex problems and pushing boundaries.'
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center border border-white border-opacity-20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;