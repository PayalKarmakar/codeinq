import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, ArrowRight } from 'lucide-react';
import logo from '@/assets/e067c019f0a49821135e11a5c1935858a9fcfec6.png';
import { useState } from 'react';
import ConsultationModal from './ConsultationModal';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '#web-development' },
    { label: 'Mobile Apps', href: '#mobile-apps' },
    { label: 'AI Solutions', href: '#ai-solutions' },
    { label: 'UI/UX Design', href: '#design' },
    { label: 'Cloud & DevOps', href: '#cloud-devops' },
  ],
  solutions: [
    { label: 'SaaS Platforms', href: '#saas' },
    { label: 'Automation Tools', href: '#automation' },
    { label: 'Analytics Dashboards', href: '#analytics' },
    { label: 'CRM & ERP Systems', href: '#crm-erp' },
  ],
  industries: [
    { label: 'FinTech', href: '#fintech' },
    { label: 'Healthcare', href: '#healthcare' },
    { label: 'EdTech', href: '#edtech' },
    { label: 'E-Commerce', href: '#ecommerce' },
    { label: 'Logistics', href: '#logistics' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Our Process', href: '#process' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="bg-gradient-to-b from-[var(--neutral-900)] to-[var(--neutral-950)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-1">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="CodeInQ" className="h-20 mb-2" />
              <p className="text-[var(--neutral-400)] mb-1 leading-relaxed">
                Building tomorrow's technology today. We transform ambitious ideas into 
                scalable software solutions that drive business growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@codeinq.com"
                  className="flex items-center gap-3 text-[var(--neutral-400)] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--neutral-800)] flex items-center justify-center group-hover:bg-[var(--primary-600)] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@codeinq.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-[var(--neutral-400)] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--neutral-800)] flex items-center justify-center group-hover:bg-[var(--primary-600)] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+1 (234) 567-8900</span>
                </a>
                <div className="flex items-center gap-3 text-[var(--neutral-400)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--neutral-800)] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Kolkata</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-white mb-10">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[var(--neutral-400)] hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-white mb-10">Solutions</h3>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[var(--neutral-400)] hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-bold text-white mb-10">Industries</h3>
              <ul className="space-y-2">
                {footerLinks.industries.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[var(--neutral-400)] hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-bold text-white mb-10">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[var(--neutral-400)] hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[var(--neutral-800)] pt-5 mb-6"
        >
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-[var(--neutral-400)] mb-6">
              Get the latest insights on software development, AI, and digital transformation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-[var(--neutral-800)] border border-[var(--neutral-700)] text-white placeholder-[var(--neutral-500)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-600)]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white font-medium hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--neutral-800)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-[var(--neutral-400)] text-sm">
              © {currentYear} CodeInQ. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[var(--neutral-800)] hover:bg-gradient-to-r hover:from-[var(--primary-600)] hover:to-[var(--secondary-600)] flex items-center justify-center transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-[var(--neutral-400)]">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}