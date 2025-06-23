import axios from "axios";

class RapidApiClient {
    constructor() {
        this.baseURL = "https://spotify23.p.rapidapi.com";
        this.headers = {
            'x-rapidapi-key': '86da03215dmshbca3ad8efc48440p17d35bjsnfb189da6ef35',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            "Content-Type": "application/json",
        };
    }




    //   async getplaylist(playlist) {
    //     return this.fetchData(`/playlist_tracks/${playlist}`
    //   }

  async getPlaylist(id) {
    const url = `${this.baseURL}/playlist_tracks/`;
    const params = {
      id: id,
      offset: '0',
      limit: '10',
    };

    try {
      const response = await axios.get(url, {
         params: params,
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