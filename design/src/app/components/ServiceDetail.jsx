import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Code, Layers, Rocket, Settings, Shield, Users, Zap } from 'lucide-react';

const serviceData = {
  web: {
    title: 'Web Development',
    subtitle: 'Build Modern, Scalable Web Applications',
    description: 'Transform your vision into powerful web experiences that drive growth and engagement.',
    hero: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzcwMTAxMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    problems,
    process,
    technologies,
    benefits,
    gradient: 'from-[var(--primary-600)] to-[var(--primary-700)]',
  },
  // Add other service types here...
};

export default function ServiceDetail({ serviceType = 'web' }: ServiceDetailProps) {
  const service = serviceData[serviceType];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3] overflow-hidden" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--primary-200)] mb-6">
                <Code className="w-4 h-4 text-[var(--primary-600)]" />
                <span className="text-sm font-medium text-[var(--primary-700)]">Service Details</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                <span className="block text-[var(--neutral-900)]">{service.title}</span>
              </h1>
              <p className="text-xl text-[var(--neutral-700)] mb-8">{service.subtitle}</p>
              <p className="text-lg text-[var(--neutral-700)] leading-relaxed mb-8">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full bg-gradient-to-r ${service.gradient} text-white font-medium shadow-lg inline-flex items-center gap-2`}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={service.hero} alt={service.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-600)]/20 to-[var(--secondary-600)]/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Problems We Solve</h2>
            <p className="text-lg text-[var(--neutral-700)]">Overcome challenges with proven solutions</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[var(--neutral-50)] border border-[var(--neutral-200)] hover:shadow-lg transition-shadow"
              >
                <CheckCircle2 className="w-8 h-8 text-[var(--primary-600)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-[var(--neutral-700)]">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Our Process</h2>
            <p className="text-lg text-[var(--neutral-700)]">A proven workflow for delivering excellence</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-[var(--neutral-700)]">{step.description}</p>
                    </div>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[var(--primary-300)] to-transparent -z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Tools & Technologies</h2>
            <p className="text-lg text-[var(--neutral-700)]">Best-in-class tech stack for optimal results</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary-50)] to-[var(--secondary-50)] border border-[var(--primary-200)] font-medium text-[var(--neutral-700)]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Key Benefits</h2>
            <p className="text-lg text-[var(--neutral-700)]">Results that drive business success</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-[var(--primary-200)] shadow-lg hover:shadow-xl transition-shadow"
              >
                <Zap className="w-8 h-8 text-[var(--secondary-600)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-[var(--neutral-700)]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's transform your ideas into reality. Schedule a free consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-[var(--primary-700)] font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-all"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
