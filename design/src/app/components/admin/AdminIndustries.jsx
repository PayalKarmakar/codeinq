import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import adminApi from '@/services/adminApi';

export default function AdminIndustries() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingIndustry, setEditingIndustry] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    highlight: '',
    icon: '',
    gradient: '',
    bg_gradient: '',
    order: 0,
    is_active: true,
    image: null,
  });

  useEffect(() => {
    loadIndustries();
  }, []);

  const loadIndustries = async () => {
    try {
      const data = await adminApi.getIndustries();
      setIndustries(data);
    } catch (error) {
      console.error('Error loading industries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingIndustry) {
        await adminApi.updateIndustry(editingIndustry.id, formData);
      } else {
        await adminApi.createIndustry(formData);
      }
      setShowModal(false);
      setEditingIndustry(null);
      resetForm();
      loadIndustries();
    } catch (error) {
      alert(error.message || 'Error saving industry');
    }
  };

  const handleEdit = (industry) => {
    setEditingIndustry(industry);
    setFormData({
      title: industry.title || '',
      description: industry.description || '',
      highlight: industry.highlight || '',
      icon: industry.icon || '',
      gradient: industry.gradient || '',
      bg_gradient: industry.bg_gradient || '',
      order: industry.order || 0,
      is_active: industry.is_active !== undefined ? industry.is_active : true,
      image: null,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this industry?')) return;
    try {
      await adminApi.deleteIndustry(id);
      loadIndustries();
    } catch (error) {
      alert(error.message || 'Error deleting industry');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      highlight: '',
      icon: '',
      gradient: '',
      bg_gradient: '',
      order: 0,
      is_active: true,
      image: null,
    });
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--neutral-900)]">Industries Management</h1>
        <button
          onClick={() => {
            resetForm();
            setEditingIndustry(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white rounded-lg hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          Add Industry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
          >
            <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-2">{industry.title}</h3>
            <p className="text-[var(--neutral-600)] text-sm mb-4 line-clamp-2">{industry.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {industry.is_active ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Inactive</span>
                )}
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(industry)} className="p-2 text-[var(--primary-600)] hover:bg-[var(--primary-50)] rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(industry.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
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
            <h2 className="text-2xl font-bold mb-6">{editingIndustry ? 'Edit Industry' : 'Add Industry'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Highlight</label>
                  <input
                    type="text"
                    value={formData.highlight}
                    onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Icon</label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
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
                  {editingIndustry ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingIndustry(null);
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
