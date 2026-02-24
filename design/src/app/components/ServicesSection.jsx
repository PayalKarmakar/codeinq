import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ConsultationModal from './ConsultationModal';
import api from '@/services/api';
import { getIcon } from '@/utils/iconMap';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function ServicesSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        // Map API data to component format
        const mappedServices = data.map(service => ({
          ...service,
          icon: getIcon(service.icon), // Convert icon string to icon component
        }));
        setServices(mappedServices);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        // Fallback to empty array on error
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--neutral-700)]">Loading services...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto mt-2 mb-20 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '15+', label: 'Countries Served' },
              { number: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#66193e] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#66193e] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] border border-[var(--primary-200)] mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--secondary-600)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--primary-700)]">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">Comprehensive Solutions</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              For Modern Businesses
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions 
            that empower your business to thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--neutral-700)] mb-6">
            Need a custom solution? Let's build something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white font-medium shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            onClick={() => setModalOpen(true)}
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[var(--neutral-200)] overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 shadow-sm`}
        >
          <Icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={2} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary-700)] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--neutral-700)] leading-relaxed mb-6 group-hover:text-[var(--neutral-800)] transition-colors">
          {service.description}
        </p>

        {/* View More CTA - Hidden initially, revealed on hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <a
            href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`inline-flex items-center gap-2 font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-3 transition-all`}
          >
            View More
            <ArrowRight className={`w-4 h-4 ${service.iconColor} transition-transform group-hover:translate-x-1`} />
          </a>
        </motion.div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.gradient} opacity-10 rounded-bl-full`} />
      </div>

      {/* Hover Border Effect */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
      />
    </motion.div>
  );
}