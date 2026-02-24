import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import adminApi from '@/services/adminApi';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    quote: '',
    rating: 5,
    order: 0,
    is_active: true,
    image: null,
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const data = await adminApi.getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTestimonial) {
        await adminApi.updateTestimonial(editingTestimonial.id, formData);
      } else {
        await adminApi.createTestimonial(formData);
      }
      setShowModal(false);
      setEditingTestimonial(null);
      resetForm();
      loadTestimonials();
    } catch (error) {
      alert(error.message || 'Error saving testimonial');
    }
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name || '',
      role: testimonial.role || '',
      company: testimonial.company || '',
      quote: testimonial.quote || '',
      rating: testimonial.rating || 5,
      order: testimonial.order || 0,
      is_active: testimonial.is_active !== undefined ? testimonial.is_active : true,
      image: null,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      await adminApi.deleteTestimonial(id);
      loadTestimonials();
    } catch (error) {
      alert(error.message || 'Error deleting testimonial');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      role: '',
      company: '',
      quote: '',
      rating: 5,
      order: 0,
      is_active: true,
      image: null,
    });
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--neutral-900)]">Testimonials Management</h1>
        <button
          onClick={() => {
            resetForm();
            setEditingTestimonial(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white rounded-lg hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
          >
            <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-2">{testimonial.name}</h3>
            <p className="text-[var(--neutral-600)] text-sm mb-2">{testimonial.role} at {testimonial.company}</p>
            <p className="text-[var(--neutral-600)] text-sm mb-4 line-clamp-3">{testimonial.quote}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonial.is_active ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Inactive</span>
                )}
                <span className="text-xs text-[var(--neutral-500)]">⭐ {testimonial.rating || 5}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(testimonial)} className="p-2 text-[var(--primary-600)] hover:bg-[var(--primary-50)] rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(testimonial.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-6">{editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quote *</label>
                <textarea
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span>Active</span>
                </label>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white rounded-lg"
                >
                  {editingTestimonial ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingTestimonial(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
