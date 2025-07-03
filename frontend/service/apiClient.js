class ApiClient {
constructor() {
    this.baseURL = "https://moodify-0lej.onrender.com/api/v1";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        headers,
        credentials: "include",
      };
      console.log(`Fetching ${url}`);
      const response = await fetch(url, config);
      //check if response.ok === value

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error", error);
      throw error;
    }
  }

  //Auth endpoints

  async signup(fullName, email, password,username) {
    return this.customFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({ fullName, email, password,username }),
    });
  }
  async login(email, password) {
    return this.customFetch("/auth/loginUser", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async getProfile() {
    return this.customFetch("/auth/getme");
  }

   async verifyEmail(token) {
    return this.customFetch(`/auth/emailVerification/${token}`, {
      method: "GET",
    });
  }
}

const apiClient = new ApiClient();

export default apiClient;