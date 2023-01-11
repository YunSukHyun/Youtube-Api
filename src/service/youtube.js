import axios from "axios";
class Youtube{
  constructor(key){
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: {key},
    });
  }
  async mostPopular(){    
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    console.log(response);
    return response.data.items;
  }
  async search(query){
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    })
    const res = response.data.items.map(item => ({...item, id: item.id.videoId}));
    console.log(response.data.items)
    console.log(res);
    return res;
  }
}

export default Youtube;
 