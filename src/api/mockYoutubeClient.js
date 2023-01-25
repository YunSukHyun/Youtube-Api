import axios from 'axios';
import { useParams } from 'react-router-dom';

export default class MockYoutubeClient {
  async search() {
    return useParams.relatedToVideoId
      ? axios.get('/video/related.json')
      : axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channels() {
    return axios.get('/videos/channel.json');
  }
}


