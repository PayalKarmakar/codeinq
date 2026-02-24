import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { getIcon } from '@/utils/iconMap';

export default function IndustriesSection() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const data = await api.getIndustries();
        const mappedIndustries = data.map(industry => ({
          ...industry,
          icon: getIcon(industry.icon),
        }));
        setIndustries(mappedIndustries);
      } catch (error) {
        console.error('Failed to fetch industries:', error);
        setIndustries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  if (loading) {
    return (
      <section id="industries" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--neutral-700)]">Loading industries...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="industries" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
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
            <TrendingUp className="w-4 h-4 text-[var(--primary-600)]" />
            <span className="text-sm font-medium text-[var(--primary-700)]">Industries We Serve</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">Industry-Specific</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
            Deep domain knowledge and proven track record across multiple industries. 
            We understand your unique challenges and compliance requirements.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ 
  industry, 
  index 
}) {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--neutral-200)] shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon Section */}
      <div className="p-8 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${industry.bgGradient} flex items-center justify-center mb-4 shadow-sm`}
        >
          <Icon className={`w-7 h-7 text-[var(--primary-600)]`} strokeWidth={2} />
        </motion.div>

        <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-2 group-hover:text-[var(--primary-700)] transition-colors">
          {industry.title}
        </h3>

        <p className="text-[var(--neutral-700)] mb-4 leading-relaxed">
          {industry.description}
        </p>

        <div className="text-sm text-[var(--neutral-600)] font-medium">
          {industry.highlight}
        </div>
      </div>

      {/* Hidden Image - Revealed on Hover */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: 'auto' }}
        className="relative overflow-hidden opacity-0 h-0 group-hover:opacity-100 group-hover:h-48 transition-all duration-300"
      >
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-60 mix-blend-overlay`} />
        
        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-white text-[var(--primary-700)] font-medium shadow-lg inline-flex items-center gap-2"
          >
            View Solutions
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Corner Gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${industry.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />

      {/* Border Glow on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
        style={{
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '2px'
        }}
      />
    </motion.div>
  );
}
