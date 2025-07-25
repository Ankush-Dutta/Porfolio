import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science with Specialization in Artificial Intelligence and Machine Learning',
      institution: 'University of Engineering and Management, Kolkata',
      location: 'Kolkata, India',
      period: '2022 - 2026',
      gpa: '3.8/4.0',
      description: 'Focused on machine learning, database systems, and software architecture. President of Robotics club, Secretary at IEEE student branch.',
      achievements: ['Merit List Holder for 2 consecutive years', 'Vice-Chancellors award for overall contribution']
    },
    {
      degree: 'All India Senior Secondary Certificate Examination',
      institution: 'Delhi Public School, Ruby Park',
      location: 'Kolkata, India',
      period: '2022',
      gpa: '3.38/4.0',
      description: 'Physics, Chemistry, Mathematics, English, Physical Education.',
      achievements: ['Won LAN valorant tournament']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous pursuit of knowledge
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 hidden md:block"></div>

                {/* Education Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="md:ml-16 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20 shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="text-purple-400 mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      <h4 className="text-xl text-purple-300 mb-2">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2" size={16} />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Award className="mr-2" size={16} />
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">
                      Key Achievements
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <span
                          key={achievementIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Degrees Earned', value: '2' },
            { label: 'Years of Study', value: '4' },
            { label: 'Overall GPA', value: '3.59' },
            { label: 'Academic Awards', value: '5' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center border border-white border-opacity-20"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
