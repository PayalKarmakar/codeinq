import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Mail, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import api from '@/services/api';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.submitConsultation({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Failed to submit consultation:', error);
      setIsSubmitting(false);
      // You can add error handling UI here
      alert('Failed to submit consultation. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--neutral-100)] hover:bg-[var(--neutral-200)] flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-[var(--neutral-600)]" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] px-8 py-6 text-white">
                <h2 className="text-3xl font-bold mb-2">Schedule a Consultation</h2>
                <p className="text-white/90">
                  Let's discuss how we can help transform your ideas into reality.
                </p>
              </div>

              {/* Form Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-400)]" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-[var(--neutral-200)] rounded-xl focus:outline-none focus:border-[var(--primary-600)] transition-colors"
                          placeholder="Name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-400)]" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-[var(--neutral-200)] rounded-xl focus:outline-none focus:border-[var(--primary-600)] transition-colors"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    {/* Company Field (Optional) */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">
                        Company <span className="text-[var(--neutral-400)]">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-400)]" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-[var(--neutral-200)] rounded-xl focus:outline-none focus:border-[var(--primary-600)] transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--neutral-700)] mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[var(--neutral-400)]" />
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 border-2 border-[var(--neutral-200)] rounded-xl focus:outline-none focus:border-[var(--primary-600)] transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  /* Success Message */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] flex items-center justify-center mx-auto mb-6"
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[var(--neutral-600)]">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
