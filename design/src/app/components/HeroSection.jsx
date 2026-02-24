import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import heroImage from '@/assets/92fa614c9071c03343a02984dc425185e92a1357.png';
import { useState } from 'react';
import ConsultationModal from './ConsultationModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const floatingVariants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const floatingVariants2 = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const floatingVariants3 = {
  initial: { y: 0, scale: 1 },
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const floatingVariants4 = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [0, 12, 0],
    x: [0, -8, 0],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[var(--primary-300)] to-[var(--secondary-300)] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-[var(--secondary-300)] to-[var(--accent-300)] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] border border-[var(--primary-200)]">
                <Sparkles className="w-4 h-4 text-[var(--primary-600)]" />
                <span className="text-sm font-medium text-[var(--primary-700)]">
                  Where Code Meets Intelligence
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="block text-[var(--neutral-900)]">Build the Future</span>
                <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
                  with Intelligence
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-[var(--neutral-700)] max-w-xl leading-relaxed"
            >
              Enterprise-grade software solutions that transform ambitious ideas into scalable reality. 
              From startups to Fortune 500s, we deliver innovation at every scale.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 py-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--primary-100)]">
                  <Zap className="w-5 h-5 text-[var(--primary-600)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--neutral-900)]">Fast Delivery</div>
                  <div className="text-sm text-[var(--neutral-700)]">Agile sprints</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--secondary-100)]">
                  <Shield className="w-5 h-5 text-[var(--secondary-600)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--neutral-900)]">Enterprise Ready</div>
                  <div className="text-sm text-[var(--neutral-700)]">Secure & scalable</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--accent-100)]">
                  <Sparkles className="w-5 h-5 text-[var(--accent-600)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--neutral-900)]">AI-Powered</div>
                  <div className="text-sm text-[var(--neutral-700)]">Smart solutions</div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(46, 49, 146, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-700)] text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full border-2 border-[var(--primary-600)] text-[var(--primary-700)] font-medium hover:bg-[var(--primary-50)] transition-all"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-[var(--neutral-200)]">
              <p className="text-sm text-[var(--neutral-600)] mb-4">Trusted by industry leaders</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="font-semibold text-[var(--neutral-700)]">Microsoft</div>
                <div className="font-semibold text-[var(--neutral-700)]">Amazon</div>
                <div className="font-semibold text-[var(--neutral-700)]">Stripe</div>
                <div className="font-semibold text-[var(--neutral-700)]">Shopify</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Main Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-20"
            >
              <img
                src={heroImage}
                alt="AI Technology"
                className="w-full h-auto rounded-2xl opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-600)]/20 via-transparent to-[var(--secondary-600)]/20 rounded-2xl mix-blend-overlay" />
            </motion.div>

            {/* AI Neural Network - Top Left */}
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="absolute top-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border border-[var(--neutral-200)] z-30 opacity-90"
            >
              <img
                src="https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXVyYWwlMjBuZXR3b3JrJTIwcHVycGxlfGVufDF8fHx8MTc3MDYxOTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Intelligence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-600)]/30 to-[var(--accent-600)]/20 mix-blend-overlay" />
            </motion.div>

            {/* Cloud Infrastructure - Bottom Left */}
            <motion.div
              variants={floatingVariants2}
              initial="initial"
              animate="animate"
              className="absolute bottom-0 left-8 w-56 h-40 rounded-2xl overflow-hidden shadow-xl border border-[var(--neutral-200)] z-25 opacity-90"
            >
              <img
                src="https://images.unsplash.com/photo-1676911809746-85d90edbbe4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwcHVycGxlfGVufDF8fHx8MTc3MDYxOTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cloud Infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[var(--secondary-600)]/30 to-[var(--primary-600)]/20 mix-blend-overlay" />
            </motion.div>

            {/* Analytics Dashboard - Top Right */}
            <motion.div
              variants={floatingVariants3}
              initial="initial"
              animate="animate"
              className="absolute top-12 right-0 w-52 h-48 rounded-2xl overflow-hidden shadow-xl border border-[var(--neutral-200)] z-30 opacity-90"
            >
              <img
                src="https://images.unsplash.com/photo-1770520212758-ff3c4e5e11b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHB1cnBsZXxlbnwxfHx8fDE3NzA2MTk0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-600)]/30 to-[var(--secondary-600)]/20 mix-blend-overlay" />
            </motion.div>

            {/* Mobile Interface - Bottom Right */}
            <motion.div
              variants={floatingVariants4}
              initial="initial"
              animate="animate"
              className="absolute bottom-8 right-12 w-44 h-52 rounded-2xl overflow-hidden shadow-xl border border-[var(--neutral-200)] z-25 opacity-90"
            >
              <img
                src="https://images.unsplash.com/photo-1761305135173-616efff573b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjB0ZWNobm9sb2d5JTIwcHVycGxlfGVufDF8fHx8MTc3MDYxOTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mobile Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-600)]/20 to-[var(--accent-600)]/20 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--neutral-300)] flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--primary-600)]"
          />
        </motion.div>
      </motion.div>
      
      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        
    </section>
  );
}
