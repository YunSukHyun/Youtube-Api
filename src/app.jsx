import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC6e26hiKQ2Qgg5ksbxDEqtCGpWlxlsawc&key=AIzaSyC6e26hiKQ2Qgg5ksbxDEqtCGpWlxlsawc", requestOptions)
      .then(response => response.json())
      .then(result => {
          setVideos(result.items)
          console.log(result);
      })
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos}/>
}

export default App;
