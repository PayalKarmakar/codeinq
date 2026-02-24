import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Zap, Shield, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and creative problem-solving to deliver solutions that set new standards.',
    gradient: 'from-[var(--primary-500)] to-[var(--primary-700)]',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Your success is our success. We build long-term relationships based on trust, transparency, and mutual growth.',
    gradient: 'from-[var(--secondary-500)] to-[var(--secondary-700)]',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never compromise on quality. Every line of code, every design element is crafted with meticulous attention to detail.',
    gradient: 'from-[var(--accent-500)] to-[var(--accent-700)]',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We move fast without breaking things. Rapid iterations, quick pivots, and adaptive strategies keep you ahead.',
    gradient: 'from-[var(--primary-600)] to-[var(--secondary-600)]',
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Enterprise-grade security is built into every solution. We protect your data and your users with the highest standards.',
    gradient: 'from-[var(--secondary-600)] to-[var(--accent-600)]',
  },
  {
    icon: Heart,
    title: 'Impact Driven',
    description: 'We build software that makes a real difference—improving lives, streamlining operations, and creating value.',
    gradient: 'from-[var(--accent-600)] to-[var(--primary-600)]',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-[#dbd4e1] to-[#e4d7f3]" style={{ borderBottom: '5px solid #8B7BA8', borderBlockStartColor: '#8B7BA8', borderRadius: '20px' }}>
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
            <Heart className="w-4 h-4 text-[var(--primary-600)]" />
            <span className="text-sm font-medium text-[var(--primary-700)]">About CodeInQ</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl mb-6">
            <span className="block text-[var(--neutral-900)]">Building Tomorrow's</span>
            <span className="block bg-gradient-to-r from-[var(--primary-700)] to-[var(--secondary-700)] bg-clip-text text-transparent">
              Technology Today
            </span>
          </h2>
          
          <p className="text-lg text-[var(--neutral-700)] max-w-3xl mx-auto leading-relaxed">
            We're not just a software company—we're your technology partner. 
            With a passion for innovation and a commitment to excellence, we turn complex challenges 
            into elegant solutions that drive real business outcomes.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] flex items-center justify-center mb-6">
              <Target className="w-10 h-10 text-[var(--primary-600)]" />
            </div>
            <div className="pl-28">
              <h3 className="text-3xl font-bold text-[var(--neutral-900)] mb-4">Our Mission</h3>
              <p className="text-lg text-[var(--neutral-700)] leading-relaxed">
                To empower businesses of all sizes with intelligent, scalable software solutions 
                that accelerate growth, enhance efficiency, and create lasting competitive advantages 
                in the digital economy.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-[var(--secondary-100)] to-[var(--accent-100)] flex items-center justify-center mb-6">
              <Eye className="w-10 h-10 text-[var(--secondary-600)]" />
            </div>
            <div className="pl-28">
              <h3 className="text-3xl font-bold text-[var(--neutral-900)] mb-4">Our Vision</h3>
              <p className="text-lg text-[var(--neutral-700)] leading-relaxed">
                To be the world's most trusted technology partner, recognized for transforming 
                ambitious ideas into market-leading products through innovation, craftsmanship, 
                and unwavering dedication to client success.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Culture Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMGRpdmVyc2V8ZW58MXx8fHwxNzcwMDE2NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-600)]/20 to-[var(--secondary-600)]/20 mix-blend-overlay" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzAxMDEzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Innovation Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-600)]/20 to-[var(--accent-600)]/20 mix-blend-overlay" />
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[var(--neutral-900)] mb-4">Our Core Values</h3>
            <p className="text-lg text-[var(--neutral-700)] max-w-2xl mx-auto">
              These principles guide everything we do—from how we write code to how we interact with clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[var(--neutral-200)]"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[var(--primary-50)] to-[var(--secondary-50)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 shadow-sm`}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </motion.div>

                    <h4 className="text-xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary-700)] transition-colors">
                      {value.title}
                    </h4>

                    <p className="text-[var(--neutral-700)] leading-relaxed group-hover:text-[var(--neutral-800)] transition-colors">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${value.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        
      </div>
    </section>
  );
}
