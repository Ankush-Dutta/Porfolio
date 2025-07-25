import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Data Analytics Professional Certificate',
      provider: 'Google',
      date: '2024',
      validUntil: 'Lifetime',
      credentialId: 'https://coursera.org/verify/professional-cert/A6FL287PKCFN',
      level: 'Professional',
      skills: ['Data Cleaning', 'Data Visualization', 'Spreadsheet Analysis', 'SQL'],
      logo: '/assets/Google.png'
    },
    {
      name: 'Data Science Professional Certificate',
      provider: 'IBM',
      date: '2024',
      validUntil: 'Lifetime',
      credentialId: 'https://coursera.org/verify/professional-cert/T2C3HVX6G3K3',
      level: 'Professional',
      skills: ['Data Science', 'Python', 'Pandas', 'Jupyter Notebooks'],
      logo: '/assets/IBM.png'
    },
    {
      name: 'Machine Learning Specialization',
      provider: 'Stanford University & DeepLearning.AI',
      date: '2024',
      validUntil: 'Lifetime',
      credentialId: 'https://coursera.org/verify/specialization/PHN52KUVCWKQ',
      level: 'Specialization',
      skills: ['Supervised Learning', 'Logistic Regression', 'Neural Networks', 'Gradient Descent'],
      logo: '/assets/DeepLearning.png'
    },
    {
      name: 'TensorFlow Developer Certificate',
      provider: 'DeepLearning.AI',
      date: '2024',
      validUntil: '2026',
      credentialId: 'https://coursera.org/verify/professional-cert/5LS4TZ88WPTY',
      level: 'Professional',
      skills: ['TensorFlow', 'CNNs', 'RNNs', 'Model Deployment'],
      logo: '/assets/DeepLearning.png'
    },
    {
      name: 'Deep Learning Specialization',
      provider: 'DeepLearning.AI',
      date: '2024',
      validUntil: 'Lifetime',
      credentialId: 'https://coursera.org/verify/specialization/BV13XER24VG9',
      level: 'Specialization',
      skills: ['Neural Networks', 'Backpropagation', 'Hyperparameter Tuning', 'Sequence Models'],
      logo: '/assets/DeepLearning.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional':
        return 'from-purple-600 to-blue-600';
      case 'Associate':
        return 'from-green-600 to-teal-600';
      case 'Specialization':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-600 to-gray-800';
    }
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Certifications</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 bg-gray-700">
                    <img src={cert.logo} alt={cert.provider} className="w-full h-full object-contain" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </div>
                </div>
                <Award className="text-purple-400" size={24} />
              </div>

              {/* Certification Details */}
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.name}</h3>
              <p className="text-purple-300 font-medium mb-3">{cert.provider}</p>

              {/* Dates */}
              <div className="flex items-center text-gray-300 text-sm mb-4">
                <Calendar className="mr-2" size={16} />
                <span>Earned: {cert.date}</span>
                {cert.validUntil !== 'Lifetime' && (
                  <span className="ml-2">• Valid until: {cert.validUntil}</span>
                )}
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Skills Validated:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential Link */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 truncate max-w-[60%]">Credential</span>
                <a
                  href={cert.credentialId}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Certifications', value: certifications.length.toString() },
            { label: 'Professional Level', value: certifications.filter(c => c.level === 'Professional').length.toString() },
            { label: 'Active Certifications', value: certifications.filter(c => c.validUntil === 'Lifetime' || parseInt(c.validUntil) >= new Date().getFullYear()).length.toString() },
            { label: 'Top Institutions', value: '4' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center border border-white border-opacity-20"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
            <CheckCircle className="mx-auto text-white mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">
              Continuously Learning
            </h3>
            <p className="text-purple-100 mb-4">
              I'm always pursuing new certifications to stay current with industry trends and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
