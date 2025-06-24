import axios from "axios";

class RapidApiClient {
    constructor() {
        this.baseURL = "https://spotify23.p.rapidapi.com/api/v1";
        this.headers = {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
            "Content-Type": "application/json",
        };
    }


  async getPlaylist(id) {
    const url = `${this.baseURL}/playlist_tracks/`;
    const params = {
      id: id,
      offset: '0',
      limit: '10',
    };

    try {
    
     const response = await axios.get(url, {
        params,
        headers: this.headers,
      });

      return response.data;

    } catch (error) {
      console.error("RapidAPI Error:", error);
      throw error;
    }
  }


}

const rapidApiClient = new RapidApiClient();
export default rapidApiClient;