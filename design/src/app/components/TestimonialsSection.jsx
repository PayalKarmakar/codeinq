import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import api from '@/services/api';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await api.getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Reset currentIndex when testimonials change
  useEffect(() => {
    if (testimonials.length > 0 && currentIndex >= testimonials.length) {
      setCurrentIndex(0);
    }
  }, [testimonials, currentIndex]);

  // Auto-slide every 6 seconds (only when testimonials are loaded)
  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      if (testimonials.length > 0) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  if (loading) {
    return (
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3] relative overflow-hidden" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--neutral-700)]">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  // Safety check: ensure currentIndex is valid
  const currentTestimonial = testimonials[currentIndex];
  if (!currentTestimonial) {
    return null;
  }

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3] relative overflow-hidden" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[var(--primary-200)] to-[var(--secondary-200)] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--primary-200)] shadow-sm mb-6"
          >
            <Quote className="w-4 h-4 text-[var(--primary-600)]" />
            <span className="text-sm font-medium text-[var(--primary-700)]">Client Testimonials</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">Trusted by Leaders</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped transform.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-[var(--primary-100)]"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] flex items-center justify-center">
                  <Quote className="w-8 h-8 text-[var(--primary-600)]" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--secondary-600)] text-[var(--secondary-600)]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl lg:text-2xl text-[var(--neutral-800)] text-center leading-relaxed mb-8 font-medium">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-lg text-[var(--neutral-900)]">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-[var(--neutral-700)]">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border-2 border-[var(--primary-200)] flex items-center justify-center hover:bg-[var(--primary-50)] transition-colors shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-[var(--primary-600)]" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)]'
                      : 'w-2 bg-[var(--neutral-300)] hover:bg-[var(--neutral-400)]'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-[var(--primary-200)] flex items-center justify-center hover:bg-[var(--primary-50)] transition-colors shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-[var(--primary-600)]" />
            </motion.button>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-[var(--neutral-200)]"
        >
          <p className="text-center text-sm text-[var(--neutral-600)] mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="font-bold text-xl text-[var(--neutral-700)]">TechStart</div>
            <div className="font-bold text-xl text-[var(--neutral-700)]">HealthTech</div>
            <div className="font-bold text-xl text-[var(--neutral-700)]">RetailGiants</div>
            <div className="font-bold text-xl text-[var(--neutral-700)]">ExpressLog</div>
            <div className="font-bold text-xl text-[var(--neutral-700)]">InnovLabs</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
