const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const fullUrl = `${BASE_URL}${url}`;
  
  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error (${response.status}): ${response.statusText}`);
    }

    return response.json();
  } catch (error: any) {
    console.error(`API Fetch Error [${fullUrl}]:`, error);
    if (error.message === 'Failed to fetch') {
      throw new Error(`Connection failed: The server at ${BASE_URL} could not be reached. Please check your network or API URL.`);
    }
    throw error;
  }
}

// Helper methods
export const api = {
  get: <T>(endpoint: string, options: RequestInit = {}) => 
    apiRequest<T>(endpoint, { ...options, method: 'GET' }),
    
  post: <T>(endpoint: string, data?: any, options: RequestInit = {}) => 
    apiRequest<T>(endpoint, { 
      ...options, 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
    
  put: <T>(endpoint: string, data?: any, options: RequestInit = {}) => 
    apiRequest<T>(endpoint, { 
      ...options, 
      method: 'PUT', 
      body: JSON.stringify(data) 
    }),
    
  delete: <T>(endpoint: string, options: RequestInit = {}) => 
    apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),
};
