import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { getIcon } from '@/utils/iconMap';

export default function SolutionsSection() {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const data = await api.getSolutions();
        // Map API data: convert icon strings in outcomes to icon components
        const mappedSolutions = data.map(solution => ({
          ...solution,
          outcomes: solution.outcomes?.map(outcome => ({
            ...outcome,
            icon: getIcon(outcome.icon),
          })) || [],
        }));
        setSolutions(mappedSolutions);
      } catch (error) {
        console.error('Failed to fetch solutions:', error);
        setSolutions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  if (loading) {
    return (
      <section id="solutions" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--neutral-700)]">Loading solutions...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="solutions" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] border border-[var(--primary-200)] mb-6"
          >
            <TrendingUp className="w-4 h-4 text-[var(--primary-600)]" />
            <span className="text-sm font-medium text-[var(--primary-700)]">Business Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">Outcomes That</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              Drive Business Growth
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
            We build solutions focused on measurable results—not just features. 
            See how we've helped businesses like yours achieve breakthrough success.
          </p>
        </motion.div>

        {/* Solutions Grid - Alternating Layout */}
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} index={index} isReversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ 
  solution, 
  index, 
  isReversed 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Content */}
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] mb-6">
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              {index + 1}
            </span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)] mb-4">
            {solution.title}
          </h3>
          
          <p className="text-lg text-[var(--neutral-700)] mb-8 leading-relaxed">
            {solution.description}
          </p>

          {/* Key Outcomes */}
          <div className="space-y-4 mb-8">
            {solution.outcomes.map((outcome, i) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--primary-50)] to-[var(--secondary-50)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--primary-600)]" />
                  </div>
                  <span className="text-[var(--neutral-700)] font-medium">{outcome.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-8">
            {solution.features.map((feature, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="px-4 py-2 rounded-full bg-[var(--neutral-100)] text-sm text-[var(--neutral-700)] font-medium"
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={`#${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 font-medium text-[var(--primary-600)] hover:text-[var(--primary-700)] transition-colors group"
          >
            Learn more about {solution.title}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--neutral-200)]">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-auto"
          />
          {/* Brand Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-600)]/15 to-[var(--secondary-600)]/15 mix-blend-overlay" />
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-br from-[var(--primary-200)] to-[var(--secondary-200)] blur-3xl opacity-30 ${
            isReversed ? '-right-20 -bottom-20' : '-left-20 -top-20'
          }`}
        />
      </motion.div>
    </motion.div>
  );
}
