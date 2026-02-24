import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, Building2, User, MessageSquare } from 'lucide-react';
import adminApi from '@/services/adminApi';

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConsultations();
  }, []);

  const loadConsultations = async () => {
    try {
      const data = await adminApi.getConsultations();
      setConsultations(data);
    } catch (error) {
      console.error('Error loading consultations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id) => {
    try {
      await adminApi.updateConsultationStatus(id);
      loadConsultations();
    } catch (error) {
      alert(error.message || 'Error updating status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'contacted':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--neutral-900)]">Consultations</h1>
        <div className="text-sm text-[var(--neutral-600)]">
          Total: {consultations.length}
        </div>
      </div>

      <div className="space-y-4">
        {consultations.map((consultation) => (
          <motion.div
            key={consultation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-[var(--neutral-500)]" />
                  <h3 className="text-xl font-semibold text-[var(--neutral-900)]">{consultation.name}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--neutral-600)]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${consultation.email}`} className="hover:text-[var(--primary-600)]">
                      {consultation.email}
                    </a>
                  </div>
                  {consultation.company && (
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {consultation.company}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(consultation.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(consultation.status)}`}>
                  {consultation.status}
                </span>
                <button
                  onClick={() => handleStatusUpdate(consultation.id)}
                  className="px-4 py-2 bg-[var(--primary-600)] text-white rounded-lg hover:bg-[var(--primary-700)] transition"
                >
                  Update Status
                </button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[var(--neutral-50)] rounded-lg">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-[var(--neutral-500)] mt-0.5" />
                <p className="text-[var(--neutral-700)]">{consultation.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
