import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, Settings, LogOut, Lock, 
  Briefcase, Lightbulb, Building2, FileText, 
  MessageSquare, Workflow, Mail, Menu, X
} from 'lucide-react';
import adminApi from '@/services/adminApi';
import AdminServices from '@/app/components/admin/AdminServices';
import AdminSolutions from '@/app/components/admin/AdminSolutions';
import AdminIndustries from '@/app/components/admin/AdminIndustries';
import AdminCaseStudies from '@/app/components/admin/AdminCaseStudies';
import AdminTestimonials from '@/app/components/admin/AdminTestimonials';
import AdminProcessSteps from '@/app/components/admin/AdminProcessSteps';
import AdminConsultations from '@/app/components/admin/AdminConsultations';
import AdminChangePassword from '@/app/components/admin/AdminChangePassword';

const menuItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'solutions', label: 'Solutions', icon: Lightbulb },
  { id: 'industries', label: 'Industries', icon: Building2 },
  { id: 'case-studies', label: 'Case Studies', icon: FileText },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'process-steps', label: 'Process Steps', icon: Workflow },
  { id: 'consultations', label: 'Consultations', icon: Mail },
  { id: 'settings', label: 'Change Password', icon: Lock },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await adminApi.getMe();
      if (response.success) {
        setUser(response.user);
      } else {
        navigate('/admin/get-in');
      }
    } catch (error) {
      navigate('/admin/get-in');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await adminApi.logout();
    navigate('/admin/get-in');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary-50)] to-[var(--secondary-50)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--primary-600)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--neutral-600)]">Loading...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverview />;
      case 'services':
        return <AdminServices />;
      case 'solutions':
        return <AdminSolutions />;
      case 'industries':
        return <AdminIndustries />;
      case 'case-studies':
        return <AdminCaseStudies />;
      case 'testimonials':
        return <AdminTestimonials />;
      case 'process-steps':
        return <AdminProcessSteps />;
      case 'consultations':
        return <AdminConsultations />;
      case 'settings':
        return <AdminChangePassword />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed lg:static lg:translate-x-0 z-50 w-64 h-screen bg-white border-r border-[var(--neutral-200)] shadow-lg lg:shadow-none"
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-[var(--neutral-200)]">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] bg-clip-text text-transparent">
              CodeInQ Admin
            </h1>
            {user && (
              <p className="text-sm text-[var(--neutral-500)] mt-1">{user.email}</p>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] text-white shadow-md'
                      : 'text-[var(--neutral-700)] hover:bg-[var(--neutral-100)]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-[var(--neutral-200)]">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-[var(--neutral-200)] px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--neutral-100)]"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="flex-1"></div>
          {user && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-600)] to-[var(--secondary-600)] flex items-center justify-center text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Overview Component
function AdminOverview() {
  const [stats, setStats] = useState({
    services: 0,
    solutions: 0,
    industries: 0,
    caseStudies: 0,
    testimonials: 0,
    processSteps: 0,
    consultations: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [services, solutions, industries, caseStudies, testimonials, processSteps, consultations] = await Promise.all([
        adminApi.getServices(),
        adminApi.getSolutions(),
        adminApi.getIndustries(),
        adminApi.getCaseStudies(),
        adminApi.getTestimonials(),
        adminApi.getProcessSteps(),
        adminApi.getConsultations(),
      ]);

      setStats({
        services: services.length || 0,
        solutions: solutions.length || 0,
        industries: industries.length || 0,
        caseStudies: caseStudies.length || 0,
        testimonials: testimonials.length || 0,
        processSteps: processSteps.length || 0,
        consultations: consultations.length || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const statCards = [
    { label: 'Services', value: stats.services, color: 'from-[var(--primary-600)] to-[var(--primary-400)]', icon: Briefcase },
    { label: 'Solutions', value: stats.solutions, color: 'from-[var(--secondary-600)] to-[var(--secondary-400)]', icon: Lightbulb },
    { label: 'Industries', value: stats.industries, color: 'from-[var(--accent-600)] to-[var(--accent-400)]', icon: Building2 },
    { label: 'Case Studies', value: stats.caseStudies, color: 'from-[var(--primary-500)] to-[var(--secondary-500)]', icon: FileText },
    { label: 'Testimonials', value: stats.testimonials, color: 'from-[var(--secondary-500)] to-[var(--accent-500)]', icon: MessageSquare },
    { label: 'Process Steps', value: stats.processSteps, color: 'from-[var(--accent-500)] to-[var(--primary-500)]', icon: Workflow },
    { label: 'Consultations', value: stats.consultations, color: 'from-[var(--primary-700)] to-[var(--secondary-700)]', icon: Mail },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--neutral-900)] mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-[var(--neutral-200)]"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-1">{card.value}</h3>
              <p className="text-[var(--neutral-600)]">{card.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
