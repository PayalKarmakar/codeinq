import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import adminApi from '@/services/adminApi';

export default function AdminCaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    industry: '',
    description: '',
    gradient: '',
    order: 0,
    is_active: true,
    image: null,
    metrics: [],
    tags: [],
  });

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    try {
      const data = await adminApi.getCaseStudies();
      setCaseStudies(data);
    } catch (error) {
      console.error('Error loading case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCaseStudy) {
        await adminApi.updateCaseStudy(editingCaseStudy.id, formData);
      } else {
        await adminApi.createCaseStudy(formData);
      }
      setShowModal(false);
      setEditingCaseStudy(null);
      resetForm();
      loadCaseStudies();
    } catch (error) {
      alert(error.message || 'Error saving case study');
    }
  };

  const handleEdit = (caseStudy) => {
    setEditingCaseStudy(caseStudy);
    setFormData({
      title: caseStudy.title || '',
      client: caseStudy.client || '',
      industry: caseStudy.industry || '',
      description: caseStudy.description || '',
      gradient: caseStudy.gradient || '',
      order: caseStudy.order || 0,
      is_active: caseStudy.is_active !== undefined ? caseStudy.is_active : true,
      image: null,
      metrics: caseStudy.metrics || [],
      tags: caseStudy.tags || [],
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    try {
      await adminApi.deleteCaseStudy(id);
      loadCaseStudies();
    } catch (error) {
      alert(error.message || 'Error deleting case study');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      client: '',
      industry: '',
      description: '',
      gradient: '',
      order: 0,
      is_active: true,
      image: null,
      metrics: [],
      tags: [],
    });
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--neutral-900)]">Case Studies Management</h1>
        <button
          onClick={() => {
            resetForm();
            setEditingCaseStudy(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white rounded-lg hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          Add Case Study
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
          >
            <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-2">{caseStudy.title}</h3>
            <p className="text-[var(--neutral-600)] text-sm mb-4 line-clamp-2">{caseStudy.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {caseStudy.is_active ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Inactive</span>
                )}
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(caseStudy)} className="p-2 text-[var(--primary-600)] hover:bg-[var(--primary-50)] rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(caseStudy.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
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
            <h2 className="text-2xl font-bold mb-6">{editingCaseStudy ? 'Edit Case Study' : 'Add Case Study'}</h2>
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Client</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
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
                  {editingCaseStudy ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingCaseStudy(null);
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
