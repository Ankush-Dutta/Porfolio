import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Target, Users, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
  {
    icon: Trophy,
    title: "Vice Chancellor’s Award 2024",
    organization: "University of Engineering and Management, Kolkata",
    description: "Recognized for exceptional overall academic and extracurricular performance.",
    date: "2024",
    category: "Academic Excellence",
    impact: "Top university-wide recognition"
  },
  {
    icon: Award,
    title: "8th Rank in Department",
    organization: "Department of CSE (AI & ML), UEM Kolkata",
    description: "Achieved 8th position in academic performance for the 2023-2024 session.",
    date: "2024",
    category: "Academic Ranking",
    impact: "Top 10 in department"
  },
  {
    icon: Award,
    title: "12th Rank in Department",
    organization: "Department of CSE (AI & ML), UEM Kolkata",
    description: "Secured 12th position for academic session 2022-2023, reflecting consistent performance.",
    date: "2023",
    category: "Academic Ranking",
    impact: "Top 15 in department"
  },
  {
    icon: Star,
    title: "AQI-Cast Publication (ICAIET 2025)",
    organization: "International Conference on AI & Emerging Tech (ICAIET)",
    description: "Published deep learning-based AQI prediction model leveraging hybrid RNN architectures.",
    date: "2025",
    category: "Research",
    impact: "AI-powered real-world environmental forecasting"
  },
  {
    icon: Star,
    title: "YOLOv9 Forestry Paper (CICBA 2025)",
    organization: "Conference on Intelligent Computing (CICBA)",
    description: "Proposed innovative plant detection system using YOLOv9 for forestry applications.",
    date: "2025",
    category: "Research",
    impact: "Enhanced biodiversity monitoring"
  },
  {
    icon: Users,
    title: "President – Robotics Club",
    organization: "UEM Kolkata",
    description: "Leading innovation and collaboration within the campus robotics community.",
    date: "2025",
    category: "Leadership",
    impact: "Community-led tech development"
  }
];

  const stats = [
  { label: "Awards & Honors", value: "3+", icon: Trophy },
  { label: "Research Publications", value: "2", icon: Star },
  { label: "Leadership Roles", value: "3", icon: Users },
  { label: "Academic Top Rankings", value: "2", icon: Award }
];


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

  const getCategoryColor = (category) => {
    const colors = {
      Innovation: 'from-purple-600 to-pink-600',
      Performance: 'from-blue-600 to-cyan-600',
      Community: 'from-green-600 to-teal-600',
      Leadership: 'from-orange-600 to-red-600',
      Mentoring: 'from-indigo-600 to-purple-600',
      Competition: 'from-yellow-600 to-orange-600'
    };
    return colors[category] || 'from-gray-600 to-gray-800';
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Achievements</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones and recognitions that highlight my professional journey and impact
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center border border-white border-opacity-20"
            >
              <stat.icon className="mx-auto text-purple-400 mb-3" size={32} />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20 shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(achievement.category)} flex items-center justify-center mr-4`}>
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(achievement.category)} mb-2`}>
                      {achievement.category}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-purple-300 font-medium mb-4">
                {achievement.organization}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {achievement.description}
              </p>

              {/* Impact */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Impact:
                </div>
                <div className="text-sm font-semibold text-purple-400">
                  {achievement.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Achievement Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
                      <div className="text-lg font-semibold text-white mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-purple-300 mb-2">
                        {achievement.organization}
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
            <Trophy className="mx-auto text-white mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-purple-100 text-lg leading-relaxed max-w-2xl mx-auto">
              These achievements represent my commitment to excellence and continuous growth. 
              I'm always looking for new opportunities to create impact and push boundaries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;