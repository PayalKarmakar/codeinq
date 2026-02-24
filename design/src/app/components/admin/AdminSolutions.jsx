import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import adminApi from '@/services/adminApi';

export default function AdminSolutions() {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingSolution, setEditingSolution] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    gradient: '',
    order: 0,
    is_active: true,
    image: null,
    outcomes: [],
    features: [],
  });

  useEffect(() => {
    loadSolutions();
  }, []);

  const loadSolutions = async () => {
    try {
      const data = await adminApi.getSolutions();
      setSolutions(data);
    } catch (error) {
      console.error('Error loading solutions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSolution) {
        await adminApi.updateSolution(editingSolution.id, formData);
      } else {
        await adminApi.createSolution(formData);
      }
      setShowModal(false);
      setEditingSolution(null);
      resetForm();
      loadSolutions();
    } catch (error) {
      alert(error.message || 'Error saving solution');
    }
  };

  const handleEdit = (solution) => {
    setEditingSolution(solution);
    setFormData({
      title: solution.title || '',
      description: solution.description || '',
      gradient: solution.gradient || '',
      order: solution.order || 0,
      is_active: solution.is_active !== undefined ? solution.is_active : true,
      image: null,
      outcomes: solution.outcomes || [],
      features: solution.features || [],
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this solution?')) return;
    try {
      await adminApi.deleteSolution(id);
      loadSolutions();
    } catch (error) {
      alert(error.message || 'Error deleting solution');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      gradient: '',
      order: 0,
      is_active: true,
      image: null,
      outcomes: [],
      features: [],
    });
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--neutral-900)]">Solutions Management</h1>
        <button
          onClick={() => {
            resetForm();
            setEditingSolution(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white rounded-lg hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          Add Solution
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
          >
            <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-2">{solution.title}</h3>
            <p className="text-[var(--neutral-600)] text-sm mb-4 line-clamp-2">{solution.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {solution.is_active ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Inactive</span>
                )}
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(solution)} className="p-2 text-[var(--primary-600)] hover:bg-[var(--primary-50)] rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(solution.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
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
            <h2 className="text-2xl font-bold mb-6">{editingSolution ? 'Edit Solution' : 'Add Solution'}</h2>
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
                  <label className="block text-sm font-medium mb-2">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Gradient</label>
                  <input
                    type="text"
                    value={formData.gradient}
                    onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
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
                  {editingSolution ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingSolution(null);
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
