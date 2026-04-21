// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';   //(local)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://codeinq.com/api/v1';   //(production)

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
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

  // Services
  async getServices() {
    return this.request('/services');
  }

  // Solutions
  async getSolutions() {
    return this.request('/solutions');
  }

  // Industries
  async getIndustries() {
    return this.request('/industries');
  }

  // Case Studies
  async getCaseStudies() {
    return this.request('/case-studies');
  }

  // Testimonials
  async getTestimonials() {
    return this.request('/testimonials');
  }

  // Process Steps
  async getProcessSteps() {
    return this.request('/process-steps');
  }

  // Team Members
  async getTeamMembers() {
    return this.request('/team-members');
  }

  // Blog Posts
  async getBlogPosts(limit = null) {
    const params = limit ? `?limit=${limit}` : '';
    return this.request(`/blog-posts${params}`);
  }

  async getBlogPost(slug) {
    return this.request(`/blog-posts/${slug}`);
  }

  // Consultations
  async submitConsultation(data) {
    return this.request('/consultations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export default new ApiService();
