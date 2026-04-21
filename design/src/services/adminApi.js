// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';   //(local)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://codeinq.com/api/v1';   //(production)

class AdminApiService {
  constructor() {
    this.token = localStorage.getItem('admin_token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('admin_token', token);
    } else {
      localStorage.removeItem('admin_token');
    }
  }

  getToken() {
    return this.token || localStorage.getItem('admin_token');
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = this.getToken();
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    // Handle FormData (for file uploads)
    if (options.body instanceof FormData) {
      delete config.headers['Content-Type'];
    }

    try {
      const response = await fetch(url, config);

      if (response.status === 401) {
        this.setToken(null);
        window.location.href = '/admin/get-in';
        throw new Error('Unauthorized');
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'An error occurred' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Authentication
  async login(email, password) {
    const response = await this.request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.success && response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async logout() {
    try {
      await this.request('/admin/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.setToken(null);
    }
  }

  async getMe() {
    return this.request('/admin/me');
  }

  async changePassword(currentPassword, newPassword, confirmPassword) {
    return this.request('/admin/change-password', {
      method: 'POST',
      body: JSON.stringify({ current_password: currentPassword, new_password: newPassword, confirm_password: confirmPassword }),
    });
  }

  // Services
  async getServices() {
    return this.request('/admin/services');
  }

  async createService(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      }
    });
    return this.request('/admin/services', { method: 'POST', body: formData });
  }

  async updateService(id, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
        }
      }
    });
    formData.append('_method', 'PUT');
    return this.request(`/admin/services/${id}`, { method: 'POST', body: formData });
  }

  async deleteService(id) {
    return this.request(`/admin/services/${id}`, { method: 'DELETE' });
  }

  // Solutions
  async getSolutions() {
    return this.request('/admin/solutions');
  }

  async createSolution(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
        }
      }
    });
    return this.request('/admin/solutions', { method: 'POST', body: formData });
  }

  async updateSolution(id, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
        }
      }
    });
    formData.append('_method', 'PUT');
    return this.request(`/admin/solutions/${id}`, { method: 'POST', body: formData });
  }

  async deleteSolution(id) {
    return this.request(`/admin/solutions/${id}`, { method: 'DELETE' });
  }

  // Industries
  async getIndustries() {
    return this.request('/admin/industries');
  }

  async createIndustry(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      }
    });
    return this.request('/admin/industries', { method: 'POST', body: formData });
  }

  async updateIndustry(id, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      }
    });
    formData.append('_method', 'PUT');
    return this.request(`/admin/industries/${id}`, { method: 'POST', body: formData });
  }

  async deleteIndustry(id) {
    return this.request(`/admin/industries/${id}`, { method: 'DELETE' });
  }

  // Case Studies
  async getCaseStudies() {
    return this.request('/admin/case-studies');
  }

  async createCaseStudy(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
        }
      }
    });
    return this.request('/admin/case-studies', { method: 'POST', body: formData });
  }

  async updateCaseStudy(id, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
        }
      }
    });
    formData.append('_method', 'PUT');
    return this.request(`/admin/case-studies/${id}`, { method: 'POST', body: formData });
  }

  async deleteCaseStudy(id) {
    return this.request(`/admin/case-studies/${id}`, { method: 'DELETE' });
  }

  // Testimonials
  async getTestimonials() {
    return this.request('/admin/testimonials');
  }

  async createTestimonial(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      }
    });
    return this.request('/admin/testimonials', { method: 'POST', body: formData });
  }

  async updateTestimonial(id, data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] !== null && data[key] !== undefined) {
        if (key === 'image' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      }
    });
    formData.append('_method', 'PUT');
    return this.request(`/admin/testimonials/${id}`, { method: 'POST', body: formData });
  }

  async deleteTestimonial(id) {
    return this.request(`/admin/testimonials/${id}`, { method: 'DELETE' });
  }

  // Process Steps
  async getProcessSteps() {
    return this.request('/admin/process-steps');
  }

  async createProcessStep(data) {
    return this.request('/admin/process-steps', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProcessStep(id, data) {
    return this.request(`/admin/process-steps/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProcessStep(id) {
    return this.request(`/admin/process-steps/${id}`, { method: 'DELETE' });
  }

  // Consultations
  async getConsultations() {
    return this.request('/admin/consultations');
  }

  async updateConsultationStatus(id) {
    return this.request(`/admin/consultations/${id}/status`, { method: 'PATCH' });
  }
}

export default new AdminApiService();
