import { motion, useScroll, useTransform } from 'motion/react';
import { Rocket } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import api from '@/services/api';
import { getIcon } from '@/utils/iconMap';

export default function ProcessSection() {
  const containerRef = useRef(null);
  const [processSteps, setProcessSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // All hooks must be called unconditionally - before any early returns
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  useEffect(() => {
    const fetchProcessSteps = async () => {
      try {
        const data = await api.getProcessSteps();
        const mappedSteps = data.map(step => ({
          ...step,
          icon: getIcon(step.icon),
        }));
        setProcessSteps(mappedSteps);
      } catch (error) {
        console.error('Failed to fetch process steps:', error);
        setProcessSteps([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProcessSteps();
  }, []);

  if (loading) {
    return (
      <section id="process" ref={containerRef} className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3] relative overflow-hidden" style={{ position: 'relative', borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--neutral-700)]">Loading process steps...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="process" ref={containerRef} className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3] relative overflow-hidden" style={{ position: 'relative', borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            opacity: backgroundOpacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[var(--primary-200)] to-[var(--secondary-200)] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <Rocket className="w-4 h-4 text-[var(--primary-600)]" />
            <span className="text-sm font-medium text-[var(--primary-700)]">Our Process</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">From Idea to</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              Launch & Beyond
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
            Our proven 6-step process ensures transparency, quality, and on-time delivery 
            for every project—from MVP to enterprise solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--neutral-200)] -translate-x-1/2" />
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-600)] via-[var(--secondary-600)] to-[var(--accent-600)] -translate-x-1/2 origin-top"
          />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index} 
                step={step} 
                index={index} 
                isEven={index % 2 === 0}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ 
  step, 
  index, 
  isEven,
  scrollProgress 
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* Content - Left or Right based on index */}
      <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`inline-block mb-4 ${isEven ? 'lg:float-right lg:ml-4' : 'lg:float-left lg:mr-4'}`}>
            <span className="text-6xl font-bold bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent opacity-50">
              {step.number}
            </span>
          </div>
          
          <h3 className="text-3xl font-bold text-[var(--neutral-900)] mb-2 clear-both">
            {step.title}
          </h3>
          
          <p className="text-xl text-[var(--primary-600)] font-medium mb-4">
            {step.subtitle}
          </p>
          
          <p className="text-[var(--neutral-700)] leading-relaxed mb-6">
            {step.description}
          </p>

          <div className={`flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'} gap-6 mb-6`}>
            <div>
              <div className="text-sm text-[var(--neutral-600)] mb-1">Duration</div>
              <div className="font-semibold text-[var(--neutral-900)]">{step.duration}</div>
            </div>
          </div>

          <div className={isEven ? 'lg:text-right' : 'lg:text-left'}>
            <div className="text-sm text-[var(--neutral-600)] mb-2">Key Deliverables:</div>
            <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
              {step.deliverables.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[var(--neutral-100)] text-sm text-[var(--neutral-700)] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Icon - Center on large screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`${isEven ? 'lg:col-start-2 lg:order-first' : 'lg:col-start-1'} flex justify-center lg:justify-center`}
      >
        <div className="relative">
          {/* Pulsing background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: step.color, filter: 'blur(20px)' }}
          />
          
          {/* Icon container */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-white"
          >
            <div 
              className="absolute inset-0 rounded-full opacity-20"
              style={{ backgroundColor: step.color }}
            />
            <Icon className="w-12 h-12 lg:w-16 lg:h-16 relative z-10" style={{ color: step.color }} strokeWidth={2} />
          </motion.div>

          {/* Step number badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] flex items-center justify-center text-white font-bold shadow-lg"
          >
            {index + 1}
          </motion.div>
        </div>
      </motion.div>

      {/* Connecting line to center (mobile only) */}
      <div className="lg:hidden absolute left-12 top-24 bottom-0 w-0.5 bg-[var(--neutral-200)]" />
    </motion.div>
  );
}