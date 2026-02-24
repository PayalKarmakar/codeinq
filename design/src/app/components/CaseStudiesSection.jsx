import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { getIcon } from '@/utils/iconMap';

export default function CaseStudiesSection() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await api.getCaseStudies();
        const mappedCaseStudies = data.map(study => ({
          ...study,
          metrics: study.metrics?.map(metric => ({
            ...metric,
            icon: getIcon(metric.icon),
          })) || [],
        }));
        setCaseStudies(mappedCaseStudies);
      } catch (error) {
        console.error('Failed to fetch case studies:', error);
        setCaseStudies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) {
    return (
      <section id="case-studies" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--neutral-700)]">Loading case studies...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="case-studies" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] border border-[var(--primary-200)] mb-6"
          >
            <Award className="w-4 h-4 text-[var(--primary-600)]" />
            <span className="text-sm font-medium text-[var(--primary-700)]">Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">Proven Results</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
            See how we've helped businesses transform their operations, scale rapidly, 
            and achieve measurable success through innovative software solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ 
  study, 
  index 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--neutral-200)]"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60 mix-blend-overlay`} />
        
        {/* Industry Badge */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-[var(--neutral-900)]">
          {study.industry}
        </div>

        {/* Hover Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-white text-[var(--primary-700)] font-medium shadow-lg inline-flex items-center gap-2"
          >
            View Case Study
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)] mb-3">
          <span className="font-medium">{study.client}</span>
          <span>•</span>
          <span>{study.industry}</span>
        </div>

        <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary-700)] transition-colors">
          {study.title}
        </h3>

        <p className="text-[var(--neutral-700)] leading-relaxed mb-6">
          {study.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[var(--neutral-200)]">
          {study.metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[var(--primary-600)]" />
                  <span className="text-xs text-[var(--neutral-600)]">{metric.label}</span>
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[var(--neutral-100)] text-xs text-[var(--neutral-700)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${study.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
    </motion.div>
  );
}
