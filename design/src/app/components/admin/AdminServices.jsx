import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2, Briefcase } from 'lucide-react';
import adminApi from '@/services/adminApi';
import { getIcon } from '@/utils/iconMap';

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    gradient: '',
    bg_gradient: '',
    icon_bg: '',
    icon_color: '',
    order: 0,
    is_active: true,
    image: null,
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await adminApi.getServices();
      setServices(data);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingService) {
        await adminApi.updateService(editingService.id, formData);
      } else {
        await adminApi.createService(formData);
      }
      setShowModal(false);
      setEditingService(null);
      resetForm();
      loadServices();
    } catch (error) {
      alert(error.message || 'Error saving service');
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      title: service.title || '',
      description: service.description || '',
      icon: service.icon || '',
      gradient: service.gradient || '',
      bg_gradient: service.bg_gradient || '',
      icon_bg: service.icon_bg || '',
      icon_color: service.icon_color || '',
      order: service.order || 0,
      is_active: service.is_active !== undefined ? service.is_active : true,
      image: null,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      await adminApi.deleteService(id);
      loadServices();
    } catch (error) {
      alert(error.message || 'Error deleting service');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      gradient: '',
      bg_gradient: '',
      icon_bg: '',
      icon_color: '',
      order: 0,
      is_active: true,
      image: null,
    });
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--neutral-900)]">Services Management</h1>
        <button
          onClick={() => {
            resetForm();
            setEditingService(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white rounded-lg hover:shadow-lg transition"
        >
          <Plus className="w-5 h-5" />
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = getIcon(service.icon) || Briefcase;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient || 'from-[var(--primary-600)] to-[var(--secondary-600)]'} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 text-[var(--primary-600)] hover:bg-[var(--primary-50)] rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-2">{service.title}</h3>
              <p className="text-[var(--neutral-600)] text-sm mb-4 line-clamp-2">{service.description}</p>
              <div className="flex items-center gap-2">
                {service.is_active ? (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                ) : (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Inactive</span>
                )}
                <span className="text-xs text-[var(--neutral-500)]">Order: {service.order}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-6">{editingService ? 'Edit Service' : 'Add Service'}</h2>
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
                  <label className="block text-sm font-medium mb-2">Icon Name</label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="e.g., Code, Smartphone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Gradient</label>
                  <input
                    type="text"
                    value={formData.gradient}
                    onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="from-[var(--primary-600)] to-[var(--secondary-600)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Background Gradient</label>
                  <input
                    type="text"
                    value={formData.bg_gradient}
                    onChange={(e) => setFormData({ ...formData, bg_gradient: e.target.value })}
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
                  {editingService ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingService(null);
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
