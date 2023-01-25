import React from 'react';
import { useYoutubeApi } from '../context/youtubeApiContext';
import {useQuery} from '@tanstack/react-query';
import VideoCard from '../pages/videoCard';

export default function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi();
  const {isLoading, err, data: videos}= 
    useQuery(['related', id], () => youtube.relatedVideos(id));
  return (
  <>
    {isLoading && <p>Loading...</p>}
    {err && <p>Something is wrong</p>}
    {videos && 
      <ul>
        {videos.map(video => <VideoCard key={video.id} video={video}/>)}
      </ul>}
  </>)
}

